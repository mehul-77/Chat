import express from "express";
import { protect } from "../middleware/auth.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import { validateMessage } from "../middleware/validate.js";

const router = express.Router();
router.post("/", protect, validateMessage, sendMessage);
router.get("/:chatId", protect, getMessages);
export default router;