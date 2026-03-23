import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/Chatwindow";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}