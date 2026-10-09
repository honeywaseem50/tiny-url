 import shortenerVideo from "./shortener-video-5-iGTGim.webp";

const HowItWorks = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-[620px]">

        {/* LEFT IMAGE */}
        <div className="bg-[#0E7C98] pl-8 lg:pl-12 py-8">
          <div className="overflow-hidden h-full group">

            <img
              src={shortenerVideo}
              alt="TinyURL Link Shortener"
              className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              ease-in-out
              group-hover:scale-110
              "
            />

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#0E7C98] text-white flex items-center">
          <div className="max-w-[620px] px-10 lg:px-16">

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.3]">
              Link Shortening Done Quick
              and Easy
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-8 text-lg lg:text-xl leading-8 text-white/95">
              Our URL shortener is not only among the first-ever link
              shorteners on the Internet — it's the best out there.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-6 text-lg lg:text-xl leading-8 text-white/95">
              Shorten links for social media, blogs, SMS, emails, ads,
              and almost anything both off- and online.
            </p>

            {/* Paragraph 3 */}
            <p className="mt-6 text-lg lg:text-xl leading-8 text-white/95">
              Wave goodbye to long, clunky links and give your audiences
              the experiences they deserve!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                className="
                bg-white
                text-[#1b2430]
                px-7
                py-3
                rounded-md
                text-lg
                font-semibold
                hover:bg-gray-100
                transition-all
                duration-300
                "
              >
                View Plans
              </button>

              <button
                className="
                bg-[#002B4A]
                text-white
                px-7
                py-3
                rounded-md
                text-lg
                font-semibold
                hover:bg-[#001f36]
                transition-all
                duration-300
                "
              >
                Contact Sales
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;