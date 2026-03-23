import InputBox from "../components/InputBox";

export default function ChatWindow() {
  return (
    <div className="w-3/4 flex flex-col bg-gray-100">
      
      <div className="flex-1 p-4 overflow-y-scroll">
        {/* Messages */}
      </div>

      <InputBox />
    </div>
  );
}