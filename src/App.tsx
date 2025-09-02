import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";
import Projects from "./components/Projects";
import Conferences from "./components/Conferences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: "#fff", color: "#cdb4db" }}
    >
      <main>
        <WhoAmI />
        <Projects />
        <Conferences />
      </main>

      <Footer />
    </div>
  );
}

export default App;
