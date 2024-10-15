"use client";

import SolanaLogo2 from "@/assets/images/soluxwhite.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full bg-white h-screen justify-center items-center flex">
      <div className="w-[50%] h-[80%] flex justify-center items-center flex-col gap-5">
        <div className="w-full flex justify-center items-center flex-col gap-1">
          <Image className="w-[100px]" alt="" src={SolanaLogo2} />
          <h1 className="text-3xl font-bold text-center">
            How did you discover our web3 showcase platform
          </h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="web3i" id="web3" />
            <label htmlFor="web3">Web3 community forums</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="Socials" id="Socials" />
            <label htmlFor="Socials">Social media</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="checkbox" name="Search engine" id="Search engine" />
            <label htmlFor="Search engine">Search engine</label>
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
