import React from "react";

const AdminDashboardPage: React.FC = () => {
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
        🛠️ Admin Dashboard
      </h1>

      <p style={{ color: "#d1d5db", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 40px" }}>
        Willkommen im Adminbereich von Sinsier. Hier bekommst du einen Überblick über Nutzeraktivitäten, gemeldete Inhalte und Systemstatus.
      </p>

      <div style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <div style={cardStyle}>
          <h3 style={cardTitle}>👥 Benutzer</h3>
          <p style={cardText}>Verwalte Nutzerkonten und Profile</p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>🚨 Meldungen</h3>
          <p style={cardText}>Bearbeite gemeldete Inhalte & Profile</p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>⚙️ Einstellungen</h3>
          <p style={cardText}>Systemoptionen und Backend-Status</p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>📊 Statistiken</h3>
          <p style={cardText}>Nutzeraktivität & Performance</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  background: "rgba(118, 42, 130, 0.1)",
  border: "1px solid rgba(118, 42, 130, 0.2)",
  borderRadius: "15px",
  padding: "20px",
  color: "#d1d5db",
  transition: "all 0.3s ease",
  cursor: "pointer"
};

const cardTitle: React.CSSProperties = {
  marginBottom: "10px",
  fontSize: "1.2rem",
  color: "#a855f7"
};

const cardText: React.CSSProperties = {
  fontSize: "0.95rem"
};

export default AdminDashboardPage;
