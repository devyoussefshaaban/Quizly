import { User } from "./User";

export interface RegisterRequestBody {
    username: string;
    email: string;
    password: string
}

export interface LoginRequestBody {
    email: string;
    password: string
}

interface Response {
    success: boolean;
    message: string;
}

export interface AuthResponse extends Response {
    data?: User
}