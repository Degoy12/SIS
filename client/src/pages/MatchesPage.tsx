import React from "react";

interface MatchesPageProps {
  isPremium: boolean;
}

const MatchesPage: React.FC<MatchesPageProps> = ({ isPremium }) => {
  const matches = [
    { name: "Sarah M.", age: 25 },
    { name: "Alex K.", age: 28 },
    { name: "Luna V.", age: 24 }
  ];

  return (
    <div
      style={{
        padding: "90px 20px",
        textAlign: "center",
        color: "white",
        background: "#000",
        minHeight: "100vh"
      }}
    >
      <h2>💖 Deine Matches</h2>

      {isPremium ? (
        <div style={{ marginTop: "30px" }}>
          {matches.map((match, i) => (
            <div
              key={i}
              style={{
                background: "rgba(118, 42, 130, 0.1)",
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid rgba(118, 42, 130, 0.2)",
                marginBottom: "15px",
                maxWidth: "400px",
                margin: "15px auto"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #762a82, #a855f7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem"
                  }}
                >
                  👤
                </div>
                <div>
                  <div style={{ fontWeight: "bold" }}>
                    {match.name}, {match.age}
                  </div>
                  <div style={{ color: "#10b981", fontSize: "0.9rem" }}>Online</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            background: "rgba(234, 179, 8, 0.1)",
            border: "1px solid rgba(234, 179, 8, 0.3)",
            borderRadius: "15px",
            padding: "30px",
            margin: "20px auto",
            maxWidth: "400px"
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🔒</div>
          <p style={{ color: "#fbbf24" }}>Nur Premium-Mitglieder sehen ihre Matches</p>
        </div>
      )}
    </div>
  );
};

export default MatchesPage;
