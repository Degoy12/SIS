import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "90px 20px",
        textAlign: "center"
      }}
    >
      <h2>⚙️ Einstellungen</h2>

      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          background: "rgba(118, 42, 130, 0.1)",
          border: "1px solid rgba(118, 42, 130, 0.3)",
          borderRadius: "15px",
          maxWidth: "400px",
          marginInline: "auto",
          textAlign: "left"
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Benachrichtigungen:</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Sprache:</label>
          <select style={{ width: "100%", padding: "8px", borderRadius: "8px" }}>
            <option>Deutsch</option>
            <option>Englisch</option>
          </select>
        </div>
        <div>
          <button
            style={{
              background: "#ef4444",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Konto löschen
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
