import mongoose from "mongoose";
import dotenv from "dotenv";
import Role from "../models/Role.js";

dotenv.config();

const roles = [
  {
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    questions: [
      "Explain virtual DOM",
      "What is React state?",
      "Difference between var, let, const"
    ]
  },
  {
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    questions: [
      "Explain event loop",
      "What is middleware?",
      "Explain REST API"
    ]
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Role.deleteMany();
    await Role.insertMany(roles);
    console.log("✅ Roles Seeded");
    process.exit();
  })
  .catch(err => console.error(err));
