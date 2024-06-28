import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-[#FAFAFA] p-4 md:p-0">
      <div className="h-full w-48 pl-4 md:pl-10 md:ml-20 mb-4 md:mb-0">
        <Image
          src="/BlockChain.png"
          alt="Block Chain Logo"
          width={300} 
          height={39}  
          className="object-contain"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 whitespace-nowrap mb-4 md:mb-0">
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-2 px-4 md:py-7 md:px-5"
        >
          Exchange
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-2 px-4 md:py-7 md:px-5"
        >
          Last Transactions
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-2 px-4 md:py-7 md:px-5"
        >
          Invite Friend
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm font-medium py-2 px-4 md:py-7 md:px-5"
        >
          Notifications
        </a>
      </div>
      <div className="flex gap-2 mb-4 md:mb-0 md:mr-16 md:pr-16 h-10">
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
