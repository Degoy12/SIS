import React from "react";

interface MessagesPageProps {
  isPremium: boolean;
}

const MessagesPage: React.FC<MessagesPageProps> = ({ isPremium }) => {
  return (
    <div
      style={{
        padding: "90px 20px",
        textAlign: "center",
        color: "white",
        background: "#000",
        minHeight: "100vh"
      }}
    >
      <h2>💬 Nachrichten</h2>

      {isPremium ? (
        <div style={{ marginTop: "30px", color: "#d1d5db" }}>
          <p>Hier erscheinen deine Chatverläufe.</p>
          <p>Das Feature wird bald verfügbar sein.</p>
        </div>
      ) : (
        <div
          style={{
            background: "rgba(234, 179, 8, 0.1)",
            border: "1px solid rgba(234, 179, 8, 0.3)",
            borderRadius: "15px",
            padding: "30px",
            margin: "40px auto",
            maxWidth: "400px"
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🔒</div>
          <p style={{ color: "#fbbf24" }}>
            Chat-Funktion nur für Premium-Mitglieder freigeschaltet.
          </p>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
