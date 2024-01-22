import express from "express";
const router = express.Router();
router.get("", async (req, res) => {
  let data;
  try {
    console.log("hello");
  } catch (err) {
    console.log("err", err);
  }
  res.json(data);
});

export default router;
