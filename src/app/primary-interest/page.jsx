"use client";

import SolanaLogo2 from "@/assets/images/soluxwhite.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full bg-white h-screen justify-center items-center flex">
      <div className="w-[50%] h-[80%] flex justify-center items-center flex-col gap-5">
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <Image className="w-[100px]" alt="" src={SolanaLogo2} />
          <h1 className="text-2xl font-bold">
            What is your Primary interest in Web3 design?{" "}
          </h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="defi" id="defi" />
            <label htmlFor="defi">DeFi Applications</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="nft" id="nft" />
            <label htmlFor="nft">NFT Marketplace</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="blockchain" id="blockchain" />
            <label htmlFor="blockchain">Blockchain Games</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="others" id="others" />
            <label htmlFor="others">Others</label>
          </div>
          <button className="bg-black text-white py-5 rounded-[8px] mt-[30px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
