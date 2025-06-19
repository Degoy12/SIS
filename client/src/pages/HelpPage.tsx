import React from "react";

const HelpPage: React.FC = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "90px 20px", color: "white" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{
          fontSize: "2rem",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px",
          textAlign: "center"
        }}>
          ❓ Hilfe & FAQ
        </h1>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#a855f7" }}>Wie funktioniert Sinsier?</h2>
          <p style={{ color: "#d1d5db" }}>
            Sinsier ist deine sexpositive Community zum Verknüpfen, Entdecken und Erleben. 
            Erstelle dein Profil, finde Matches, chatte und entdecke VR-Räume und Events.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#a855f7" }}>Was ist der Unterschied zwischen Free und Premium?</h2>
          <p style={{ color: "#d1d5db" }}>
            Mit Premium schaltest du alle Funktionen frei: unbegrenztes Messaging, wer dich geliked hat,
            Superlikes, VR-Zugang, exklusive Events und vieles mehr.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#a855f7" }}>Wie kann ich mein Konto löschen?</h2>
          <p style={{ color: "#d1d5db" }}>
            Schreib uns einfach über das Kontaktformular unter „Kontakt“, oder sende eine E-Mail an: 
            support@sinsier.app – wir kümmern uns zeitnah darum.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#a855f7" }}>Gibt es eine App?</h2>
          <p style={{ color: "#d1d5db" }}>
            Ja! Du kannst Sinsier als PWA auf deinem Homescreen installieren – ganz ohne App Store.
            Einfach in deinem Browser „Zum Startbildschirm hinzufügen“ wählen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
