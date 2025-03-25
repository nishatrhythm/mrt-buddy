import React from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";
import { motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import nfcAnimation from "../public/nfc-hand.json";

// Use dynamic import with ssr: false to avoid useLayoutEffect warnings
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function CheckBalance() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>How to Check MRT Pass & Rapid Pass Balance - MRT Buddy</title>
        <meta
          name="description"
          content="Check your MRT Pass or Rapid Pass balance instantly using your smartphone. No more queues - view your balance anytime, anywhere with MRT Buddy's NFC reader app."
        />
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center px-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
            Check MRT Pass Balance Instantly - No More Queues!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Skip the long queues at MRT stations! Check your MRT Pass or Rapid
            Pass balance instantly from anywhere, anytime using just your
            smartphone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy">
              <img
                src="/play_store_logo.png"
                alt="Download on the Play Store"
                onClick={() =>
                  sendGAEvent({ event: "download", value: "android" })
                }
                style={{ width: "150px", height: "auto" }}
              />
            </a>
            <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
              <img
                src="/app_store.svg"
                alt="Download on the App Store"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>
        </section>

        {/* Tutorial Steps */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              How It Works
            </h2>
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <img
                    src="/play-store.jpg"
                    alt="Download MRT Buddy"
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 1: Download MRT Buddy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Install MRT Buddy on your NFC-enabled smartphone and never
                      wait in line again to check your balance. Available for
                      both Android and iOS devices.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Check balance from home, office, or anywhere</li>
                      <li>Save time - no need to visit stations</li>
                      <li>Works completely offline</li>
                      <li>Supports both MRT Pass and Rapid Pass</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <Lottie
                    animationData={nfcAnimation}
                    className="w-full max-w-md mx-auto"
                    loop={true}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 2: Tap Your Card
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Enable NFC on your phone and tap your MRT Pass or Rapid
                      Pass on the back of your device.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Works with all valid MRT Pass cards</li>
                      <li>Compatible with all Rapid Pass cards</li>
                      <li>Instant balance reading</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <img
                    src="/check-balance.jpg"
                    alt="View balance and history"
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 3: View Details
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Instantly see your card balance and transaction history.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Current balance</li>
                      <li>Recent transactions</li>
                      <li>Journey details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Ready to Skip the Queue?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Download now and check your balance instantly - anywhere, anytime!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy">
                <img
                  src="/play_store_logo.png"
                  alt="Download on the Play Store"
                  onClick={() =>
                    sendGAEvent({ event: "download", value: "android" })
                  }
                  style={{ width: "150px", height: "auto" }}
                />
              </a>
              <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
                <img
                  src="/app_store.svg"
                  alt="Download on the App Store"
                  style={{ width: "150px", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
