import express from "express";
import runPrompts from "../prompts/runPrompts.js";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.BARD_API_KEY;

router.get("/test", (req, res) => {
  res.send("Hello World");
});

router.post("/identify-roles", async (req, res) => {
  try {
    const data = await req.body.resumeInfo;
    const roles = await runPrompts("identifyRole", data, API_KEY);
    res.json(roles);
  } catch (err) {
    console.log("err", err);
  }
});

export default router;
