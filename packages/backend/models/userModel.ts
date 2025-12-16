import { Schema, model } from "mongoose";
import { ROLES } from "../utils/constants.js";
import { UserDoc } from "../interfaces/userInterface.js";

const userSchema = new Schema<UserDoc>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minLength: 3,
            maxLength: 30,
            trim: true,
        },
        email: {
            type: String,
            reeuired: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: ROLES.DEVELOPER,
        },
        token: String,
        emailVerification: {
            isVerified: {
                type: Boolean,
                default: false,
            },
            token: {
                type: String,
            },
            expiresIn: {
                type: Date,
            },
        },
    },
    { timestamps: true }
);

const UserModel = model<UserDoc>("User", userSchema);

export default UserModel;