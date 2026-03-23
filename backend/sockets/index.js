export const socketHandler = (io) => {
    const users = {};

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("join", (userId) => {
            users[userId] = socket.id;
            io.emit("onlineUsers", Object.keys(users));
        });

        socket.on("sendMessage", (data) => {
            const receiverSocket = users[data.receiverId];
            if (receiverSocket) {
                io.to(receiverSocket).emit("receiveMessage", data);
            }
        });

        socket.on("typing", ({ to }) => {
            const receiverSocket = users[to];
            if (receiverSocket) {
                io.to(receiverSocket).emit("typing");
            }
        });

        socket.on("disconnect", () => {
            for (let userId in users) {
                if (users[userId] === socket.id) {
                    delete users[userId];
                }
            }
            io.emit("onlineUsers", Object.keys(users));
        });
    });
};