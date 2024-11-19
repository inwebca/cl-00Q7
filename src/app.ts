import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/users";
import groupRoutes from "./routes/groups";
import expenseRoutes from "./routes/expenses";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/expenses", expenseRoutes);

export default app;
