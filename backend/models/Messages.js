import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: mongoose.Schema.Types.ObjectId,
    receiverId: mongoose.Schema.Types.ObjectId,
    encryptedMessage: String,
    mediaUrl: String,
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);