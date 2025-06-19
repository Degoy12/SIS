import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CenteredLayout from "../components/Layout";

const RegisterPage = () => {
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    if (!nickname || !birthdate || !email || !password || !confirmPassword) {
      setError("Alle Felder sind erforderlich.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwörter stimmen nicht überein.");
      return;
    }
    if (password.length < 8) {
      setError("Das Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }

    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    if (age < 20) {
      setError("Nur Nutzer ab 20 Jahren.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/v1/auth/register", {
        nickname,
        birthdate,
        email,
        password
      });
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("email", email);
      localStorage.setItem("birthdate", birthdate);
      setLoading(false);
      alert("Registrierung war erfolgreich!");
      navigate("/profile");
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.detail || "Registrierungsfehler. Bitte versuchen Sie es erneut.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <CenteredLayout>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>Registrieren</h1>
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      {loading && <div>Wird gesendet...</div>}
      <form onSubmit={e => e.preventDefault()}>
        <div style={{ marginBottom: 16 }}>
          <label>Nickname:</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Geburtsdatum:</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>E-Mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Passwort:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Passwort wiederholen:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
          <input type="checkbox" id="showpw" checked={showPassword} onChange={() => setShowPassword(!showPassword)} style={{ marginRight: 8 }} />
          <label htmlFor="showpw" style={{ userSelect: "none" }}>Passwort anzeigen</label>
        </div>
        <button type="button" onClick={handleRegister} disabled={loading} style={{ width: "100%", padding: 10, borderRadius: 6, background: "#1976d2", color: "#fff", border: "none", fontWeight: 600, fontSize: 16, marginBottom: 10, cursor: loading ? "not-allowed" : "pointer" }}>
          Registrieren
        </button>
        <button type="button" onClick={handleLoginRedirect} style={{ width: "100%", padding: 10, borderRadius: 6, background: "#e0e0e0", color: "#333", border: "none", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>
          Zur Login-Seite
        </button>
      </form>
    </CenteredLayout>
  );
};

export default RegisterPage;
