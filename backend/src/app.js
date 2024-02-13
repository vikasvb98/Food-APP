import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from 'multer'

const app = express()
const upload = multer()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(upload.none());
app.use(express.json ({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(express.static("public"))
app.use(cookieParser())



import userRouter from './routes/user.route.js'
app.use("/api/v1/users", userRouter)

export {app}