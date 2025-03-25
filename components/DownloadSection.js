import React, { useState } from "react";
import AndroidDownloadButton from "./AndroidDownloadButton";
import { sendGAEvent } from "@next/third-parties/google";
import { BetaModal } from "./BetaModal";

export const DownloadSection = ({ handleDownloadClick, isAnimating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="download" className="py-16 sm:py-24 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-row items-center justify-center gap-4">
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
        <p className="text-sm text-gray-500 mt-4 dark:text-gray-50">
          This is an independent project and is not officially endorsed by or
          affiliated with Dhaka Mass Transit Company Limited (DMTCL).
        </p>
      </div>
      <BetaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
