import React, { useState } from "react";
import Link from "next/link";
import { BetaModal } from "./BetaModal";
import { motion } from "framer-motion";
import { GridPattern } from "./GridPattern";
import AndroidDownloadButton from "./AndroidDownloadButton";
import { Apple, Download } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export const Hero = ({ handleDownloadClick, isAnimating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden dark:bg-[#121212]">
      <GridPattern className="opacity-30" numSquares={150} maxOpacity={0.3} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ letterSpacing: "0em" }}
            animate={{ letterSpacing: "0.1em" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:bg-gradient-to-r dark:from-slate-100 dark:to-slate-200 mb-4 sm:mb-6">
              Your Smart MRT + Rapid Pass Companion
            </h1>
          </motion.div>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed dark:text-white">
            Manage your Dhaka MRT and Rapid Pass cards, check fares, and track your journeys with
            ease using your NFC-enabled Smartphone
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy">
              <img
                src="/play_store_logo.png"
                alt="Download on the Play Store"
                onClick={() => sendGAEvent({ event: "download", value: "android" })}
                style={{ width: "150px", height: "auto" }}
              />
            </a>
            <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
              <img
                src="/app_store.svg"
                alt="Download on the App Store"
                onClick={() => sendGAEvent({ event: "download", value: "ios" })}
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
             <Link href="/devices" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
               Check if your device is compatible →
             </Link>
           </p>
          <div className="mt-6 inline-block">
            <Link
              href="/tutorials"
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
              </svg>
              Watch Video Tutorials
              <span className="absolute -right-1 -top-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 dark:bg-blue-500"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 dark:bg-blue-400"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <BetaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
