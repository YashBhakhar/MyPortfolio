import { Fingerprint } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-lg font-bold text-white flex items-center justify-center gap-2 py-5">
      Made By @YashBhakhar
      <span role="img" aria-label="waving hand" className="animate-bounce">
        <Fingerprint />
      </span>
    </div>
  );
};

export default Footer;
