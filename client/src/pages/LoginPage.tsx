import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CenteredLayout from "../components/Layout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("E-Mail und Passwort sind erforderlich.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/v1/auth/login", { email, password });
      // Здесь предполагается, что backend возвращает JWT и nickname
      localStorage.setItem("email", email);
      localStorage.setItem("nickname", response.data.nickname || "");
      setLoading(false);
      navigate("/profile");
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.detail || "Login fehlgeschlagen. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <CenteredLayout>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>Login</h1>
      {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
      {loading && <div>Wird gesendet...</div>}
      <form onSubmit={e => e.preventDefault()}>
        <div style={{ marginBottom: 16 }}>
          <label>E-Mail:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Passwort:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
          <input type="checkbox" id="showpw" checked={showPassword} onChange={() => setShowPassword(!showPassword)} style={{ marginRight: 8 }} />
          <label htmlFor="showpw" style={{ userSelect: "none" }}>Passwort anzeigen</label>
        </div>
        <button type="button" onClick={handleLogin} disabled={loading} style={{ width: "100%", padding: 10, borderRadius: 6, background: "#1976d2", color: "#fff", border: "none", fontWeight: 600, fontSize: 16, marginBottom: 10, cursor: loading ? "not-allowed" : "pointer" }}>
          Login
        </button>
      </form>
    </CenteredLayout>
  );
};

export default LoginPage;
