import express from 'express'
import cors from "cors"

const server = express()

server.use(cors())
server.use(express.json())


const PORT = process.env.PORT || 8000
server.listen(PORT, console.log(`SERVER IS RUNNING ON PORT: ${PORT}`))
