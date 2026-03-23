import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId: mongoose.Schema.Types.ObjectId,
    senderId: mongoose.Schema.Types.ObjectId,
    encryptedMessage: String,
    mediaUrl: String,
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);