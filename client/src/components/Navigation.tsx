import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, User, Settings, Bell, LogOut, LogIn } from "lucide-react";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("email");
  const nickname = localStorage.getItem("nickname") || "Nutzer";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="sinsier-navigation">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink to="/" className="text-primary">
            <Home />
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="text-primary">
            <User />
          </NavLink>
        </li>

        <li style={{ position: "relative" }}>
          <NavLink to="/notifications" className="text-primary">
            <Bell />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                backgroundColor: "#ff4d4f",
                color: "#fff",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              3
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="text-primary">
            <Settings />
          </NavLink>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-text-primary)",
              }}
              title={`Logout (${nickname})`}
            >
              <LogOut />
            </button>
          ) : (
            <NavLink to="/login" className="text-primary">
              <LogIn />
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
