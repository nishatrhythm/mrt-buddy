import React from "react";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  const features = [
    {
      title: "Privacy First",
      description: "Your data stays on your device, always under your control",
      icon: "🔒",
    },
    {
      title: "Transaction History",
      description:
        "View your complete transaction history with rolling storage*",
      icon: "📊",
    },
    {
      title: "Pass Compatibility",
      description: "Works with both MRT Pass and Rapid Pass",
      icon: "💳",
    },
    {
      title: "Fare Calculator",
      description:
        "Calculate your fare and see how many round trips you can make",
      icon: "🔢",
    },
  ];

  const footnote =
    "*While the card stores up to 20 transactions, regularly scanning your card allows you to build a comprehensive history of thousands of transactions on your phone";

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-[#121212]/[98%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-8 text-center">
          {footnote}
        </div>
      </div>
    </section>
  );
};
