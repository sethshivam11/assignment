import React from "react";
import BorderText from "./BorderText";
import { Manrope } from "next/font/google";
import PriceCard from "./PriceCard";
import { PlansI } from "@/lib/types";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedText from "./AnimatedText";

const manRope = Manrope({
  subsets: ["latin"],
});

function Plans() {
  const plans: PlansI[] = [
    {
      name: "Abcd Vintage",
      for: "Perfect for balanced, all level traders looking for consistency and solid growth.",
      capital: 10,
      advantage: 0.2,
      fees: "no",
      leverageCapacity: "1:Unlimited",
      lotSize: "0.01",
      limit: 200,
      openPositionCapacity: "Unlimited",
      threshold: 0,
      activation: 30,
      policy: 0,
      risk: "Moderate",
      options: "Forex, Crypto, Stocks, Commodities, Indices",
    },
    {
      name: "Abcd Cent",
      for: "Designed for beginners ready to step into the trading world with minimal risk.",
      capital: 10,
      advantage: 0.3,
      fees: "zero",
      leverageCapacity: "1:Unlimited",
      lotSize: "Same",
      limit: 200,
      openPositionCapacity: "Unlimited",
      threshold: 0,
      activation: 30,
      policy: 0,
      risk: "Low",
      options: "Forex, Crypto, Stocks, Commodities, Indices",
    },
    {
      name: "Abcd Pro",
      for: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      capital: 500,
      advantage: 0.1,
      fees: "no",
      leverageCapacity: "1:Unlimited",
      lotSize: "Same",
      limit: 200,
      openPositionCapacity: "Unlimited",
      threshold: 0,
      activation: 30,
      policy: 0,
      risk: "High",
      options: "Forex, Crypto, Stocks, Commodities, Indices",
    },
  ];
  const entries = [
    "Who It’s For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ];

  return (
    <section className="flex flex-col sm:px-10 px-0.5 items-center gap-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center gap-4">
        <BorderText>Our Process</BorderText>
        <AnimatedHeading
          className={`${manRope.className} xl:text-6xl text-4xl tracking-tighter font-semibold max-sm:leading-10 text-center max-sm:px-4`}
        >
          Compare your <span className="text-[#a35ca2]">Abcd</span> plan
        </AnimatedHeading>
        <AnimatedText className="text-gray-400">
          Flexible Deposits for Every Trader
        </AnimatedText>
      </div>
      <div className="p-1 pb-40 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-1">
        <div className="flex flex-col gap-3 items-center pt-28 pl-2">
          {entries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 text-muted-foreground tracking-tight font-semibold text-sm w-full"
            >
              <p>{item}</p>
              {index !== entries.length - 1 && (
                <div className="bg-gradient-to-l from-[#7364965] via-[#73649680] to-[#7364965] w-1/2 h-0.5" />
              )}
            </div>
          ))}
        </div>
        {plans.map((item, index) => (
          <PriceCard
            item={item}
            className={
              index % 2 === 0
                ? "bg-gradient-to-b from-[#38113860] to-black"
                : "bg-black"
            }
            border={index % 2 === 0}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;
