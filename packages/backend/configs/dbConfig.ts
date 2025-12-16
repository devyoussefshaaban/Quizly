import { connect } from "mongoose"
import { isResponseError } from "../interfaces/errorInterface"

export const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI || "")
    } catch (error) {
        if (isResponseError(error)) {
            console.error("MONGO DB CONNECTION ERROR", error.message)
        } else {
            console.error("MONGO DB CONNECTION ERROR")
        }
    }
}
