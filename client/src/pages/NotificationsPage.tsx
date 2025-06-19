import React from "react";

const NotificationsPage: React.FC = () => {
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
      <h2>🔔 Benachrichtigungen</h2>
      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          background: "rgba(118, 42, 130, 0.1)",
          border: "1px solid rgba(118, 42, 130, 0.3)",
          borderRadius: "15px",
          maxWidth: "400px",
          marginInline: "auto"
        }}
      >
        <p style={{ color: "#d1d5db" }}>
          Du hast aktuell keine neuen Benachrichtigungen.
        </p>
      </div>
    </div>
  );
};

export default NotificationsPage;
