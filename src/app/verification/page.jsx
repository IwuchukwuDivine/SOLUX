"use client";
import Image from "next/image";

import SolanaLogo from "@/assets/images/soluxcom-high-resolution-logo-white-transparent.png";
import bottomsSection from "../../assets/images/Frame 4.png";
import orange from "@/assets/images/Group 1.png";
import SolanaLogo2 from "@/assets/images/soluxwhite.png";
import GoogleIcon from "../../assets/images/social_icon.png";

export default function Verification() {
  return (
    <div className="w-[100%] bg-white h-screen p-2 flex flex-row justify-between items-center">
      <div className="flex relative flex-col items-center gap-4 bg-black h-full w-[45%] rounded-xl overflow-hidden">
        <Image className="w-[50%] mt-[140px]" alt="" src={SolanaLogo} />

        <h1 className="text-neutral-200 text-xl text-center">
          THE HOME FOR ALL SOLANA PRODUCTS, <br /> MADE FOR DESIGNERS, DESIGN{" "}
          <br /> ENGINEERS AND BUILDORS
        </h1>
        <div className="w-full absolute bottom-0">
          <Image src={bottomsSection} alt="" className="w-full" />
        </div>
      </div>

      <Veri />
    </div>
  );
}

const Veri = () => {
  return (
    <div className="w-[45%] flex items-start h-full">
      <div className="w-[80%] gap-4 flex h-full justify-center flex-col">
        <div className="flex justify-center items-center w-full">
          <Image src={SolanaLogo2} alt="" className="w-[100px]" />
        </div>
        <div className="flex flex-col mb-2 gap-2 justify-center items-center">
          <h1 className="text-xl font-bold">Verification Code</h1>
          <p className="text-xs text-[#8888]">
            You need to enter 4-digit code we send to your Phone number.
          </p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <input
            type="text"
            className="w-[100px] h-[80px] outline-none p-8 rounded-[8px] bg-transparent border border-black"
          />
          <input
            type="text"
            className="w-[100px] h-[80px] outline-none p-8 rounded-[8px] bg-transparent border border-black"
          />
          <input
            type="text"
            className="w-[100px] h-[80px] outline-none p-8 rounded-[8px]  bg-transparent border border-black"
          />
          <input
            type="text"
            className="w-[100px] h-[80px] outline-none p-8 rounded-[8px] bg-transparent border border-black"
          />
        </div>
        <div className="w-full text-xs flex flex-row justify-between items-center gap-2">
          <p className="w-[45%] h-[1px] bg-gray-900"></p>
          <p>OR</p>
          <p className="w-[45%] h-[1px] bg-gray-900"></p>
        </div>
        <button className="flex flex-row gap-3 py-3 font-bold justify-center items-center w-full rounded-[8px] bg-transparent border border-black">
          <Image src={orange} alt="orange" className="w-8" /> Connect Your
          Solana Wallet
        </button>
        <button className="flex flex-row gap-3 py-3 text-gray-700 justify-center items-center w-full rounded-[8px] bg-transparent border border-black">
          <Image src={GoogleIcon} alt="orange" className="w-5" /> Sign in with
          Google
        </button>
        <button className="py-4 text-white justify-center items-center w-full rounded-[8px] bg-black">
          Sign Up
        </button>
        <div className="flex flex-row justify-center gap-2 text-xs">
          <input type="checkbox" name="privacy" id="" />
          <label htmlFor="name">
            I agree to solux <span className="underline">TERMS</span> and{" "}
            <span className="underline"> PRIVACY POLICY</span>
          </label>
        </div>
      </div>
    </div>
  );
};
