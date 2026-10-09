 import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Is a URL Shortener?",
      answer:
        "A URL shortener converts a long web address into a shorter and easier-to-share link.",
    },
    {
      question: "How Does a URL Shortener Work?",
      answer:
        "A URL shortener creates a unique short link that redirects users to the original long URL when clicked.",
    },
    {
      question: "What Are the Benefits of Using a Short URL?",
      answer:
        "Short URLs are easier to share, remember, and use across social media, emails, advertisements, and other platforms.",
    },
    {
      question: "What Is a Custom URL Shortener?",
      answer:
        "A custom URL shortener allows you to create branded short links using your own custom domain or preferred alias.",
    },
    {
      question: "How Do I Shorten a URL for Free?",
      answer:
        "Simply enter your long URL into the URL shortener and generate your short link. You can create short URLs quickly and easily.",
    },
    {
      question: "How Do I Know Your Service Is Reliable and Scalable?",
      answer:
        "Our platform is designed to handle large numbers of links and redirects while providing reliable link management and analytics.",
    },
    {
      question: "Can I Use a Domain I Already Own?",
      answer:
        "Yes. You can connect a domain you already own and use it to create branded short links.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f9fa] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">

          {/* LEFT HEADING */}
          <div className="lg:pt-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[34px] xl:text-[36px] font-bold leading-[1.08] text-[#17253b]">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>

          {/* RIGHT FAQ */}
          <div className="w-full">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#d9dee2]"
                >

                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >

                    <span className="text-lg sm:text-xl font-bold text-[#17253b]">
                      {faq.question}
                    </span>

                    {/* ARROW */}
                    <span
                      className={`flex-shrink-0 text-2xl text-[#17253b] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                     ⌄
                    </span>

                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-base sm:text-lg leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;