import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//Routes
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server running ");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
