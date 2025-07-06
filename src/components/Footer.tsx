import React from "react";
import QRCard from "./QRCard";
import Image from "next/image";
import ScrollingText from "./ScrollingText";

function Footer() {
  return (
    <footer className="relative py-20 h-fit bg-black flex flex-col gap-10 justify-center items-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-20">
        <div className="w-96 h-96 rounded-full bg-purple-500 opacity-30 blur-[150px]" />
      </div>

      <ScrollingText />
      <div className="relative z-10">
        <QRCard />
      </div>

      <Image
        src="/download-app.avif"
        alt="Download App"
        width="120"
        height="120"
        draggable={false}
      />
    </footer>
  );
}

export default Footer;
