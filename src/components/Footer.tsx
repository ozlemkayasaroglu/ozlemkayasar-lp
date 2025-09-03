import React from "react";
import { getPalette } from "../theme/palette";

const Footer: React.FC = () => {
  const earthPastel = getPalette();
  return (
    <footer
      className="w-full mt-12 py-6 px-4 border-t"
      style={{ borderColor: earthPastel.border, color: earthPastel.text2 }}
    >
      <div className="max-w-4xl mx-auto text-center text-sm">
        © 2025  · All rights reserved
      </div>
    </footer>
  );
};

export default Footer;



