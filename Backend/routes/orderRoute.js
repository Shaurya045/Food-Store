import express from "express";
import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/place", auth, placeOrder);
router.post("/verify", auth, verifyOrder);
router.post("/userorders", auth, userOrders);
router.get("/list", listOrders);
router.post("/status", updateStatus);

export default router;
