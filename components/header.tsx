import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-[#FAFAFA]">
      <div className="h-full w-48 pl-10 ml-20">
        <Image
          src="/BlockChain.png"
          alt="Block Chain Logo"
          width={300} 
          height={39}  
          className="object-contain"
        />
      </div>
      <div className="flex gap-2 whitespace-nowrap">
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-7 px-5"
        >
          Exchange
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-7 px-5"
        >
          Last Transactions
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-7 px-5"
        >
          Invite Friend
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-7 px-5"
        >
          Notifications
        </a>
      </div>
      <div className="flex gap-2 mr-16 pr-16 h-10">
        <button
          //href="/login"
          className="border border-[#9945FF] rounded-tl-lg rounded-br-lg font-medium p-2"
        >
          LOG IN
        </button>
        <button
          //href="/signup"
          className="bg-[#9945FF] rounded-tl-lg rounded-br-lg font-medium p-2"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Header;
