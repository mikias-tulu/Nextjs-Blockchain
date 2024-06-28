import Image from "next/image";
import React from "react";

const SwapToken = () => {
  return (
    <div className="flex flex-col border border-[#464646] rounded-lg text-[#FAFAFA] bg-black/80 p-5 gap-7 mb-40">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">SWAP TOKENS</h2>
        <button>
          <Image
            src="/gear.svg"
            alt="Settings icon"
            width={32}
            height={32}
            className="w-auto h-auto"
          />
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full relative gap-1">
        <div className="rounded-l flex flex-col md:flex-row justify-between py-5 px-4 md:px-12 grow bg-[#1E1E1E]">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-3xl md:text-5xl">0.00</h2>
            <span className="font-medium text-sm text-[#666666]">0.00</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 bg-black px-3 py-2">
              <Image
                src="/ph_currency-btc-bold.svg"
                alt="Bitcoin logo"
                width={32}
                height={32}
              />
              <span className="text-[#868686] font-medium text-lg md:text-xl">
                BTC {">"}
              </span>
            </div>
            <span className="font-normal text-sm">
              Balance:{" "}
              <span className="font-medium text-sm text-[#3980FF]">24,240</span>
            </span>
          </div>
        </div>
        <Image
          src="/iconoir_coins-swap.svg"
          alt="alt"
          width={50}
          height={50}
          className="bg-black mx-auto rounded-full p-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="rounded-r flex flex-col md:flex-row justify-between py-5 px-4 md:px-12 grow bg-[#1E1E1E]">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-3xl md:text-5xl">0.00</h2>
            <span className="font-medium text-sm text-[#666666]">0.00</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 bg-black px-3 py-2">
              <Image
                src="/mingcute_bnb-line.svg"
                alt="BNB logo"
                width={32}
                height={32}
              />
              <span className="text-[#868686] font-medium text-lg md:text-xl">
                BNB {">"}
              </span>
            </div>
            <span className="font-normal text-sm">
              Balance:{" "}
              <span className="font-medium text-sm text-[#3980FF]">63,790</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#9945FF] py-4 px-8 rounded-tl-lg rounded-br-lg text-base font-medium">
          SWAP TOKENS
        </button>
      </div>
      <div className="flex justify-between">
        <div>
          <h4 className="font-normal text-sm">1 BTC = 32.4039 ETH</h4>
          <span className="font-normal text-sm text-[#3980FF]">Free exchange</span>
        </div>
        <span className="font-normal text-sm text-[#666666]">Updates in 4s</span>
      </div>
    </div>
  );
};

export default SwapToken;
