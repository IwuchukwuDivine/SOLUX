"use client";

import SolanaLogo2 from "@/assets/images/soluxwhite.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full bg-white h-screen justify-center items-center flex">
      <div className="w-[50%] h-[80%] flex justify-center items-center flex-col gap-5">
        <div className="w-full flex justify-center items-center flex-col gap-1">
          <Image className="w-[100px]" alt="" src={SolanaLogo2} />
          <h1 className="text-2xl font-bold">
            Would you like to join our community of web3 designers
          </h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="radio" name="yes" id="yes" />
            <label htmlFor="yes">Yes! Sign me up</label>
          </div>
          <div className="flex flex-row gap-4 w-full rounded-xl bg-[#F9FAFB] py-4 px-4">
            <input type="radio" name="no" id="no" />
            <label htmlFor="no">Not yet, I’m just exploring</label>
          </div>

          <button className="bg-black text-white py-4 rounded-[8px] mt-[30px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
