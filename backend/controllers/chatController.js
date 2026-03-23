import Chat from "../models/Chat.js";

export const createChat = async (req, res) => {
    const { participants } = req.body;

    const chat = await Chat.create({ participants });
    res.json(chat);
};

export const getChats = async (req, res) => {
    const chats = await Chat.find({ participants: req.user.id });
    res.json(chats);
};
