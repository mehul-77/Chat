import express from "express";
import { protect } from "../middleware/auth.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";

import { validateMessage } from "../middleware/validate.js";

router.post("/", protect, validateMessage, sendMessage);

const router = express.Router();
router.post("/", protect, sendMessage);
router.get("/:userId", protect, getMessages);
export default router;