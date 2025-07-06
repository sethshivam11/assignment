import React from "react";

function BorderButton({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent,#fff_100%,#7f65b7_0%,#7f65b7_0%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl ${
          color ?? "bg-black"
        } px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {children}
      </span>
    </button>
  );
}

export default BorderButton;
