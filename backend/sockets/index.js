export const socketHandler = (io) => {
    const users = {};

    io.on("connection", (socket) => {

        socket.on("join", (userId) => {
            users[userId] = socket.id;
            socket.join(userId);
            io.emit("onlineUsers", Object.keys(users));
        });

        socket.on("joinChat", (chatId) => {
            socket.join(chatId);
        });

        socket.on("sendMessage", (data) => {
            io.to(data.chatId).emit("receiveMessage", data);
        });

        socket.on("typing", ({ chatId }) => {
            socket.to(chatId).emit("typing");
        });

        // 🔥 WebRTC signaling
        socket.on("webrtc-offer", ({ to, offer }) => {
            io.to(users[to]).emit("webrtc-offer", offer);
        });

        socket.on("webrtc-answer", ({ to, answer }) => {
            io.to(users[to]).emit("webrtc-answer", answer);
        });

        socket.on("webrtc-ice-candidate", ({ to, candidate }) => {
            io.to(users[to]).emit("webrtc-ice-candidate", candidate);
        });

        socket.on("disconnect", () => {
            for (let id in users) {
                if (users[id] === socket.id) delete users[id];
            }
            io.emit("onlineUsers", Object.keys(users));
        });
    });
};