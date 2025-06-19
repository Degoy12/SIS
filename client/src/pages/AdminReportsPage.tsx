import React from "react";

const AdminReportsPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px"
        }}
      >
        🚨 Gemeldete Inhalte
      </h1>

      <p style={{ color: "#d1d5db", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 40px" }}>
        Hier siehst du alle gemeldeten Beiträge, Profile und Chats zur Überprüfung. Jeder Eintrag sollte geprüft und entsprechend bearbeitet werden.
      </p>

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            style={{
              background: "rgba(118, 42, 130, 0.05)",
              border: "1px solid rgba(255, 215, 0, 0.2)",
              borderRadius: "12px",
              padding: "15px",
              marginBottom: "20px"
            }}
          >
            <h3 style={{ color: "#ffd700" }}>⚠️ Meldung #{id}</h3>
            <p style={{ marginBottom: "8px", color: "#d1d5db" }}>
              Nutzer: <strong>User{id}@sinsier.com</strong>
            </p>
            <p style={{ marginBottom: "12px", color: "#fbbf24" }}>
              Grund: Unangemessene Inhalte im Chat
            </p>
            <button
              style={{
                background: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              ✅ Geklärt
            </button>
            <button
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer"
              }}
            >
              🚫 Nutzer sperren
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReportsPage;
