import React, { useState } from "react";

interface Message {
  id: number;
  sender: "user" | "partner";
  text: string;
  timestamp: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "partner", text: "Hey, wie geht’s dir?", timestamp: "12:00" },
    { id: 2, sender: "user", text: "Alles gut, und dir?", timestamp: "12:01" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "90px 20px 80px",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>💬 Chat</h2>

      <div style={{ flex: 1, overflowY: "auto", marginBottom: "20px" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                background: msg.sender === "user" ? "#762a82" : "#333",
                padding: "10px 15px",
                borderRadius: "15px",
                borderBottomRightRadius: msg.sender === "user" ? "0" : "15px",
                borderBottomLeftRadius: msg.sender === "user" ? "15px" : "0",
                color: "white",
                fontSize: "0.95rem",
              }}
            >
              <div>{msg.text}</div>
              <div style={{ fontSize: "0.7rem", marginTop: "4px", color: "#aaa", textAlign: "right" }}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nachricht eingeben..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #666",
            background: "#111",
            color: "white",
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 15px",
            background: "#a855f7",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Senden
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
