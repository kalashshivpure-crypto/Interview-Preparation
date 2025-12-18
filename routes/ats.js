import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("resume"), async (req, res) => {
  const pdfData = await pdfParse(req.file.buffer);
  const text = pdfData.text.toLowerCase();

  const keywords = ["javascript", "react", "node", "api", "mongodb"];
  let score = 0;

  keywords.forEach(k => {
    if (text.includes(k)) score += 20;
  });

  res.json({
    score,
    feedback: score > 60 ? "Good resume" : "Improve your skills section"
  });
});

export default router;
