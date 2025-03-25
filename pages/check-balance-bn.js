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

export default function CheckBalanceBn() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>
          এমআরটি পাস ও র‍্যাপিড পাস ব্যালেন্স চেক করুন - এমআরটি বাডি
        </title>
        <meta
          name="description"
          content="আপনার স্মার্টফোন ব্যবহার করে এমআরটি পাস বা র‍্যাপিড পাস ব্যালেন্স তাৎক্ষণিকভাবে চেক করুন। আর না লাইনে দাঁড়িয়ে - যেকোনো সময়, যেকোনো জায়গা থেকে এমআরটি বাডি এনএফসি রিডার অ্যাপ দিয়ে আপনার ব্যালেন্স দেখুন।"
        />
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center px-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white font-bengali">
            ঘরে বসে এমআরটি/র‍্যাপিড পাস ব্যালেন্স চেক করুন!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-bengali">
            মেট্রো স্টেশনে লম্বা লাইন এড়িয়ে চলুন! আপনার স্মার্টফোন দিয়ে
            যেকোনো জায়গা থেকে, যেকোনো সময় এমআরটি পাস বা র‍্যাপিড পাস ব্যালেন্স
            তাৎক্ষণিকভাবে চেক করুন।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy">
              <img
                src="/play_store_logo.png"
                alt="প্লে স্টোর থেকে ডাউনলোড করুন"
                onClick={() =>
                  sendGAEvent({ event: "download", value: "android" })
                }
                style={{ width: "150px", height: "auto" }}
              />
            </a>
            <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
              <img
                src="/app_store.svg"
                alt="অ্যাপ স্টোর থেকে ডাউনলোড করুন"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>
        </section>

        {/* Tutorial Steps */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              কিভাবে ব্যবহার করবেন
            </h2>
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <img
                    src="/play-store.jpg"
                    alt="এমআরটি বাডি ডাউনলোড করুন"
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      ধাপ ১: এমআরটি বাডি ডাউনলোড করুন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      আপনার এনএফসি-সক্ষম স্মার্টফোনে এমআরটি বাডি ইনস্টল করুন এবং
                      ব্যালেন্স চেক করার জন্য আর কখনও লাইনে দাঁড়াতে হবে না।
                      অ্যান্ড্রয়েড এবং আইওএস উভয় ডিভাইসের জন্য পাওয়া যাবে।
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>
                        বাসা, অফিস, বা যেকোনো জায়গা থেকে ব্যালেন্স চেক করুন
                      </li>
                      <li>সময় বাঁচান - স্টেশনে যাওয়ার প্রয়োজন নেই</li>
                      <li>সম্পূর্ণ অফলাইনে কাজ করে</li>
                      <li>এমআরটি পাস এবং র‍্যাপিড পাস উভয়ই সমর্থন করে</li>
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
                      ধাপ ২: আপনার কার্ড ট্যাপ করুন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      আপনার ফোনে এনএফসি চালু করুন এবং আপনার এমআরটি পাস বা
                      র‍্যাপিড পাস ডিভাইসের পিছনে ধরুন।
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>সকল বৈধ এমআরটি পাস কার্ডের সাথে কাজ করে</li>
                      <li>সকল র‍্যাপিড পাস কার্ডের সাথে কাজ করে</li>
                      <li>তাৎক্ষণিক ব্যালেন্স রিডিং</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2">
                  <img
                    src="/check-balance.jpg"
                    alt="ব্যালেন্স এবং হিস্টরি দেখুন"
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      ধাপ ৩: বিস্তারিত দেখুন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      তাৎক্ষণিকভাবে আপনার কার্ড ব্যালেন্স এবং লেনদেনের ইতিহাস
                      দেখুন।
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      <li>বর্তমান ব্যালেন্স</li>
                      <li>সাম্প্রতিক লেনদেন</li>
                      <li>যাত্রার বিবরণ</li>
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
              লাইন এড়াতে প্রস্তুত?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              এখনই ডাউনলোড করুন এবং যেকোনো জায়গা থেকে, যেকোনো সময় আপনার
              ব্যালেন্স চেক করুন!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy">
                <img
                  src="/play_store_logo.png"
                  alt="প্লে স্টোর থেকে ডাউনলোড করুন"
                  onClick={() =>
                    sendGAEvent({ event: "download", value: "android" })
                  }
                  style={{ width: "150px", height: "auto" }}
                />
              </a>
              <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
                <img
                  src="/app_store.svg"
                  alt="অ্যাপ স্টোর থেকে ডাউনলোড করুন"
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
