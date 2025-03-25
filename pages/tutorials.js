import React from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { CommunitySection } from "../components/CommunitySection";
import { Footer } from "../components/Footer";

const tutorials = [
  {
    id: 1,
    title: "Checking Balance",
    description: "Balance of your MRT Pass / Rapid Pass",
    videoId: "mC0_R5OmeQk",
  },
  {
    id: 2,
    title: "Fare Calculator",
    description: "Calculating Fares with MRT Buddy",
    videoId: "Jg2Fl1khdZ8",
  },
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>Video Tutorials - MRT Buddy</title>
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          Video Tutorials
        </h1>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800/50"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {tutorial.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {tutorial.description}
              </p>
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                  title={tutorial.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
