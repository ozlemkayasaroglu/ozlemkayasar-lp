import React, { useState, useEffect } from "react";

import WhoAmI from "./components/WhoAmI";
import Projects from "./components/Projects";
import Conferences from "./components/Conferences";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [showSection, setShowSection] = useState<"none" | "projects" | "conferences">("none");

  // Animasyonlu geçiş için class
  const fadeClass = "transition-all duration-500 ease-in-out";

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: "#fff", color: "#cdb4db" }}
    >
      <main>
        <div className={fadeClass}>
          <WhoAmI
            onShowProjects={() => setShowSection("projects")}
            onShowConferences={() => setShowSection("conferences")}
          />
        </div>
        {showSection === "projects" && (
          <div
            className={fadeClass}
            style={{
              animation: "fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <style>{`
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <Projects onBack={() => setShowSection("none")} />
          </div>
        )}
        {showSection === "conferences" && (
          <div
            className={fadeClass}
            style={{
              animation: "fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <style>{`
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <Conferences onBack={() => setShowSection("none")} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
