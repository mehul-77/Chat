import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { connectDB } from "./db.js";
import { config } from "./config.js";
import { socketHandler } from "./sockets/index.js";

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

socketHandler(io);

server.listen(config.PORT, () => {
    console.log("Server running on port", config.PORT);
});
