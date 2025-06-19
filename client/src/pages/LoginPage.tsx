import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Login</h1>

        {error && <div className="text-red-600 mb-4 text-sm text-center">{error}</div>}
        {loading && <div className="mb-4 text-center text-gray-500">Wird gesendet...</div>}

        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Passwort</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-100"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showpw"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="h-4 w-4 text-purple-600"
            />
            <label htmlFor="showpw" className="text-sm text-gray-700 dark:text-gray-300 select-none">
              Passwort anzeigen
            </label>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
