import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BetaModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("playstore");
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex sm:items-center sm:justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-none sm:rounded-lg p-4 sm:p-6 w-full h-full sm:h-auto sm:max-w-[32rem] sm:my-4 sm:max-h-[90vh] overflow-y-auto"
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Installation Methods
          </h2>

          <div className="flex mb-6 border-b dark:border-gray-700 gap-1">
            <button
              className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                activeTab === "playstore"
                  ? "bg-blue-50 dark:bg-blue-900/30 border-2 border-b-0 border-blue-500 text-blue-600 dark:text-blue-400 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white dark:after:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              onClick={() => setActiveTab("playstore")}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                </svg>
                Play Store Beta
              </span>
            </button>
            <button
              className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                activeTab === "apk"
                  ? "bg-blue-50 dark:bg-blue-900/30 border-2 border-b-0 border-blue-500 text-blue-600 dark:text-blue-400 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white dark:after:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              onClick={() => setActiveTab("apk")}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-4 4 4 4v-3h6v-2h-6v-2l4 4-4 4v-4z" />
                </svg>
                Download APK
              </span>
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === "playstore" && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Official Play Store Beta
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  Get automatic updates through Play Store:
                </p>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
                      </svg>
                      <span className="dark:text-white">Watch Tutorial</span>
                    </h4>
                    <button
                      onClick={() =>
                        window.open("https://youtu.be/TkSaawjqujA", "_blank")
                      }
                      className="w-full bg-red-100 hover:bg-red-200 dark:bg-red-900/50 dark:hover:bg-red-900/70 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      Watch How to Join Beta
                    </button>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                      Step-by-step video guide for joining the beta program
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                        1
                      </span>
                      <span className="dark:text-white">
                        Uninstall Previous Version
                      </span>
                    </h4>
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                      <p className="text-sm text-red-600 dark:text-red-400">
                        If you previously installed the app directly via APK,
                        you need to:
                      </p>
                      <ol className="list-decimal list-inside mt-2 text-sm text-red-600 dark:text-red-400">
                        <li>Uninstall the existing app from your device</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                        2
                      </span>
                      <span className="dark:text-white">
                        Join Beta Testing Group
                      </span>
                    </h4>
                    <button
                      onClick={() =>
                        window.open(
                          "https://groups.google.com/g/mrtbuddy-beta-android",
                          "_blank"
                        )
                      }
                      className="w-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/50 dark:hover:bg-blue-900/70 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm18 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-12-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
                      </svg>
                      Join Testers Group
                    </button>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                      1. Sign in with your Play Store email
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      2. Click the blue "Join Group" button
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                        3
                      </span>
                      <span className="dark:text-white">
                        Install Beta Version
                      </span>
                    </h4>
                    <button
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/apps/details?id=net.adhikary.mrtbuddy",
                          "_blank"
                        )
                      }
                      className="w-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/50 dark:hover:bg-blue-900/70 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                      Join Beta Program
                    </button>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                      Click to join the beta program and get updates
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "apk" && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Direct APK Download
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-4">
                  Manual installation without auto-updates:
                </p>
                <div className="space-y-4">
                  <div className="text-yellow-800 dark:text-yellow-200">
                    <p className="mb-2">Please note:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>You'll need to manually download new versions</li>
                      <li>
                        Your device must allow installations from unknown
                        sources
                      </li>
                      <li>Some features might require manual configuration</li>
                    </ul>
                  </div>
                  <a
                    href="https://github.com/aniruddha-adhikary/mrt-buddy/releases/latest/download/app-release.apk"
                    className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Download APK
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
