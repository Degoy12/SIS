import React, { useState } from "react";

const RegisterPage = () => {
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    console.log("Registering user", { nickname, birthdate, email });
  };

  const handleLogin = () => {
    console.log("Redirecting to login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
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
