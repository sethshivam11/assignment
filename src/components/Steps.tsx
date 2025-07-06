"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Steps({ all }: { all?: boolean }) {
  const steps = [
    "Register your account",
    "Deposit your funds",
    "KYC",
    "Start Trading & Earn Profits",
  ];

  return steps.map((item, index) => {
    if (!all && index % 2 === 0) return;
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -10% 0px",
    });

    return (
      <motion.div
        key={index}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={all && index % 2 !== 0 ? "md:invisible" : ""}
      >
        <div className="text-gray-500 text-xl font-sans font-medium tracking-tight">
          Step {index + 1}
        </div>
        <div className="text-2xl tracking-tight font-bold">{item}</div>
      </motion.div>
    );
  });
}

export default Steps;
