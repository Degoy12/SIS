import React from "react";

const TermsPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "90px 20px",
        textAlign: "left",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "2rem", textAlign: "center" }}>
        📜 Allgemeine Geschäftsbedingungen
      </h1>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#a855f7", fontSize: "1.2rem" }}>1. Geltungsbereich</h2>
        <p style={{ lineHeight: 1.6 }}>
          Diese Nutzungsbedingungen gelten für alle Benutzer:innen der Sinsier App. Mit der Nutzung
          erklärst du dich mit diesen Bedingungen einverstanden.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#a855f7", fontSize: "1.2rem" }}>2. Registrierung</h2>
        <p style={{ lineHeight: 1.6 }}>
          Für bestimmte Funktionen musst du dich registrieren. Du verpflichtest dich, korrekte Angaben zu machen
          und dein Konto sicher zu halten.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#a855f7", fontSize: "1.2rem" }}>3. Inhalte und Verhalten</h2>
        <p style={{ lineHeight: 1.6 }}>
          Es ist untersagt, beleidigende, rechtswidrige oder diskriminierende Inhalte zu posten. Wir behalten uns
          das Recht vor, solche Inhalte zu entfernen.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#a855f7", fontSize: "1.2rem" }}>4. Kündigung & Sperrung</h2>
        <p style={{ lineHeight: 1.6 }}>
          Bei Verstoß gegen die Nutzungsbedingungen kann dein Konto ohne Vorwarnung gesperrt oder gelöscht werden.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#a855f7", fontSize: "1.2rem" }}>5. Haftungsausschluss</h2>
        <p style={{ lineHeight: 1.6 }}>
          Wir übernehmen keine Verantwortung für das Verhalten anderer Nutzer:innen oder technische Probleme.
        </p>
      </section>

      <p style={{ fontSize: "0.8rem", color: "#9ca3af", textAlign: "center", marginTop: "40px" }}>
        Stand: Juni 2025
      </p>
    </div>
  );
};

export default TermsPage;
