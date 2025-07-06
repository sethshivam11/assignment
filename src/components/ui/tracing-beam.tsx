"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TracingBeam({
  color = "#ffffff",
  start = 0.7,
  end = 0.3,
}: {
  color?: string;
  start?: number; // where filling starts (fraction of viewport)
  end?: number; // where filling ends (fraction of viewport)
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`center ${start * 100}%`, `center ${end * 100}%`],
  });

  // fillProgress: 0 → 1 as you scroll past the element
  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: false,
  });

  const clampedFill = useTransform(fillProgress, (val) => {
    if (val <= 0) return 0; // not yet filled
    if (val >= 1) return 1; // fully filled
    return val; // in progress
  });

  return (
    <div
      ref={ref}
      className="relative h-[35vh] w-0.5 border-none bg-muted-foreground/20 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: color,
          scaleY: clampedFill,
          transformOrigin: "top",
        }}
      />
    </div>
  );
}
