import React from "react";
import Head from "next/head";
import Link from "next/link";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";

export default function Support() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>Support - MRT Buddy</title>
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">
            Get Support
          </h1>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Quick Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/tutorials"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium dark:text-white">
                      Video Tutorials
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Step-by-step guides
                    </p>
                  </div>
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium dark:text-white">FAQ</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Common questions
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-2 border-[#1877F2] dark:border-[#1877F2]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold dark:text-white flex items-center gap-3">
                  <span>Join Our Community</span>
                  <span className="text-2xl">👥</span>
                </h2>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-center">
                  Recommended
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Get instant help from our active community of MRT Buddy users.
                Share experiences, ask questions, and stay updated!
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Quick responses from community members</li>
                <li>Share tips and tricks with other users</li>
                <li>Get latest app updates and announcements</li>
                <li>Connect with fellow commuters</li>
              </ul>
              <a
                href="http://facebook.com/groups/596021299517064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#1877F2] text-white px-6 py-4 rounded-lg hover:bg-[#1664d8] transition-colors text-lg font-medium gap-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Join Facebook Group
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <span>Alternative Support Channel</span>
                <span>📧</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you prefer not to use social media, you can still get support
                by submitting a ticket through our help desk.
              </p>
              <a
                href="https://mrtbuddy.zohodesk.com/portal/en/newticket"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors underline text-sm"
              >
                Create Support Ticket →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
