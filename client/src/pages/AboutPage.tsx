import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px"
        }}
      >
        ℹ️ Über Sinsier
      </h1>

      <div style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", color: "#d1d5db" }}>
        <p style={{ marginBottom: "20px" }}>
          Sinsier ist mehr als nur eine Dating-Plattform. Wir glauben an eine sexpositive Community, in der Respekt, Offenheit und echte Begegnungen im Vordergrund stehen.
        </p>
        <p style={{ marginBottom: "20px" }}>
          Unsere Vision ist es, Menschen auf eine neue Art zu verbinden – über ihre Vorlieben, ihre Werte und ihren Lifestyle. Mit innovativen Features wie VR-Räumen, einem sicheren Matching-System und echten Profilen gehen wir neue Wege.
        </p>
        <p>
          Sinsier ist made with ❤️ in Europa und wird ständig weiterentwickelt – für ein sicheres, modernes und offenes Miteinander.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
