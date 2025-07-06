"use client";

import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(151);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="xl:text-[250px] lg:text-9xl text-6xl font-semibold">
      <span className="bg-gradient-to-b from-[#fff] to-[#ffffff50] text-transparent bg-clip-text font-sans">
        $999,{count}
      </span>
      <span className="bg-gradient-to-b from-[#9f8bcf] to-[#9f8bcf10] text-transparent bg-clip-text">
        +
      </span>
    </p>
  );
}

export default Counter;
