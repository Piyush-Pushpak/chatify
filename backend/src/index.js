import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Port is listening on 3000");
    connectDB();
})