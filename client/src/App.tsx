import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <nav style={{ padding: 16 }}>
        <Link to="/">Home</Link> | <Link to="/feed">Feed</Link> | <Link to="/profile">Profile</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
