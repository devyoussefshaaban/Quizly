import { connect } from "mongoose"
import { isResponseError } from "../interfaces/errorInterface"

export const connectDB = async () => {
    const isDev = process.env.NODE_ENV === "development"
    try {
        await connect(isDev ? process.env.MONGO_URI || "" : process.env.MONGO_PRODUCTION_URI || "")
    } catch (error) {
        if (isResponseError(error)) {
            console.error("MONGO DB CONNECTION ERROR", error.message)
        } else {
            console.error("MONGO DB CONNECTION ERROR")
        }
    }
}
