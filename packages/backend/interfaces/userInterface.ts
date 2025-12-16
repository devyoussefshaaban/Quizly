
export interface EmailVerification {
    isVerified: boolean;
    expiresIn?: Date;
    token: string | undefined;
}

// Data needed to create a user
export interface UserAttrs {
    username: string;
    email: string;
    password: string;
    role: string;
    emailVerification: EmailVerification;
}

// What Mongo returns
export interface UserDoc extends Document, UserAttrs {
    token: string;
}