import Yup from "yup";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import { getMessage } from "../utils/translations.js";
import crypto from "crypto";
import { Request, Response } from "express";
import User from "../models/userModel.js";
import { generateToken } from "../helpers/authHelper.js";
import { generateEmailVerification } from "../helpers/sendEmail.js";
import { isResponseError } from "../interfaces/errorInterface.js";

const registerUserSchema = Yup.object().shape({
    username: Yup.string().required().min(3).max(30),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8).max(30),
});

const registerUser = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const {
            headers: { language },
            body: { username, email, password },
        } = req;

        await registerUserSchema.validate(req.body);

        if (await User.findOne({ email }))
            throw new Error(getMessage(language as "en" | "ar", "email_already_exists"));

        if (await User.findOne({ username }))
            throw new Error(getMessage(language as "en" | "ar", "username_already_exists"));

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        newUser.token = generateToken(newUser._id.toString(), newUser.role);

        await generateEmailVerification(newUser);

        res.status(201).json({
            success: true,
            message: getMessage(language as "en" | "ar", "registered_successfully"),
            data: newUser,
        });
    } catch (error) {
        if (isResponseError(error)) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
});

const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const {
            headers: { language },
            body: { email, password },
        } = req;

        await Yup.object()
            .shape({
                email: Yup.string().email().required(),
                password: Yup.string().required().min(8).max(30),
            })
            .validate({ email, password });

        const user = await User.findOne({ email });

        if (!user) throw new Error(getMessage(language as "en" | "ar", "user_not_exists"));

        if (!(await bcrypt.compare(password, user.password)))
            throw new Error(getMessage(language as "en" | "ar", "in_correct_password"));

        if (!user.emailVerification.isVerified)
            throw new Error(
                "Your email is not verified yet, kindly check out your mail inbox and click the link we sent to verify it."
            );

        user.token = generateToken(user._id.toString(), user.role);

        res.status(200).json({
            success: true,
            message: getMessage(language as "en" | "ar", "logged_in_successfully"),
            data: user,
        });
    } catch (error) {
        if (isResponseError(error)) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Some Error Occured" });
        }
    }
});

const updateMyProfile = expressAsyncHandler(async (req, res) => {
    try {
        const {
            user,
            body: { username, email, password },
        } = req;

        username ? user.$set("username", username) : null;
        email ? user.$set("email", email) : null;

        await user.save();
        res.status(201).json({
            success: true,
            message: "Profile updated successfully",
            data: user,
        });
    } catch (error) {
        if (isResponseError(error)) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Some Error Occured" });
        }
    }
});

const getUserInfo = expressAsyncHandler(async (req, res) => {
    try {
        const { user } = req;

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        if (isResponseError(error)) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Some Error Occured" });
        }
    }
});

const confirmEmail = async (req: Request, res: Response) => {
    try {
        const hashedToken = crypto
            .createHash("sha256")
            .update(req.query.token as string)
            .digest("hex");

        const user = await User.findOne({
            emailVerificationToken: hashedToken,
            emailVerificationExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        user.emailVerification.isVerified = true;
        user.emailVerification.token = undefined;
        user.emailVerification.expiresIn = undefined;
        await user.save();

        res.status(200).json({ message: "Email successfully verified" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export { registerUser, loginUser, getUserInfo, updateMyProfile, confirmEmail };