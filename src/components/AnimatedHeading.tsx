"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delayBetween?: number;
}

export default function AnimatedHeading({
  children,
  className = "",
  delayBetween = 0.1,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const processChildren = (node: ReactNode): ReactNode[] => {
    if (typeof node === "string") {
      const words = node.trim().split(/\s+/);
      return words.map((word) => word);
    } else if (Array.isArray(node)) {
      return node.flatMap(processChildren);
    } else {
      return [node];
    }
  };

  const processed = processChildren(children);

  return (
    <h1 ref={ref} className={className}>
      {processed.map((child, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * delayBetween,
          }}
          className="inline-block whitespace-nowrap"
        >
          {child}
        </motion.span>
      ))
      .reduce<ReactNode[]>((acc, el, idx) => {
        acc.push(el);
        if (idx < processed.length - 1) {
          acc.push(<span key={`space-${idx}`}>{" "}</span>);
        }
        return acc;
      }, [])}
    </h1>
  );
}
