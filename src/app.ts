import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/users";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

export default app;
