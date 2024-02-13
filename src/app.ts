import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.mongoURL as string;

const app = express();

// body-parser middleware
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(3000);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Database is connected");
    app.listen(4000, () => console.log("Server is serving"));
  })

  .catch((error) => console.log(error));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
