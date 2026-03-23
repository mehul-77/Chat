import express from "express";
import { upload } from "../middleware/upload.js";
import { uploadMedia } from "../controllers/uploadController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, upload.single("file"), uploadMedia);

export default router;