import React, { useState } from "react";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Hier später echte Suche integrieren
    alert(`Du hast nach "${query}" gesucht.`);
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
      <h2>🔍 Mitglieder suchen</h2>

      <div style={{ marginTop: "30px", maxWidth: "400px", marginInline: "auto" }}>
        <input
          type="text"
          placeholder="Name, Interessen, Ort..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "#1f2937",
            color: "#fff",
            marginBottom: "15px"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, #762a82, #a855f7)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🔍 Suchen
        </button>
      </div>

      <div style={{ marginTop: "40px", color: "#9ca3af" }}>
        🔧 Die Suche wird bald verfügbar sein. Bleib dran!
      </div>
    </div>
  );
};

export default SearchPage;
