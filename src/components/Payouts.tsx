import React from "react";
import BorderText from "./BorderText";
import Counter from "./Counter";
import { ArrowUpRight } from "lucide-react";
import BorderButton from "./BorderButton";
import BlurredText from "./BlurredText";

function Payouts() {
  return (
    <div className="flex flex-col px-10 pb-20 items-center gap-12 relative">
      <div className="flex flex-col gap-3 items-center justify-center overflow-hidden">
        <BorderText>Payouts</BorderText>
        <BlurredText
          text="We’ve Paid Out Over"
          className="text-5xl font-bold text-center"
        />
        <BlurredText
          text=" $1M to Traders"
          className="text-5xl font-bold text-center"
          start={85}
        />
        <p className="text-[#ffffffbf]">
          Your Trust is Our Fuel—Power Up with Abcd
        </p>
      </div>
      <Counter />
      <BorderButton className="group">
        Are you Next?{" "}
        <ArrowUpRight
          size="20"
          className="transform transition-transform group-hover:rotate-45"
        />
      </BorderButton>
      <video
        src="/footer-video.mp4"
        className="absolute top-60 hue-rotate-30 -z-10 object-fill bg-[#b8070700] object-center"
        muted
        autoPlay
        loop
      />
    </div>
  );
}

export default Payouts;
