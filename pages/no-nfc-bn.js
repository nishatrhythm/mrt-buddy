import React from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";

export default function NoNFCBn() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>এনএফসি ছাড়া ব্যালেন্স চেক করুন - এমআরটি বাডি</title>
        <meta
          name="description"
          content="এনএফসি ছাড়া আপনার এমআরটি পাস বা র‍্যাপিড পাস ব্যালেন্স অনলাইনে চেক করুন। ডিএমটিসিএল-এর অফিসিয়াল ব্যালেন্স চেকার ব্যবহারের ধাপে ধাপে নির্দেশনা।"
        />
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center px-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white font-bengali">
            এনএফসি নেই? চিন্তা নেই!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-bengali">
            ডিএমটিসিএল-এর অফিসিয়াল ওয়েবসাইট ব্যবহার করে আপনার এমআরটি পাস বা
            র‍্যাপিড পাস ব্যালেন্স অনলাইনে চেক করুন। এখানে ধাপে ধাপে দেখানো হলো
            কিভাবে করবেন।
          </p>
        </section>

        {/* Tutorial Steps */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white font-bengali">
              কিভাবে অনলাইনে ব্যালেন্স চেক করবেন
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
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-bengali">
                        বিঃদ্রঃ এটি র‍্যাপিড পাস ওয়েবসাইট হলেও, তাদের সিস্টেম
                        অনলাইন থাকলে এমআরটি পাস এবং র‍্যাপিড পাস উভয় কার্ডই কাজ
                        করবে।
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white font-bengali">
                      ধাপ ১: অফিসিয়াল ওয়েবসাইটে যান
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-bengali">
                      র‍্যাপিড পাস ব্যালেন্স চেকিং ওয়েবসাইটে যান:
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
                    <h3 className="text-2xl font-bold mb-4 dark:text-white font-bengali">
                      ধাপ ২: আপনার কার্ড নম্বর দিন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-bengali">
                      সার্চ ফিল্ডে আপনার কার্ড নম্বর লিখুন। এমআরটি পাস এবং
                      র‍্যাপিড পাস উভয় কার্ডই সাপোর্ট করে।
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 font-bengali">
                      <li>এমআরটি পাস এবং র‍্যাপিড পাস উভয়ই চলবে</li>
                      <li>কার্ডে যেভাবে লেখা আছে হুবহু সেভাবে লিখুন</li>
                      <li>নম্বর সঠিক কিনা দুইবার চেক করুন</li>
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
                    <h3 className="text-2xl font-bold mb-4 dark:text-white font-bengali">
                      ধাপ ৩: ব্যালেন্স দেখুন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-bengali">
                      "Search" বাটনে ক্লিক করুন এবং আপনার ব্যালেন্স দেখার জন্য
                      অপেক্ষা করুন। দয়া করে মনে রাখবেন:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 font-bengali">
                      <li>পেজ লোড হতে কিছুটা সময় লাগতে পারে</li>
                      <li>শুধুমাত্র বর্তমান ব্যালেন্স দেখা যাবে</li>
                      <li>লেনদেনের তালিকা দেখা যাবে না</li>
                      <li>আপডেট ব্যালেন্সের জন্য পেজ রিফ্রেশ করুন</li>
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
            <h2 className="text-3xl font-bold mb-8 dark:text-white font-bengali">
              আরও বেশি সুবিধা চান?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-bengali">
              যদি আপনার ফোনে এনএফসি থাকে, তাহলে তাৎক্ষণিক ব্যালেন্স চেক এবং
              লেনদেনের ইতিহাস দেখার জন্য আমাদের অ্যাপ ব্যবহার করুন!
            </p>
            <a
              href="/check-balance-bn"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bengali"
            >
              এমআরটি বাডি অ্যাপ সম্পর্কে জানুন
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
