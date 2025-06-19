import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "90px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.7"
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Datenschutzrichtlinie
      </h1>

      <p style={{ color: "#d1d5db" }}>
        Der Schutz deiner persönlichen Daten ist uns wichtig. In dieser Datenschutzerklärung informieren wir dich darüber, welche Daten wir erfassen, wie wir sie verwenden und welche Rechte du hast.
      </p>

      <h2 style={{ marginTop: "30px", color: "#a855f7" }}>1. Erfasste Daten</h2>
      <p style={{ color: "#d1d5db" }}>
        Wir erfassen personenbezogene Daten wie Name, E-Mail-Adresse, Vorlieben, Standortdaten und Nutzungsverhalten innerhalb der App.
      </p>

      <h2 style={{ marginTop: "30px", color: "#a855f7" }}>2. Verwendung der Daten</h2>
      <p style={{ color: "#d1d5db" }}>
        Deine Daten werden verwendet, um dir ein personalisiertes Erlebnis zu bieten, passende Matches zu finden, Zahlungen abzuwickeln und Supportanfragen zu beantworten.
      </p>

      <h2 style={{ marginTop: "30px", color: "#a855f7" }}>3. Weitergabe an Dritte</h2>
      <p style={{ color: "#d1d5db" }}>
        Eine Weitergabe an Dritte erfolgt nur mit deiner ausdrücklichen Zustimmung oder wenn es gesetzlich erforderlich ist.
      </p>

      <h2 style={{ marginTop: "30px", color: "#a855f7" }}>4. Deine Rechte</h2>
      <p style={{ color: "#d1d5db" }}>
        Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung deiner Daten.
      </p>

      <h2 style={{ marginTop: "30px", color: "#a855f7" }}>5. Kontakt</h2>
      <p style={{ color: "#d1d5db" }}>
        Bei Fragen zum Datenschutz kannst du uns jederzeit über die Kontaktseite erreichen.
      </p>
    </div>
  );
};

export default PrivacyPage;
