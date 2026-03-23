export const validateMessage = (req, res, next) => {
    const { chatId, encryptedMessage, encryptedKey, iv } = req.body;

    if (!chatId || !encryptedMessage || !encryptedKey || !iv) {
        return res.status(400).json({ msg: "Invalid message data" });
    }

    next();
};