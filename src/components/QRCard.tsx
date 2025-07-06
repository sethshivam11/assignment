"use client";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

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

  const [isHovering, setIsHovering] = useState(false);
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
    setIsHovering(true);
    animate(torchOpacity, 1, { type: "spring", stiffness: 200, damping: 20 });
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    setIsHovering(false);
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
      className="relative w-64 h-64 p-3 transform-3d invert bg-black/20 rounded-xl shadow-2xl overflow-hidden flex items-center justify-center max-md:invisible"
    >
      <motion.div
        style={{
          background: torchBackground,
          opacity: torchOpacity,
        }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      <div className="rounded-2xl overflow-hidden">
        <img
          src="/qr-code.avif"
          alt="QR Code"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </motion.div>
  );
}
