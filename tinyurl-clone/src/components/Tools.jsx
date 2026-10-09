 import { useState } from "react";

import img0 from "./card-feature-0.webp";
import img1 from "./card-feature-1.webp";
import img2 from "./card-feature-2.webp";
import img3 from "./card-feature-3.webp";
import img4 from "./card-feature-4.webp";
import img5 from "./card-feature-5.webp";

const Tools = () => {
  const [activeImage, setActiveImage] = useState(img0);
  const [activeFeature, setActiveFeature] = useState("Unlimited Tracked Clicks");

  const leftFeatures = [
    {
      title: "Unlimited Tracked Clicks",
      desc: "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
      image: img0,
    },
    {
      title: "Detailed Link Analytics",
      desc: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
      image: img1,
    },
    {
      title: "Branded Domains",
      desc: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
      image: img2,
    },
  ];

  const rightFeatures = [
    {
      title: "Fully Custom Links",
      desc: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
      image: img3,
    },
    {
      title: "Bulk Short URLs",
      desc: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
      image: img4,
    },
    {
      title: "Link Management",
      desc: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
      image: img5,
    },
  ];

  const handleHover = (item) => {
    setActiveImage(item.image);
    setActiveFeature(item.title);
  };

  const FeatureCard = ({ item }) => {
    const isActive = activeFeature === item.title;

    return (
      <div
        onMouseEnter={() => handleHover(item)}
        className={`cursor-pointer rounded-xl p-6 -mx-6 transition-all duration-300 ${
          isActive
            ? "bg-[#dfecef]"
            : "bg-transparent"
        }`}
      >
        <h3
          className={`text-2xl font-bold transition ${
            isActive
              ? "text-[#0E7C98]"
              : "text-[#17253b]"
          }`}
        >
          {item.title}
        </h3>

        <p className="mt-4 text-gray-700 text-lg leading-8">
          {item.desc}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#17253b]">
            Your One-Stop Solution for Branding and Managing Links
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            We offer a comprehensive suite of premium features to allow users
            to brand and manage links conveniently and confidently.
          </p>

          <button className="mt-8 bg-[#0E7C98] hover:bg-[#0b6c85] text-white px-6 py-3 rounded-md font-semibold transition">
            View Plans
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-3 gap-16 mt-20 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-10">
            {leftFeatures.map((item) => (
              <FeatureCard
                key={item.title}
                item={item}
              />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center items-center">
            <img
              key={activeImage}
              src={activeImage}
              alt="Feature"
              className="w-full max-w-lg object-contain animate-[fadeIn_0.4s_ease-in-out]"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10">
            {rightFeatures.map((item) => (
              <FeatureCard
                key={item.title}
                item={item}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tools;