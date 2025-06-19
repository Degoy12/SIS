import React, { useState } from "react";

const AdminSettingsPage: React.FC = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

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
        ⚙️ Admin Einstellungen
      </h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "left",
          background: "rgba(118, 42, 130, 0.05)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid rgba(118, 42, 130, 0.2)"
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#d1d5db", fontWeight: "bold" }}>
            🔧 Wartungsmodus aktivieren
          </label>
          <br />
          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
            style={{ marginTop: "10px" }}
          />
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            Wenn aktiviert, ist die Plattform für normale User vorübergehend nicht erreichbar.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#d1d5db", fontWeight: "bold" }}>
            📧 E-Mail-Benachrichtigungen
          </label>
          <br />
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            style={{ marginTop: "10px" }}
          />
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            Admin-Mails bei neuen Meldungen und Anfragen erhalten.
          </p>
        </div>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button
            style={{
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            💾 Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
