import React from "react";
import { getPalette } from "../theme/palette";
import profilePhoto from "/src/assets/profile-photo.jpeg";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import Conferences from "./Conferences";


const WhoAmI: React.FC<{}> = () => {
  const earthPastel = getPalette();
  return (
    <>
      <div
        className="mb-10 max-w-4xl mx-auto text-center"
        style={{
          background: earthPastel.bg,
        }}
      ><div className="pt-20">
        <img
          src={profilePhoto}
          alt="Profil Fotoğrafı"
          className="w-48 h-48  rounded-full border-2 shadow mb-2 object-cover mx-auto"
          style={{ borderColor: earthPastel.accent }}
        />
        <h1
          className="text-3xl font-bold flex items-center justify-center gap-2"
          style={{ color: earthPastel.text, letterSpacing: "-0.5px" }}
        >
          Merhaba, ben Özlem!{" "}
        </h1>
        <h2
          className="text-base font-medium mb-2"
          style={{ color: earthPastel.text }}
        >
          Frontend Developer & Etik Güzellik Savunucusu
        </h2>
        </div>
        <div className="flex flex-col items-center">
          
          <div className="w-3/4 items-center mt-6">
            <p
              className="text-center text-md px-2 py-1 rounded-md"
              style={{
                color: earthPastel.text2,
                background: "#f8f8f631",
                borderLeft: `3px solid ${earthPastel.accent}`,
                borderRight: `3px solid ${earthPastel.accent}`,
              }}
            >
              Kod,{" "}
              <span
                className="font-semibold"
                style={{ color: earthPastel.text2 }}
              >
                yapay zeka
              </span>{" "}
              ve{" "}
              <span
                className="font-semibold"
                style={{ color: earthPastel.accent }}
              >
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
            </p>
          </div>
          
        </div>
        <SocialMedia />
        
        <Projects />
        <Conferences />
      </div>
    </>
  );
};

export default WhoAmI;
