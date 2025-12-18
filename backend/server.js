import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import atsRoutes from "./routes/ats.js";
import interviewRoutes from "./routes/interview.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ats", atsRoutes);
app.use("/api/interview", interviewRoutes);

app.get("/", (req, res) => res.send("InterviewMate API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
