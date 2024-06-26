import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-[#FAFAFA] max-w-3xl self-center mt-16">
      <h1 className="font-normal text-6xl text-center">
        Easy send and Request Crypto.
      </h1>
      <h2 className="font-normal text-xl text-center text-right" style={{ textAlign: 'justify' }}>
        <span className="block">
          Bring blockchain to the people. Solana supports experiences
        </span>
        <span className="block">
          for power users, new consumers, and everyone in between.
        </span>
      </h2>
    </div>
  );
};

export default HeroSection;
