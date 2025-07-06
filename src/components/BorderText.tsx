import React from "react";

function BorderText({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[1px] bg-gradient-to-b from-input/20 to-input/70 rounded-full">
      <div className="bg-black px-5 py-1.5 rounded-full">
        <div className="bg-gradient-to-l from-[#c8bae8] to-[#b195f0] rounded-full text-sm text-transparent bg-clip-text">
          {children}
        </div>
      </div>
    </div>
  );
}

export default BorderText;
