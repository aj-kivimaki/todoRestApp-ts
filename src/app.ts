import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3000, () => console.log("Server is running on port 3000"));

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
