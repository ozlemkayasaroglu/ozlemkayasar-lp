import React from "react";
import Footer from "./Footer";
import profilePhoto from "/src/assets/profile-photo.jpeg";

const earthPastel = {
  bg: "#ffffff51", // pastel açık toprak
  border: "#918377ff", // pastel toprak
  text: "#7d6e57",
  text2: "#5b5449ff", // açık pastel koyu toprak
  accent: "#8cc887ff", // pastel yeşil
  highlight: "#e7cba9", // pastel sarımsı toprak
  leaf: "#a3c9a8", // pastel yaprak yeşili
};

const WhoAmI: React.FC = () => {
  return (
    <div
      className="mt-20 flex flex-col items-center rounded-2xl shadow p-8 mb-10 max-w-3xl mx-auto"
      style={{
        background: earthPastel.bg,
        border: `1.5px solid ${earthPastel.border}`,
      }}
    >
      <img
        src={profilePhoto}
        alt="Profil Fotoğrafı"
        className="w-48 h-48 rounded-full border-2 shadow mb-2 object-cover"
        style={{ borderColor: earthPastel.leaf }}
      />
      <h1
        className="text-2xl font-bold flex items-center gap-2"
        style={{ color: earthPastel.text, letterSpacing: "-0.5px" }}
      >
        Merhaba, ben Özlem!{" "}
        <span className="text-2xl" style={{ color: earthPastel.leaf }}>
          🌱
        </span>
      </h1>
      <h2
        className="text-base font-medium mb-8"
        style={{ color: earthPastel.text }}
      >
        Frontend Developer & Etik Güzellik Savunucusu
      </h2>
      <div className="w-full flex flex-col items-center mt-2">
        <p
          className="text-center text-sm italic px-2 py-1 rounded-md"
          style={{
            color: earthPastel.text2,
            background: "#f8f8f631",
            borderLeft: `3px solid ${earthPastel.leaf}`,
          }}
        >
          &quot;Kod,{" "}
          <span className="font-semibold" style={{ color: earthPastel.text2 }}>
            yapay zeka
          </span>{" "}
          ve{" "}
          <span className="font-semibold" style={{ color: earthPastel.leaf }}>
            sürdürülebilir güzellik
          </span>{" "}
          tutkusu ile dünyaya pozitif bir iz bırakmak için çalışıyorum.{" "}
          <span
            className="font-semibold italic"
            style={{ color: earthPastel.text2 }}
          >
            &nbsp;Pure Glowy App
          </span>
          'in yaratıcısıyım. Gelin, bu doğallığı ve farkındalığı birlikte
          büyütelim!{" "}
          <span className="text-base" style={{ color: earthPastel.leaf }}>
            🍃
          </span>
          &quot;
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WhoAmI;
