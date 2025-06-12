import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateNickname = (nickname: string): boolean => {
    return /^[a-zA-Z0-9]{3,}$/.test(nickname);
  };

  const validateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const handleRegister = () => {
    if (!nickname || !birthdate || !email) {
      setError("Alle Felder sind erforderlich.");
      return;
    }
    if (!validateNickname(nickname)) {
      setError("Der Nickname muss mindestens 3 Zeichen enthalten.");
      return;
    }
    if (validateAge(birthdate) < 20) {
      setError("Das Mindestalter beträgt 20 Jahre.");
      return;
    }

    console.log("Registering user", { nickname, birthdate, email });
    setError("");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label>Birthdate:</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
