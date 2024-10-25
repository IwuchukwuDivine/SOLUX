"use client";
import Image from "next/image";

import SolanaLogo from "@/assets/images/soluxcom-high-resolution-logo-white-transparent.png";
import bottomsSection from "../../assets/images/Frame 4.png";
import orange from "@/assets/images/Group 1.png";
import GoogleIcon from "../../assets/images/social_icon.png";
import { handleWalletConnect } from "@/components/walletProvider/wallectAction";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Login() {
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
      <SignUpform />
    </div>
  );
}

const SignUpform = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      redirect("/");
    }
  }, [publicKey]);

  return (
    <div className="w-[45%] items-start flex h-full justify-center flex-col">
      <div className="w-[80%] flex flex-col h-[90%] gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Create Your Account</h1>
          <p className="text-xs">
            Explore the largest Solana mobile and web design library and
            patterns. Used and trusted by top designers, design engineer etc
          </p>
        </div>

        <button
          onClick={handleWalletConnect}
          className="flex flex-row gap-3 py-2 font-bold justify-center items-center w-full rounded-[32px] bg-transparent border border-black"
        >
          <Image src={orange} alt="orange" className="w-8" />{" "}
          {publicKey ? publicKey.toBase58() : <>Connect Your Solana Wallet </>}
        </button>
        <WalletMultiButton style={{ display: 'none' }} />
        <button className="flex flex-row gap-3 py-2 text-gray-700 justify-center items-center w-full rounded-[32px] bg-transparent border border-black">
          <Image src={GoogleIcon} alt="orange" className="w-5" /> Sign in with
          Google
        </button>

        <div className="w-full text-xs flex flex-row items-center gap-2">
          <p className="w-[239px] h-[1px] bg-gray-900"></p>
          <p>OR</p>
          <p className="w-[239px] h-[1px] bg-gray-900"></p>
        </div>

        <Form />
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="w-full flex flex-col gap-3 text-xs">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          className="border border-black rounded-[8px] py-3 px-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="name">Work email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border border-black rounded-[8px] py-3 px-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          className="border border-black rounded-[8px] py-3 px-2 outline-none"
        />
      </div>
      <button className="py-4 text-white justify-center items-center w-full rounded-[8px] bg-black">
        Sign up
      </button>
      <div className="flex flex-row justify-center gap-2 text-xs">
        <input type="checkbox" name="privacy" id="" />
        <label htmlFor="name">
          I agree to solux <span className="underline">TERMS</span> and{" "}
          <span className="underline"> PRIVACY POLICY</span>
        </label>
      </div>
    </div>
  );
};
