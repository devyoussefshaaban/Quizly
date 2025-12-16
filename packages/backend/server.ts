import express from 'express'
import cors from "cors"
import { config } from 'dotenv'
import router from './routes/authRoute.js'
import { connectDB } from './configs/dbConfig.js'

config()
connectDB()

const server = express()

server.use(cors())
server.use(express.json())

server.use("/api/v1/auth", router)

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT: ${PORT}`))
