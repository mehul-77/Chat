import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    const { receiverId, encryptedMessage, mediaUrl } = req.body;

    const msg = await Message.create({
        senderId: req.user.id,
        receiverId,
        encryptedMessage,
        mediaUrl,
    });

    res.json(msg);
};

export const getMessages = async (req, res) => {
    const { userId } = req.params;

    const msgs = await Message.find({
        $or: [
            { senderId: req.user.id, receiverId: userId },
            { senderId: userId, receiverId: req.user.id },
        ],
    }).sort({ createdAt: 1 });

    res.json(msgs);
};
