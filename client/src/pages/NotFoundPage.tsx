import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🚧</div>
      <h1 style={{
        fontSize: "2rem",
        marginBottom: "10px",
        background: "linear-gradient(135deg, #762a82, #ffd700)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Seite nicht gefunden
      </h1>
      <p style={{ color: "#d1d5db", maxWidth: "500px" }}>
        Die gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfe die URL oder kehre zur Startseite zurück.
      </p>

      <a
        href="/"
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "linear-gradient(135deg, #762a82, #a855f7)",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        Zurück zur Startseite
      </a>
    </div>
  );
};

export default NotFoundPage;
