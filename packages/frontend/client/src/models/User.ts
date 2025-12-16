export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    role: string;
    emailVerification: EmailVerification;
    token: string;
}

export interface EmailVerification {
    isVerified: boolean;
    expiresIn?: Date;
    token: string | undefined;
}
