import { model, Schema } from "mongoose"

const QuizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Quiz = model("Quiz", QuizSchema)
export default Quiz
