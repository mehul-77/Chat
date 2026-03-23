import express from "express";
import { protect } from "../middleware/auth.js";
import { createChat, getChats } from "../controllers/chatController.js";

const router = express.Router();
router.post("/", protect, createChat);
router.get("/", protect, getChats);
export default router;
