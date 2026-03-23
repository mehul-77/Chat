import express from "express";
import cors from "cors";
import authRoutes from "./backend/routes/authRoutes.js";
import chatRoutes from "./backend/routes/chatRoutes.js";
import messageRoutes from "./backend/routes/messageRoutes.js";
import uploadRoutes from "./backend/routes/uploadRoutes.js";
import { securityMiddleware } from "./backend/middleware/security.js";
import { errorHandler } from "./backend/middleware/errorHandler.js";

const app = express();

securityMiddleware(app);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/upload", uploadRoutes);

app.use(errorHandler);

export default app;