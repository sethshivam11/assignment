"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  "Register your account",
  "Deposit your funds",
  "KYC",
  "Start Trading & Earn Profits",
];

// Top-level Steps component
function Steps({ all = false }: { all?: boolean }) {
  return (
    <>
      {steps.map((item, index) => {
        // skip even-indexed steps if `all` is false
        if (!all && index % 2 === 0) return null;

        return (
          <StepItem
            key={index}
            index={index}
            item={item}
            hidden={all && index % 2 !== 0}
          />
        );
      })}
    </>
  );
}

// 👇 Each step item is its own component, so hooks are valid here
function StepItem({
  index,
  item,
  hidden,
}: {
  index: number;
  item: string;
  hidden: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={hidden ? "md:invisible" : ""}
    >
      <div className="text-gray-500 text-xl font-sans font-medium tracking-tight">
        Step {index + 1}
      </div>
      <div className="text-2xl tracking-tight font-bold">{item}</div>
    </motion.div>
  );
}

export default Steps;
