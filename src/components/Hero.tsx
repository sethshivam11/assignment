import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import BorderButton from "./BorderButton";
import { ArrowUpRight } from "lucide-react";
import BorderText from "./BorderText";
import TracingBeam from "./ui/tracing-beam";
import StepNum from "./StepNum";
import AnimatedHeading from "./AnimatedHeading";
import Steps from "./Steps";

const manRope = Manrope({
  subsets: ["latin"],
});

function Hero() {
  return (
    <section className="flex flex-col p-24 max-md:px-4 items-center gap-12 relative">
      <Image
        src="/bg-image.avif"
        alt="Background Image"
        width="5600"
        height="1080"
        className="absolute w-full h-full object-cover object-top -z-10 opacity-[0.25] blur-lg"
      />
      <div className="flex flex-col items-center justify-center gap-5 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-1">
          <BorderText>Our Process</BorderText>
          <AnimatedHeading className={`${manRope.className} text-[55px] tracking-tighter font-semibold`}>
            Become a <span className="text-[#a35ca2]">Abcd Pro</span> in sec...
          </AnimatedHeading>
          <div className="text-gray-400 tracking-tight">
            🚀 Sign up. Fund. Trade.
          </div>
        </div>
        <div className={`grid grid-cols-3 gap-0 w-full ${manRope.className}`}>
          <div className="hidden md:flex flex-col w-full text-right h-[160vh] pt-[50vh] justify-between">
            <Steps />
          </div>
          <div className="flex flex-col items-center justify-between gap-10 relative h-full">
            <StepNum>01</StepNum>
            <TracingBeam color="#d5c5fa" start={0.5} />
            <StepNum>02</StepNum>
            <TracingBeam color="#a35ca2" />
            <StepNum>03</StepNum>
            <TracingBeam color="#b49ee8" />
            <StepNum>04</StepNum>
            <hr className="h-[35vh] w-0.5 border-none bg-muted-foreground/20 -z-10" />
          </div>
          <div className="flex flex-col w-full justify-between h-[160vh] mb-[25vh] max-md:col-span-2">
            <Steps all />
          </div>
        </div>
        <BorderButton color="bg-[#6242a5]">
          Open FREE Account <ArrowUpRight size="20" />
        </BorderButton>
      </div>
    </section>
  );
}

export default Hero;
