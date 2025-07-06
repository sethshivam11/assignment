"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  "Register your account",
  "Deposit your funds",
  "KYC",
  "Start Trading & Earn Profits",
];

function Steps({ all = false }: { all?: boolean }) {
  return (
    <>
      {steps.map((item, index) => {
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
      className={`${hidden ? "md:invisible" : ""} ${index === 3 ? "max-sm:hidden": ""}`}
    >
      <div className="text-gray-500 text-xl font-sans font-medium tracking-tight">
        Step {index + 1}
      </div>
      <div className="sm:text-2xl text-xl tracking-tight font-bold">{item}</div>
    </motion.div>
  );
}

export default Steps;
