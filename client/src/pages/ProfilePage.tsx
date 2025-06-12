import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    // Simulate fetching nickname from backend or local storage
    const storedNickname = localStorage.getItem("nickname") || "Guest";
    setNickname(storedNickname);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>
      <p>Nickname: {nickname}</p>
    </div>
  );
};

export default ProfilePage;
