 import { useState } from "react";

const benefits = [
{
icon: "📣",
title: "Promote Personalized Web Links Online",
text: "Create memorable custom URLs that reflect your audience and brand.",
},
{
icon: "🔗",
title: "Spotlight Your Brand Identity and Voice",
text: "Customize URLs with your brand identity for social media, business cards, banners, and more.",
},
{
icon: "🏆",
title: "Top Marketing Tool for Brand Exposure",
text: "Custom URLs make sharing your brand easier across marketing channels.",
},
];

const questions = [
{
q: "How Do Link Editors Impact SEO?",
a: "Custom branded links make URLs easier to recognize and share. Keep your destination pages relevant and useful.",
},
{
q: "How Do I Customize a URL Link?",
a: "Choose a domain, enter your destination URL, and customize the link ending to match your brand.",
},
{
q: "How Do I Rename a TinyURL Link?",
a: "Open your link management tools, select a link, and update its available customization options.",
},
{
q: "What Does a Custom Link Look Like?",
a: "A custom link uses a recognizable domain and a personalized ending, such as yourbrand.link/summer.",
},
];

function FeatureIllustration({ type }) {
return ( <div className="relative flex min-h-64 items-center justify-center overflow-hidden"> <div className="absolute h-48 w-48 rounded-full bg-[#dff4f5]" />

  <div className="relative w-64 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
    <p className="mb-3 text-sm font-semibold text-gray-500">
      {type === 1
        ? "Customize Your Link"
        : type === 2
        ? "Manage Your Domain"
        : "Link Analytics"}
    </p>

    <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
      {type === 1
        ? "mybranded.link/summer"
        : type === 2
        ? "yourbrand.com"
        : "mybrand.link/sale"}
    </div>

    {type === 3 ? (
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-[#e7f6f4] p-3">
          <p className="text-xs text-gray-500">Clicked Links</p>
          <p className="font-bold text-gray-800">102,293</p>
        </div>
        <div className="rounded-lg bg-[#fdf1d8] p-3">
          <p className="text-xs text-gray-500">Total Clicks</p>
          <p className="font-bold text-gray-800">567,540</p>
        </div>
      </div>
    ) : (
      <button
        type="button"
        className="mt-4 rounded-lg bg-[#087d98] px-5 py-2 text-sm font-semibold text-white"
      >
        {type === 1 ? "Save Link" : "Search Domain"}
      </button>
    )}
  </div>
</div>
);
}

export default function LinkEditorPage() {
const [openFaq, setOpenFaq] = useState(null);

return ( <div className="min-h-screen bg-white text-[#102b40]"> <section className="bg-[#002342] text-white"> <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10"> <div> <p className="mb-5 text-sm font-semibold text-[#6fd5e5]">
Features </p>

        <h1 className="max-w-xl text-3xl font-extrabold leading-tight md:text-5xl">
          The Only Link Editor You'll Ever Need
        </h1>

        <p className="mt-5 max-w-lg leading-7 text-slate-200">
          Quit bothering your developers for short, punchy links and let
          TinyURL handle the work for you.
        </p>

        <a
          href="#custom-urls"
          className="mt-6 inline-flex rounded-lg bg-[#168ca5] px-5 py-3 font-bold text-white transition hover:bg-[#0c728a]"
        >
          Get Started
        </a>
      </div>

      <FeatureIllustration type={1} />
    </div>
  </section>

  <section id="custom-urls" className="bg-[#f7f8fa] px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Custom URLs: Because Audiences Want Links They Recognize
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Create recognizable links that help your audience identify your
          brand and make sharing easier.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {benefits.map((item) => (
          <article key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-5xl">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="px-6 py-14 md:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-14">
      <FeatureIllustration type={1} />

      <div>
        <h2 className="text-2xl font-bold md:text-3xl">
          Custom Links That Fit Your Personality
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
          Give your existing links a personalized look that reflects your
          brand and makes them easier for your audience to recognize.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-[#f7f8fa] px-6 py-14 md:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-14">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">
          Create and Manage Your Custom Domain in Minutes
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
          Connect a domain you own or explore available domains, then
          organize your branded links in one place.
        </p>
      </div>

      <FeatureIllustration type={2} />
    </div>
  </section>

  <section className="px-6 py-14 md:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-14">
      <FeatureIllustration type={3} />

      <div>
        <h2 className="text-2xl font-bold md:text-3xl">
          Get More Customized, Get More Clicks
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
          Customize your short links for products, events, and promotions.
          Use analytics to understand how your links perform.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-[#117a91] px-6 py-16 text-white">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-2xl font-bold md:text-3xl">
        Build Essential Branding Habits with TinyURL
      </h2>
      <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/90">
        Build your brand, raise awareness, and create consistent campaigns
        with recognizable links.
      </p>
      <a
        href="/app/pricing"
        className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-bold text-[#12334a] hover:bg-gray-100"
      >
        View Plans
      </a>
    </div>
  </section>

  <section id="link-editor-faq" className="px-6 py-16 md:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[250px_1fr]">
      <h2 className="text-2xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {questions.map((item, index) => (
          <div key={item.q}>
            <button
              type="button"
              onClick={() =>
                setOpenFaq(openFaq === index ? null : index)
              }
              aria-expanded={openFaq === index}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold hover:text-[#087d98]"
            >
              {item.q}
              <span className="text-xl">
                {openFaq === index ? "−" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <p className="max-w-3xl pb-5 text-sm leading-7 text-gray-600">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
);
}
