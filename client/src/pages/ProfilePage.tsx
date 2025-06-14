import React, { useState, useEffect } from "react";
import axios from "axios";
import CenteredLayout from "../components/Layout";

const ProfilePage = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      setError("Email не найден. Пожалуйста, войдите заново.");
      setLoading(false);
      return;
    }
    axios
      .get(`http://localhost:3001/api/v1/profile/info`, { params: { email } })
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки профиля");
        setLoading(false);
      });
  }, []);

  if (loading) return <CenteredLayout><div>Laden...</div></CenteredLayout>;
  if (error) return <CenteredLayout><div style={{ color: 'red' }}>{error}</div></CenteredLayout>;
  if (!profile) return <CenteredLayout><div>Profil nicht gefunden</div></CenteredLayout>;

  return (
    <CenteredLayout>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>Profil</h1>
      {profile.avatar_url && (
        <img src={profile.avatar_url} alt="avatar" style={{ width: 100, height: 100, borderRadius: 50, display: "block", margin: "0 auto 20px auto" }} />
      )}
      <p><b>Nickname:</b> {profile.nickname}</p>
      <p><b>E-Mail:</b> {profile.email}</p>
      <p><b>Geburtsdatum:</b> {profile.birthdate}</p>
      <p><b>Interessen:</b> {(profile.interests && profile.interests.length > 0) ? profile.interests.join(", ") : "-"}</p>
    </CenteredLayout>
  );
};

export default ProfilePage;
