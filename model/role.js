import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: String,
  skills: [String],
  questions: [String]
});

export default mongoose.model("Role", roleSchema);
