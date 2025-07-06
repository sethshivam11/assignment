import React from "react";

function GradientButton({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-bl from-[#9f8bcf] to-[#6242a5] font-semibold tracking-tight text-white py-2.5 px-5 rounded-xl sm:text-sm text-xs">
      {children}
    </div>
  );
}

export default GradientButton;
