import express from "express";
import Role from "../models/Role.js";

const router = express.Router();

router.get("/roles", async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
});

router.get("/:role", async (req, res) => {
  const role = await Role.findOne({ role: req.params.role });
  res.json({ questions: role.questions });
});

export default router;
