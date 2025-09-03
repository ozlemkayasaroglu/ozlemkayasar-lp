import React from "react";
import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { getPalette } from "../theme/palette";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ozlemkayasaroglu",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ozlemkayasaroglu/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/ozlemkayasar",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ozlemkayasaroglu",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ozlemkayasaroglu@gmail.com",
    },
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <style>{`
            .social-link { color: ${getPalette().text2}; transition: color 0.2s; }
            .social-link:hover { color: ${getPalette().pink}; }
          `}</style>
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
                  className="social-link"
                >
                  <IconComponent size={28} />
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
