import { useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export default function InputBox({ setMessages }) {
  const [text, setText] = useState("");
  const socket = useContext(SocketContext);

  const handleSend = () => {
    if (!text.trim()) return;

    socket.emit("send_message", text);
    setText("");
  };

  return (
    <div className="p-3 flex bg-white">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-500 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}