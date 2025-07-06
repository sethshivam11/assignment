"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Manrope } from "next/font/google";

const manRope = Manrope({
  subsets: ["latin"],
});

export default function ScrollingText() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "20%"]);

  return (
    <div className="absolute inset-x-0 top-20">
      <div
        className={`flex w-full py-8 overflow-hidden text-white -z-10 pointer-events-none ${manRope.className}`}
      >
        <div className="container mx-auto flex items-center justify-center">
          <motion.div
            style={{ x }}
            className="whitespace-nowrap xl:text-9xl lg:text-8xl md:text-7xl text-4xl font-bold"
          >
            Trade Anytime,
            <span className="text-[#a35ca2]">Anywhere</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
