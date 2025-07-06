"use client";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function StepNum({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isPastHalf, setIsPastHalf] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "center 50%", // when element center reaches 50% of viewport
      "center 50%", // same point since we're toggling on crossing
    ],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsPastHalf(latest >= 0.5);
  });

  return (
    <div
      ref={ref}
      className={`text-4xl font-bold tracking-tight line-clamp-2 pt-4 ${
        isPastHalf ? "text-foreground" : "text-gray-500/50"
      }`}
    >
      {children}
    </div>
  );
}
