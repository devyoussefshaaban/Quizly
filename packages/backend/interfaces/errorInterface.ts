export interface ResponseError extends Error { success: boolean, message: string }

export function isResponseError(error: unknown): error is ResponseError {
    return typeof error === "object" &&
        error !== null &&
        "message" in error;
}