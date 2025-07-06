"use client";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function StepNum({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isPastHalf, setIsPastHalf] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 50%", "center 50%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsPastHalf(latest >= 0.5);
  });

  return (
    <div
      ref={ref}
      className={`text-4xl font-bold tracking-tight line-clamp-2 pt-4 ${
        isPastHalf ? "text-foreground" : "text-gray-500/50"
      } ${className}`}
    >
      {children}
    </div>
  );
}
