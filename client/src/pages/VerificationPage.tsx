import React, { useState } from "react";

const VerificationPage: React.FC = () => {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (code === "123456") {
      setVerified(true);
      setError("");
    } else {
      setVerified(false);
      setError("Der Code ist ungültig. Bitte erneut versuchen.");
    }
  };

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
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>✅ Verifizierung</h1>

      {!verified ? (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <p style={{ marginBottom: "20px", color: "#d1d5db" }}>
            Bitte gib den 6-stelligen Verifizierungscode ein, den wir dir per E-Mail gesendet haben.
          </p>

          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="z. B. 123456"
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #a855f7",
              marginBottom: "12px",
              textAlign: "center",
              fontSize: "1.2rem"
            }}
          />
          {error && <div style={{ color: "#f87171", marginBottom: "10px" }}>{error}</div>}

          <button
            onClick={handleVerify}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(135deg, #762a82, #a855f7)",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Code bestätigen
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "40px", color: "#10b981", fontSize: "1.2rem" }}>
          ✅ Verifizierung erfolgreich!
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
