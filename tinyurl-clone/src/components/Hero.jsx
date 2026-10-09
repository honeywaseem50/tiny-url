 import { useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("shorten");

  const shortenUrl = () => {
    if (!url.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const code =
        alias.trim() ||
        Math.random().toString(36).substring(2, 8);

      setShortUrl(`https://tinyurl.com/${code}`);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="min-h-screen bg-[#002B4A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">

        {/* MAIN HERO */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 pt-16 md:pt-24 lg:pt-[66px]">
 <div className="flex flex-col justify-start lg:pt-0">

  <h1 className="text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.45] font-bold tracking-tight">
    URL Shortener,
    <br />
    Branded Short Links 
    <br />
    &amp; Analytics
  </h1>

  <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] font-medium max-w-[670px]">
    Welcome to the original link shortener — simplifying the Internet
    <br className="hidden xl:block" />
    through the power of the URL since 2002.
  </p>

  <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] font-medium max-w-[720px]">
    You can use branded domains for fully custom links, track link analytics,
    <br className="hidden xl:block" />
    and enjoy other powerful features with our paid plans.
  </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-6">

              <button
                className="
                bg-white text-[#17324d]
                px-5 py-3
                rounded-md
                text-[17px]
                font-semibold
                hover:bg-gray-100
                transition
                "
              >
                View Plans
              </button>

              <button
                className="
                bg-[#1385A5]
                text-white
                px-5 py-3
                rounded-md
                text-[17px]
                font-semibold
                hover:bg-[#107793]
                transition
                "
              >
                Create Free Account
              </button>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full max-w-[585px] lg:ml-auto">

            <div className="bg-[#F5F6F7] rounded-lg overflow-hidden text-[#252525]">

              {/* TABS */}
              <div className="grid grid-cols-2">

                <button
                  onClick={() => setActiveTab("shorten")}
                  className={`
                    flex items-center justify-center gap-3
                    py-6 px-4
                    text-[17px] md:text-[18px]
                    font-bold
                    transition
                    ${
                      activeTab === "shorten"
                        ? "bg-[#F5F6F7] text-[#1f1f1f]"
                        : "bg-[#1683A1] text-white"
                    }
                  `}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
                    <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" />
                  </svg>

                  Shorten a Link
                </button>

                <button
                  onClick={() => setActiveTab("qr")}
                  className={`
                    flex items-center justify-center gap-3
                    py-6 px-4
                    text-[17px] md:text-[18px]
                    font-bold
                    transition
                    ${
                      activeTab === "qr"
                        ? "bg-[#F5F6F7] text-[#1f1f1f]"
                        : "bg-[#1683A1] text-white"
                    }
                  `}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                  >
                    <rect x="3" y="3" width="5" height="5" />
                    <rect x="16" y="3" width="5" height="5" />
                    <rect x="3" y="16" width="5" height="5" />
                    <path d="M16 16h2v2h-2zM20 16v5M16 20h2" />
                  </svg>

                  Generate QR Code
                </button>

              </div>

              {/* FORM CONTENT */}
              <div className="px-6 py-7">

                {activeTab === "shorten" ? (
                  <>
                    {/* LONG URL */}
                    <div>

                      <label className="flex items-center gap-3 text-[17px] md:text-[18px] font-semibold mb-3">
                        <span className="text-[20px]">➤</span>
                        Long URL
                        <span className="text-[#b54854]">*</span>
                      </label>

                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Paste long URL here"
                        className="
                        w-full
                        h-[46px]
                        bg-white
                        border border-[#cfd5da]
                        rounded
                        px-3
                        text-[16px] md:text-[17px]
                        text-gray-700
                        outline-none
                        focus:border-[#1683A1]
                        "
                      />

                    </div>

                    {/* DOMAIN & ALIAS */}
                    <div className="grid grid-cols-[1fr_24px_1fr] gap-3 items-start mt-6">

                      {/* DOMAIN */}
                      <div>

                        <label className="flex items-center gap-3 text-[17px] font-semibold mb-3">
                          <span className="text-[19px]">🌐</span>
                          Domain
                        </label>

                        <div className="relative">

                          <select
                            className="
                            w-full
                            h-[46px]
                            appearance-none
                            bg-white
                            border border-[#cfd5da]
                            rounded
                            px-3
                            pr-10
                            text-[16px]
                            outline-none
                            "
                          >
                            <option>tinyurl.com</option>
                          </select>

                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            ⌄
                          </span>

                        </div>

                      </div>

                      {/* SLASH */}
                      <div className="hidden md:flex items-center justify-center pt-[40px] text-[22px]">
                        /
                      </div>

                      {/* ALIAS */}
                      <div>

                        <label className="flex items-center gap-3 text-[17px] font-semibold mb-3">
                          <span className="text-[19px]">🖋</span>
                          Alias (optional)
                        </label>

                        <input
                          type="text"
                          value={alias}
                          onChange={(e) => setAlias(e.target.value)}
                          placeholder="Add alias here"
                          className="
                          w-full
                          h-[46px]
                          bg-white
                          border border-[#cfd5da]
                          rounded
                          px-3
                          text-[16px]
                          outline-none
                          focus:border-[#1683A1]
                          "
                        />

                        <p className="text-[11px] text-gray-500 mt-1">
                          Must be at least 5 characters
                        </p>

                      </div>

                    </div>

                    {/* SHORTEN BUTTON */}
                    <button
                      onClick={shortenUrl}
                      disabled={loading}
                      className="
                      w-full
                      h-[48px]
                      mt-7
                      bg-[#218C4A]
                      hover:bg-[#1b793f]
                      disabled:opacity-70
                      rounded
                      text-white
                      text-[17px]
                      font-semibold
                      transition
                      "
                    >
                      {loading ? "Shortening..." : "Shorten Link"}
                    </button>

                    {/* RESULT */}
                    {shortUrl && (
                      <div className="mt-4 bg-white border border-gray-300 rounded p-3">

                        <p className="text-sm text-gray-500 mb-1">
                          Your short link:
                        </p>

                        <a
                          href={shortUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#1683A1] font-semibold break-all"
                        >
                          {shortUrl}
                        </a>

                      </div>
                    )}

                    {/* TERMS */}
                    <p className="mt-6 text-[13px] md:text-[14px] italic leading-[1.4] text-[#3d3d3d]">
                      By clicking Shorten Link, you agree with our{" "}
                      <span className="text-[#1683A1]">
                        Terms of Service
                      </span>
                      ,{" "}
                      <span className="text-[#1683A1]">
                        Privacy Policy
                      </span>
                      , and{" "}
                      <span className="text-[#1683A1]">
                        Use of Cookies
                      </span>
                      .
                    </p>

                  </>
                ) : (

                  <div className="min-h-[300px] flex items-center justify-center">
                    <p className="text-gray-500 text-lg">
                      QR Code section
                    </p>
                  </div>

                )}

              </div>
            </div>
          </div>
        </div>

        {/* RECENT LINKS */}
        <div className="mt-6 lg:mt-7 pb-8">

          <h2 className="text-[21px] md:text-[22px] font-bold mb-5">
            Your Recent Links:
          </h2>

          <div
            className="
            bg-[#F5F6F7]
            min-h-[50px]
            rounded-lg
            px-4
            flex items-center
            gap-3
            text-[#222]
            "
          >

            <span
              className="
              w-[17px]
              h-[17px]
              rounded-full
              bg-[#243B4D]
              text-white
              text-[11px]
              font-bold
              flex
              items-center
              justify-center
              "
            >
              !
            </span>

            <span className="font-semibold text-[15px]">
              {shortUrl
                ? shortUrl
                : "No links yet in your history"}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;