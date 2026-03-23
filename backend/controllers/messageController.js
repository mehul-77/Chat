import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    const msg = await Message.create({
        ...req.body,
        senderId: req.user.id,
    });

    res.json(msg);
};

export const getMessages = async (req, res) => {
    const msgs = await Message.find({
        chatId: req.params.chatId,
    }).sort({ createdAt: 1 });

    res.json(msgs);
};
