import express from "express";

import {
    createOrder,
    getAllOrders,
    updateAnyOrder,
} from "../controllers/orderController.js";

const router = express.Router();

console.log("orderRoute.js LOADED");

router.post("/", createOrder);

router.get("/getall", getAllOrders);

router.put("/getall/:id", updateAnyOrder);

export default router;