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
      {text.split("").map((char, index) => (
        <BlurredChar
          key={index}
          char={char}
          index={index}
          length={text.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function BlurredChar({
  char,
  index,
  length,
  scrollYProgress,
}: {
  char: string;
  index: number;
  length: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const startRatio = index / length;
  const endRatio = startRatio + 0.15;

  const adjustedStart = Math.min(Math.max(startRatio, 0), 1);
  const adjustedEnd = Math.min(Math.max(endRatio, 0), 1);

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
}
