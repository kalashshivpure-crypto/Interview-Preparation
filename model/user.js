import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeText: String,
  atsScore: Number,
  interviews: Array
});

export default mongoose.model("User", userSchema);
