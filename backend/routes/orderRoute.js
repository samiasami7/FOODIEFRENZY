import express from "express";

const router = express.Router();

console.log("orderRoute.js LOADED");

router.post("/", (req, res) => {
  console.log("POST /api/orders HIT");
  res.json({
    success: true,
    message: "Route is working!"
  });
});

export default router;