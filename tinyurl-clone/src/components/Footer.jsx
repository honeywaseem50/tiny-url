 const Footer = () => {
  return (
    <footer className="text-white">

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#002B4A] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready for Shorter, Smarter Links?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white">
            Transform a long link into a short, trackable one using our platform.
            Create a free account or subscribe to a paid plan today!
          </p>

          <div className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-4">

            <button
              className="
                bg-white
                text-[#17253b]
                px-5 py-3
                rounded-md
                font-medium
                hover:bg-gray-100
                transition
              "
            >
              View Plans
            </button>

            <button
              className="
                bg-[#1685A3]
                text-white
                px-5 py-3
                rounded-md
                font-semibold
                hover:bg-[#11758f]
                transition
              "
            >
              Create Free Account
            </button>

          </div>
        </div>
      </section>


      {/* ================= MAIN FOOTER ================= */}
      <section className="bg-gradient-to-r from-[#1685A3] via-[#08627E] to-[#002B4A]">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.4fr] gap-10 lg:gap-16">

            {/* FEATURES */}
            <div>
              <h3 className="text-xl font-bold">
                Features
              </h3>

              <ul className="mt-8 space-y-4 text-lg">

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Link Editor
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Link Management
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Branded Links
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Short URL Tracking
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    QR Code Generator
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Short URL API
                  </a>
                </li>

              </ul>
            </div>


            {/* RESOURCES */}
            <div>
              <h3 className="text-xl font-bold">
                Resources
              </h3>

              <ul className="mt-8 space-y-4 text-lg">

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    For Developers
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Our Proven Process
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    About Us
                  </a>
                </li>

              </ul>
            </div>


            {/* CONTACT */}
            <div>
              <h3 className="text-xl font-bold">
                Contact Us
              </h3>

              <ul className="mt-8 space-y-4 text-lg">

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Help Desk
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Contact Sales
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Contact Support
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Report Abuse
                  </a>
                </li>

              </ul>
            </div>


            {/* LEGAL */}
            <div>
              <h3 className="text-xl font-bold">
                Legal
              </h3>

              <ul className="mt-8 space-y-4 text-lg">

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Terms of Service
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Cookie Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Accessibility Statement
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-200 transition">
                    Privacy Manager
                  </a>
                </li>

              </ul>
            </div>


            {/* BRAND / SOCIAL */}
            <div className="flex flex-col items-center lg:items-end justify-end">

              {/* Social Icons */}
              <div className="flex items-center gap-6 text-xl">

                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="#"
                  className="hover:text-gray-300 transition"
                  aria-label="X"
                >
                  𝕏
                </a>

              </div>


              {/* TinyURL Logo Text */}
              <div className="mt-10">
                <h2 className="text-3xl sm:text-4xl font-black tracking-wide">
                  TINYURL
                </h2>
              </div>


              {/* Copyright */}
              <div className="mt-5 text-center lg:text-right text-base leading-6">
                <p>© 2026 TinyURL LLC</p>
                <p>All Rights Reserved</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
};

export default Footer;