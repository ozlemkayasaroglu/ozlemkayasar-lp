import React from "react";
import { Github, Linkedin, Mail, Heart, Twitter, Youtube } from "lucide-react";

const pastel = {
  bg: "#fff",
  border: "#cdb4db",
  text: "#cdb4db",
  subtext: "#bde0fe",
  icon: "#ffafcc",
  iconHover: "#a2d2ff",
  heart: "#ffafcc",
};

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ozlemkayasaroglu",
      color: pastel.iconHover,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ozlemkayasaroglu/",
      color: pastel.iconHover,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/ozlemkayasar",
      color: pastel.iconHover,
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ozlemkayasaroglu",
      color: pastel.iconHover,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ozlemkayasaroglu@gmail.com",
      color: pastel.iconHover,
    },
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={`${link.name} profilimi ziyaret et`}
                  style={{ color: pastel.icon, transition: "color 0.2s" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = pastel.iconHover)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = pastel.icon)
                  }
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
