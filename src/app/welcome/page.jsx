"use client";

import SolanaLogo2 from "@/assets/images/soluxwhite.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full bg-white h-screen justify-center items-center flex">
      <div className="w-[50%] h-[80%] flex justify-center items-center flex-col gap-5">
        <Image className="w-[100px]" alt="" src={SolanaLogo2} />
        <h1 className="text-3xl font-bold">Welcome to SolUX</h1>
        <div className="flex flex-col w-full mt-4 gap-8">
          <div
            className="rounded-[8px] bg-transparent
            border border-black py-5 px-3"
          >
            <p className="text-gray-500">Moriah chisom</p>
          </div>
          <div
            className="rounded-[8px] bg-transparent flex flex-row
           justify-between border border-black py-5 px-3"
          >
            <p className="text-gray-500">What is your role in web3</p>
          </div>
          <button className="bg-black text-white py-5 mt-[30px] rounded-[8px]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
