import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId: mongoose.Schema.Types.ObjectId,
    senderId: mongoose.Schema.Types.ObjectId,
    encryptedMessage: String,
    mediaUrl: String,
    encryptedKey: String,
    iv: String,
}, { timestamps: true });

messageSchema.index({ chatId: 1 });

export default mongoose.model("Message", messageSchema);