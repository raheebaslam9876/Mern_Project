import express from "express";
const app = express()
import connectdb from "./db/connect.js"
import authRouter from "./router/authRoutes.js"
import jobRouter from "./router/jobsRoutes.js"
import "express-async-errors"
//Middlewares
import notFoundModule from "./middleware/not-found.js"
import errorHandler from "./middleware/error-handler.js";

import dotenv from "dotenv"
dotenv.config()
app.use(express.json())
app.get("/", (req, res) => {
    // throw new Error('ERROR')
    res.send("welcome");
})
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);
app.use(notFoundModule);
app.use(errorHandler);
app.use(authRouter);
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectdb(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is running at ${port}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()