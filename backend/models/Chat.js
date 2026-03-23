import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
    isGroup: { type: Boolean, default: false },
    name: String,
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);
