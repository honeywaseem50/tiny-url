 import { useEffect, useState } from "react";

import ctaImage from "./platform-highlight-video-D3DEDauT.webp";

const CTA = () => {
  const [counter, setCounter] = useState(494);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-0">
      <div className="w-full">

        <div className="grid lg:grid-cols-2 min-h-[595px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#002B4A] text-white flex items-center">

            <div className="w-full max-w-[760px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-16">

              <h2 className="text-4xl sm:text-5xl lg:text-[42px] xl:text-[44px] font-bold leading-[1.12]">
                Transforming the Digital
                <br />
                Landscape Since ‘02
              </h2>

              <p className="mt-8 text-lg lg:text-[19px] leading-7 text-white">
                TinyURL has created billions of short links for marketers,
                <br className="hidden xl:block" />
                influencers, small business owners, and large businesses.
              </p>

              <div className="mt-10 space-y-8">

                {/* BILLIONS */}
                <div className="grid grid-cols-[280px_1fr] items-center">
                  <h3 className="text-3xl lg:text-[34px] font-bold">
                    Billions
                  </h3>

                  <p className="text-lg lg:text-[19px]">
                    of redirects per month
                  </p>
                </div>

                {/* 24 YEARS */}
                <div className="grid grid-cols-[280px_1fr] items-center">
                  <h3 className="text-3xl lg:text-[34px] font-bold">
                    24 years
                  </h3>

                  <p className="text-lg lg:text-[19px]">
                    of shortening URLs
                  </p>
                </div>

                {/* COUNTER */}
                <div className="grid grid-cols-[280px_1fr] items-center">

                  <h3 className="text-3xl lg:text-[34px] font-bold tabular-nums">
                    32,803,025,
                    {counter}
                  </h3>

                  <p className="text-lg lg:text-[19px]">
                    TinyURLs created
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[400px] lg:min-h-[595px] overflow-hidden group">

            <img
              src={ctaImage}
              alt="TinyURL team"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform
                duration-700
                ease-in-out
                group-hover:scale-105
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;