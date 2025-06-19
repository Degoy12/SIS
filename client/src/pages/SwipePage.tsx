import React, { useState } from "react";

interface Profile {
  id: number;
  name: string;
  age: number;
}

const mockProfiles: Profile[] = [
  { id: 1, name: "Lena", age: 27 },
  { id: 2, name: "Alex", age: 30 },
  { id: 3, name: "Mara", age: 25 }
];

const SwipePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    const profile = mockProfiles[currentIndex];
    alert(`${direction === "right" ? "❤️" : "👎"} ${profile.name} (${direction})`);
    setCurrentIndex((prev) => (prev + 1) % mockProfiles.length);
  };

  const currentProfile = mockProfiles[currentIndex];

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
      <h2>🔥 Swipe</h2>

      <div
        style={{
          marginTop: "40px",
          background: "rgba(118, 42, 130, 0.1)",
          border: "1px solid rgba(118, 42, 130, 0.3)",
          borderRadius: "20px",
          padding: "30px",
          maxWidth: "400px",
          marginInline: "auto"
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "10px" }}>👤</div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{currentProfile.name}</div>
        <div style={{ color: "#9ca3af" }}>{currentProfile.age} Jahre alt</div>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
          <button
            onClick={() => handleSwipe("left")}
            style={{
              background: "#ef4444",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            👎 Nein
          </button>
          <button
            onClick={() => handleSwipe("right")}
            style={{
              background: "#10b981",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            ❤️ Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipePage;
