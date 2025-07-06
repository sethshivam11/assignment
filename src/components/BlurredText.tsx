"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlurLettersOnScrollProps {
  text: string;
  className?: string;
  start?: number;
}

export default function BlurLettersOnScroll({
  text,
  className = "",
  start = 90,
}: BlurLettersOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}%`, "start 20%"],
  });

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => {
        const start = index / text.length;
        const end = start + 0.15;

        const adjustedStart = Math.min(Math.max(start, 0), 1);
        const adjustedEnd = Math.min(Math.max(end, 0), 1);

        const blur = useTransform(
          scrollYProgress,
          [adjustedStart, adjustedEnd],
          [6, 0]
        );
        const filter = useTransform(blur, (b) => `blur(${b}px)`);

        const opacity = useTransform(
          scrollYProgress,
          [adjustedStart, adjustedEnd],
          [0.5, 1]
        );

        return (
          <motion.span
            key={index}
            style={{
              filter,
              opacity,
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
