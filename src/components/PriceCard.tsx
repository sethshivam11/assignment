import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PlansI } from "@/lib/types";
import { Button as BorderCard } from "./ui/moving-border";
import GradientButton from "./GradientButton";

function PriceCard({
  item,
  className = "",
  border = false,
}: {
  item: PlansI;
  border?: boolean;
  className?: string;
}) {
  const values = Object.entries(item)
    .filter(([key]) => key !== "name")
    .map(([, value]) => value);

  return border ? (
    <Card className={className}>
      <CardData item={item} values={values} />
    </Card>
  ) : (
    <BorderCard
      borderRadius="1.75rem"
      duration={5000}
      className="bg-white dark:bg-black text-black dark:text-white border-black text-center"
    >
      <CardData item={item} values={values} />
    </BorderCard>
  );
}

function CardData({
  item,
  values,
}: {
  item: PlansI;
  values: (string | number)[];
}) {
  return (
    <>
      <CardHeader className="w-full min-w-40">
        <CardTitle className="text-center sm:text-3xl text-xl bg-gradient-to-r from-white to-stone-400 text-transparent bg-clip-text">
          {item.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-3 px-0.5 sm:text-sm text-xs">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 text-foreground text-center tracking-tight font-semibold w-full"
          >
            {index !== values.length - 1 ? (
              <p>{value}</p>
            ) : (
              <p className="xl:w-1/2 lg:w-2/3 mx-auto">{value}</p>
            )}
            {index !== values.length - 1 && (
              <div className="bg-gradient-to-l gap-3 from-[#7364965] via-[#73649680] to-[#7364965] w-full h-0.5" />
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <GradientButton>Start Trading</GradientButton>
      </CardFooter>
    </>
  );
}

export default PriceCard;
