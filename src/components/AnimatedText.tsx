"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, ElementType, RefObject } from "react";

interface AnimatedBlockProps {
  children: ReactNode;
  className?: string;
  as?: ElementType; // Accept any valid JSX element or component
  initialY?: number;
}

export default function AnimatedText({
  children,
  className = "",
  as: Component = "div",
  initialY = 20,
}: AnimatedBlockProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Component ref={ref as RefObject<HTMLElement | null>} className={className}>
      <motion.div
        initial={{ opacity: 0, y: initialY }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
