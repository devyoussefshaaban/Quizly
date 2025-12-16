import { NextFunction, Request, Response } from "express";
import User from "../models/userModel";
import jwt, { JwtPayload } from "jsonwebtoken";
import { isResponseError } from "../interfaces/errorInterface";

interface jwtDecodedPayload extends JwtPayload { userId: string, role: string }

const auth = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    const headerAuth = req.headers.authorization;

    try {
        if (headerAuth && headerAuth.startsWith("Bearer")) {
            token = headerAuth.split(" ")[1];

            const decode: jwtDecodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY || "") as jwtDecodedPayload;

            req.user = await User.findById(decode.userId);

            next();
        } else {
            throw new Error("Not authorized, no token.");
        }
    } catch (error) {
        if (isResponseError(error)) {
            res.status(401).json({ success: false, message: error.message });
        } else {
            res.status(401).json({ success: false, message: "Unauthorized" });
        }
    }
};

export { auth };