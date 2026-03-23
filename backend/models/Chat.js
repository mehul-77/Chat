import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);
