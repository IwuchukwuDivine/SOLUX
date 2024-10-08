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
            className="rounded-xl bg-transparent
            border border-black py-5 px-3"
          >
            <p>Moriah chisom</p>
          </div>
          <div
            className="rounded-xl bg-transparent flex flex-row
           justify-between border border-black py-5 px-3"
          >
            <p>What is your role in web3</p>
          </div>
          <button className="bg-black text-white py-8 rounded-[32px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
