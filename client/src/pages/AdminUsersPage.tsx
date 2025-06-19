import React, { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  isPremium: boolean;
  createdAt: string;
}

const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Beispielhafte Nutzerdaten – in echtem Projekt aus API holen
    const dummyUsers: User[] = [
      { id: 1, username: "julia89", email: "julia@example.com", isPremium: true, createdAt: "2024-06-12" },
      { id: 2, username: "marco_dev", email: "marco@example.com", isPremium: false, createdAt: "2025-01-08" },
      { id: 3, username: "sunshine88", email: "sunny@example.com", isPremium: true, createdAt: "2025-04-01" },
    ];
    setUsers(dummyUsers);
  }, []);

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #762a82, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        👥 Nutzerverwaltung
      </h1>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#d1d5db" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
              <th style={{ padding: "10px" }}>#</th>
              <th style={{ padding: "10px" }}>Username</th>
              <th style={{ padding: "10px" }}>E-Mail</th>
              <th style={{ padding: "10px" }}>Premium</th>
              <th style={{ padding: "10px" }}>Beigetreten</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "10px", color: "#888" }}>{user.id}</td>
                <td style={{ padding: "10px" }}>{user.username}</td>
                <td style={{ padding: "10px" }}>{user.email}</td>
                <td style={{ padding: "10px" }}>
                  {user.isPremium ? "👑 Ja" : "❌ Nein"}
                </td>
                <td style={{ padding: "10px" }}>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
