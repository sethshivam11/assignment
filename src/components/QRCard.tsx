"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";

export default function QRCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [-15, 15]), {
    stiffness: 250,
    damping: 10,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [15, -15]), {
    stiffness: 250,
    damping: 10,
  });

  const torchOpacity = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    animate(torchOpacity, 1, { type: "spring", stiffness: 200, damping: 20 });
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    animate(torchOpacity, 0, { type: "spring", stiffness: 200, damping: 20 });
  };

  const torchBackground = useTransform(
    [x, y],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(circle at ${latestX * 100}% ${
        latestY * 100
      }%, rgba(0,0,0,0.2) 0%, transparent 60%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="relative w-64 h-64 transform-3d bg-black overflow-hidden flex items-center justify-center max-xl:invisible"
    >
      <div className="invert bg-black/20 rounded-xl shadow-2xl p-3">
        <motion.div
          style={{
            background: torchBackground,
            opacity: torchOpacity,
          }}
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        />

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/qr-code.avif"
            alt="QR Code"
            width="400"
            height="400"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>
      </div>
    </motion.div>
  );
}
