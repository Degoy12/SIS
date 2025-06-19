import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fakeData = {
    nickname: "freakout1234",
    email: "test@example.com",
    birthdate: "1989-06-15",
    search: "Frau, Paar von 25 bis 45 Jahre",
    tags: ["BDSM", "Swinger", "Fotoshooting"],
    quote: "Keine Maske. Kein Theater. Nur ich. Und du.",
    about: "Ich bin neu hier – und ehrlich gesagt ziemlich aufgeregt.",
    height: 175,
    weight: 79,
    eyeColor: "Braungrün",
    hairColor: "Grau",
    likes: ["Blowjob", "Dessous", "Fisting"],
    dislikes: ["Augen verbinden", "Küssen"],
    membership: "Basis",
    coins: 100,
    since: "22.05.2025"
  };

  setProfile(fakeData);
  setLoading(false);
}, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Lade Profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Kein Profil gefunden.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-6 text-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a] p-6 rounded-2xl shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-800 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">{profile.nickname}</h2>
            <p className="text-sm text-gray-400">{profile.birthdate} · {profile.email}</p>
          </div>
        </div>
      </section>

      {/* Ich suche */}
      <section className="bg-[#111] p-4 rounded-2xl">
        <h3 className="text-yellow-400 font-semibold mb-2">Ich suche</h3>
        <p>{profile.search || "-"}</p>
        <div className="flex flex-wrap gap-2 text-sm mt-2">
          {profile.tags?.map((tag: string) => (
            <span key={tag} className="bg-purple-800 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* Über mich */}
      <section className="bg-[#111] p-4 rounded-2xl">
        <h3 className="text-yellow-400 font-semibold mb-2">Über mich</h3>
        <blockquote className="text-xl italic text-gray-300 border-l-4 pl-4 border-purple-600">
          {profile.quote || "Keine Maske. Kein Theater. Nur ich. Und du."}
        </blockquote>
        <p className="mt-2 text-sm">{profile.about || "Keine weiteren Angaben."}</p>
      </section>

      {/* Körperdaten */}
      <section className="grid grid-cols-2 gap-4 bg-[#111] p-4 rounded-2xl">
        <div>
          <p className="text-sm text-gray-400">Größe</p>
          <p>{profile.height || "-"} cm</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Gewicht</p>
          <p>{profile.weight || "-"} kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Augenfarbe</p>
          <p>{profile.eyeColor || "-"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Haarfarbe</p>
          <p>{profile.hairColor || "-"}</p>
        </div>
      </section>

      {/* Vorlieben */}
      <section className="bg-[#111] p-4 rounded-2xl">
        <h3 className="text-yellow-400 font-semibold mb-2">Vorlieben</h3>
        <div className="flex flex-wrap gap-2">
          {profile.likes?.map((item: string) => (
            <span key={item} className="bg-purple-900 text-white px-3 py-1 rounded-full text-xs">
              {item}
            </span>
          ))}
        </div>

        <h4 className="text-purple-400 mt-4 font-medium">Geht gar nicht</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.dislikes?.map((item: string) => (
            <span key={item} className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Account */}
      <section className="bg-[#1c1c1c] p-4 rounded-2xl">
        <h3 className="text-yellow-400 font-semibold mb-2">Account</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Mitgliedschaft: {profile.membership || "Basis"}</li>
          <li>Coins: {profile.coins || 0}</li>
          <li>Seit: {profile.since || "-"}</li>
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
