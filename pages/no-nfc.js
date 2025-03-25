import React from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";

export default function NoNFC() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>Check Balance Without NFC - MRT Buddy</title>
        <meta
          name="description"
          content="Learn how to check your MRT Pass or Rapid Pass balance online without NFC. A step-by-step guide to using the official DMTCL balance checker."
        />
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center px-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
            No NFC? No Problem!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Check your MRT Pass / Rapid Pass balance online using the official
            Rapid Pass website. Here's how to do it step by step.
          </p>
        </section>

        {/* Tutorial Steps */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              How to Check Balance Online
            </h2>
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
                    <img src="/no-nfc-1.png" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Note: Although this is the Rapid Pass website, both MRT
                        Pass and Rapid Pass cards should work when their system
                        is online.
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 1: Visit the Official Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Go to the MRT Pass / Rapid Pass balance checking website
                      at:
                    </p>
                    <a
                      href="https://rapidpass.com.bd/index.php/welcome/afc_topup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-all"
                    >
                      https://rapidpass.com.bd/index.php/welcome/afc_topup
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
                    <img src="/no-nfc-2.png" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 2: Enter Your Card Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Enter your card number in the search field. Both MRT Pass
                      and Rapid Pass cards are supported.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Works with both MRT Pass and Rapid Pass</li>
                      <li>Enter the number exactly as shown on your card</li>
                      <li>Double-check for accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
                    <img src="/no-nfc-3.png" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Step 3: View Your Balance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Click the "Search" button and wait for your balance to
                      appear. Please note:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>The page may take a while to load</li>
                      <li>Only current balance is shown</li>
                      <li>Transaction history is not available</li>
                      <li>Refresh the page for updated balance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Section */}
        <section className="py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Want More Features?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              If you have a phone with NFC, try our app for instant balance
              checks and transaction history!
            </p>
            <a
              href="/check-balance"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Learn More About MRT Buddy App
            </a>
            <a
              href="/check-balance-bn"
              className="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              বাংলায় দেখুন
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
