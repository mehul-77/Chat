export default function InputBox() {
  return (
    <div className="p-3 flex bg-white">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type a message..."
      />
      <button className="ml-2 bg-blue-500 text-white px-4 rounded">
        Send
      </button>
    </div>
  );
}