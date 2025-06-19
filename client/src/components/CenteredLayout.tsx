// src/components/CenteredLayout.tsx
import React from "react";

const CenteredLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 32 }}>
      {children}
    </div>
  );
};

export default CenteredLayout;
