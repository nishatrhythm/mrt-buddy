import React from "react";

export const CommunitySection = () => (
  <section className="w-full py-4 bg-blue-600 text-white text-center">
    <div className="container mx-auto px-4 flex items-center justify-center gap-4 flex-wrap">
      <span className="font-bold text-base">🚀 Shape the Future!</span>
      <p className="text-base">
        Help us make MRT Buddy better by joining our community
      </p>
      <a
        href="http://facebook.com/groups/596021299517064"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 px-6 py-2 rounded-full text-base font-medium hover:bg-blue-50 transition-colors"
      >
        Join Now →
      </a>
    </div>
  </section>
);
