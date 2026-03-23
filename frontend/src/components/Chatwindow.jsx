import { useState, useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import InputBox from "../components/InputBox";

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const socket = useContext(SocketContext);

    useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

    return (
    <div className="w-3/4 flex flex-col bg-gray-100">
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <InputBox setMessages={setMessages} />
    </div>
  );
}