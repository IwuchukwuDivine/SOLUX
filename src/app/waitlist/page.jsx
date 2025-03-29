"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import logo from "@/assets/waitlist/logo.png";
import flame from "@/assets/waitlist/flame.png";
import frame from "@/assets/waitlist/Frame.png";
import { addToWaitlist } from "@/api/waitlistApi";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newEntry = await addToWaitlist(email);
      setSuccess("Successfully addeded to waitlist! We'll keep you updated.");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 409) {
        setError("This email is already registered for the waitlist.");
      } else {
        setError(error.message || "Failed to join waitlist. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen flex flex-col lg:flex-row justify-between items-center">
      {/* Green banner - hidden on mobile and tablet */}
      <div
        className="hidden lg:flex w-full lg:w-1/2 h-[96%] flex-col items-center justify-between bg-gradient-to-b
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
      </div>

      {/* Right section - full width on mobile and tablet */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full lg:w-1/2 px-8 lg:px-0">
        <div className="max-w-2xl w-full space-y-8 text-center">
          {/* Logo - adjusted size */}
          <div className="flex justify-center">
            <div className="w-24 h-24 relative">
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

          {/* Heading - adjusted size */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            UI/UX Design library and resources for crypto based applications
          </h1>

          {/* Description */}
          <p className="text-gray-600">
            By joining our wait-list, you&apos;ll gain priority access to new
            features, founding member benefits, and special offers before anyone
            else.
          </p>

          {/* Form section - adjusted padding and size */}
          <div className="space-y-4 w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-6 py-4 rounded-lg bg-[#444444] border border-gray-200 text-lg"
              />
              <button
                className="w-full mt-4 bg-gray-900 text-white py-4 rounded-lg font-semibold transition-colors text-lg"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Join waitlist →"}
              </button>
            </form>
          </div>

          {/* Launch info */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
            <span>Launching Q2 2025</span>
            <div className="flex gap-2">
              <a
                href="https://x.com/SolUX_er"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.twitter className="w-5 h-5" />
              </a>
              {/* <Icons.linkedin className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WaitlistPage;
