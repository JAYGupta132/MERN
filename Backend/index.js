import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from "./src/routes/user.routes.js"
const app = express()
const port  = 4000

const connect = () => {
    try {
        mongoose.connect('mongodb+srv://guptajay1073:08ZQdt9W9wwRmwXz@cluster0.wub5p.mongodb.net')
        console.log("DB connect successfully");
    } catch (error) {
        console.log("Failed to connect DB");
    }
}

app.use(cors({
    origin: "*",
    credentials: true
}))
connect();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use('/api', userRouter)

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})