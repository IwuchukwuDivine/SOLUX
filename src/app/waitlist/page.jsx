import React from "react";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import logo from "@/assets/waitlist/logo.png";
import flame from "@/assets/waitlist/flame.png";
import frame from "@/assets/waitlist/Frame.png";

const WaitlistPage = () => {
  return (
    <main className="h-screen flex justify-between items-center">
      <div
        className="w-1/2 h-[96%] flex flex-col items-center justify-between bg-gradient-to-b
        from-black to-green-900 m-5 rounded-lg"
      >
        {/* Logo and Text */}
        <div className="text-center p-6 pt-60 rounded-lg">
          <Image src={logo} alt="SolUX Logo" className="w-60 mx-auto mb-4" />
          <h1 className="text-white text-2xl font-medium">
            SolUX aims to empower developers and designers
          </h1>
        </div>

        <div className="w-64 h-64 relative bottom-1">
          <Image src={frame} alt="frame" fill className="object-contain" />
        </div>
        {/* <Image src={frame} alt="frame" className="w-60 mx-auto mb-4" /> */}
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center w-1/2">
        <div className="max-w-xl w-full space-y-8 text-center">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-20 h-20 relative">
              <Image
                src={logo}
                alt="SolUX Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Small label */}
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
            <div className="w-4 h-4 relative">
              <Image src={flame} alt="flame" fill className="object-contain" />
            </div>
            <span>Amazing resources coming your way</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold">
            UI/UX Design library and resources for crypto based applications
          </h1>

          {/* Description */}
          <p className="text-gray-600">
            By joining our wait-list, you'll gain priority access to new
            features, founding member benefits, and special offers before anyone
            else.
          </p>

          {/* Email form */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-[#444444] border border-gray-200"
            />
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors">
              Join waitlist →
            </button>
          </div>

          {/* Launch info */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
            <span>Launching Q1 2025</span>
            <div className="flex gap-2">
              <Icons.discord className="w-5 h-5" />
              <Icons.youtube className="w-5 h-5" />
              <Icons.linkedin className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WaitlistPage;
