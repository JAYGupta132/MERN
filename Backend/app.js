import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.use("/api/v1", userRouter);

export default app;
