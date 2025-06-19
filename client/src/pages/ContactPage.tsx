import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "90px 20px", color: "white" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{
          fontSize: "2rem",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px",
          textAlign: "center"
        }}>
          📩 Kontakt
        </h1>

        {sent ? (
          <div style={{
            background: "#10b981",
            padding: "20px",
            borderRadius: "12px",
            color: "#fff",
            textAlign: "center"
          }}>
            Danke für deine Nachricht! Wir melden uns schnellstmöglich.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px" }}>E-Mail</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #762a82",
                  background: "#111",
                  color: "white"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px" }}>Nachricht</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #762a82",
                  background: "#111",
                  color: "white"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #762a82, #ffd700)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              Nachricht senden
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
