import React from "react";

const PremiumPage: React.FC = () => {
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
          marginBottom: "20px"
        }}
      >
        👑 Sinsier Premium
      </h1>

      <p style={{ maxWidth: "500px", margin: "0 auto", color: "#d1d5db", fontSize: "1.1rem" }}>
        Erlebe Sinsier ohne Grenzen: mehr Matches, mehr Nachrichten, mehr Möglichkeiten. Exklusive Features wie VR-Räume, Likes anzeigen, Boosts, Super Likes und mehr – nur für Premium-Mitglieder.
      </p>

      <div
        style={{
          background: "rgba(118, 42, 130, 0.1)",
          border: "1px solid rgba(118, 42, 130, 0.2)",
          borderRadius: "15px",
          padding: "20px",
          margin: "40px auto",
          maxWidth: "400px"
        }}
      >
        <h3 style={{ color: "#a855f7", marginBottom: "15px" }}>✨ Premium Vorteile:</h3>
        <ul style={{ color: "#d1d5db", lineHeight: "1.8", listStyleType: "none", padding: 0 }}>
          <li>🥽 VR Intimacy Rooms</li>
          <li>💬 Unbegrenzte Nachrichten</li>
          <li>👁️ Sieh, wer dich geliked hat</li>
          <li>🔥 Super Likes & Boosts</li>
          <li>🛡️ Erweiterte Privatsphäre</li>
          <li>🎯 Priority Matching</li>
        </ul>
      </div>

      <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
        Upgrade jederzeit möglich – direkt über dein Profil.
      </p>
    </div>
  );
};

export default PremiumPage;
