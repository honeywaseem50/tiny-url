 
import { useState } from "react";

const Plans = () => {
  const [billing, setBilling] = useState("annually");
  const [proLinks, setProLinks] = useState(125);
  const [bulkLinks, setBulkLinks] = useState(50000);

  const isAnnual = billing === "annually";
  const formatNumber = (number) => number.toLocaleString("en-US");

  const proPrice = isAnnual ? 9 : 12;
  const bulkPrice = isAnnual ? 69 : 89;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#202b38]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-14 lg:py-12">

        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[40px]">
            Find a plan that meets your needs
          </h1>

          {/* MONTHLY / ANNUALLY */}
          <div className="flex w-fit items-center rounded-full bg-[#087f9b] p-1 text-sm font-semibold">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 transition ${
                !isAnnual
                  ? "bg-white text-[#243747]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annually")}
              className={`rounded-full px-4 py-2 transition ${
                isAnnual
                  ? "bg-white text-[#243747]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.2fr_0.95fr_0.95fr_0.95fr]">

          {/* INTRODUCTION */}
          <section className="py-1 lg:pr-5">
            <h2 className="mb-5 text-2xl font-bold leading-tight">
              Get personal with
              <br /> branded links
            </h2>

            <p className="mb-5 text-base leading-6">
              TinyURL's paid tiers offer powerful link branding and
              customization features.
            </p>

            <p className="mb-6 text-base leading-6">
              Because why settle for being noticed when you can be remembered?
            </p>

            <p className="text-xs italic text-gray-600">
              * Listed prices exclude any applicable taxes.
            </p>
          </section>

          {/* PRO */}
          <section className="flex flex-col rounded-lg border border-[#dce1e6] bg-white p-6 sm:p-7">
            <h2 className="mb-2 text-xl font-semibold">Pro</h2>

            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold">${proPrice}</span>
              <span className="text-sm text-gray-600">/ mo *</span>
            </div>

            <p className="mb-7 mt-1 text-xs">
              ( ${proPrice * 12} / yr )
            </p>

            <p className="mb-5 min-h-[60px] text-[13px] leading-[1.4]">
              Get full access to advanced link analytics, editing and management.
            </p>

            <div className="mb-7">
              <div className="mb-2 flex justify-between text-xs">
                <span>{formatNumber(proLinks)}</span>
                <span>4K</span>
              </div>

              <input
                type="range"
                min="125"
                max="4000"
                step="125"
                value={proLinks}
                onChange={(e) => setProLinks(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer accent-[#168c51]"
                aria-label="Pro monthly link limit"
              />

              <p className="mt-2 text-xs text-gray-500">
                Monthly link limit
              </p>
            </div>

            <ul className="mb-8 space-y-3 text-[13px]">
              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <div>
                  <strong>{formatNumber(proLinks)} Links / mo</strong>
                  {proLinks > 125 && (
                    <p className="text-[11px] text-gray-500">
                      Additional links may cost extra.
                    </p>
                  )}
                </div>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>Unlimited Tracked Clicks</strong>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>3 Branded Domains</strong>
              </li>
            </ul>

            <button
              onClick={() => alert("Pro plan selected!")}
              className="mt-auto w-full rounded-md bg-[#208447] px-4 py-3 font-semibold text-white transition hover:bg-[#176b38]"
            >
              Subscribe Now
            </button>
          </section>

          {/* BULK 50K */}
          <section className="flex flex-col rounded-lg border border-[#dce1e6] bg-white p-6 sm:p-7">
            <h2 className="mb-2 text-xl font-semibold">Bulk 50K</h2>

            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold">${bulkPrice}</span>
              <span className="text-sm text-gray-600">/ mo *</span>
            </div>

            <p className="mb-7 mt-1 text-xs">
              ( ${bulkPrice * 12} / yr )
            </p>

            <p className="mb-5 min-h-[60px] text-[13px] leading-[1.4]">
              Generate, edit and manage your links in bulk.
            </p>

            <div className="mb-7">
              <div className="mb-2 flex justify-between text-xs">
                <span>{formatNumber(bulkLinks)}</span>
                <span>5M</span>
              </div>

              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={bulkLinks}
                onChange={(e) => setBulkLinks(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer accent-[#168c51]"
                aria-label="Bulk monthly link limit"
              />

              <p className="mt-2 text-xs text-gray-500">
                Monthly link limit
              </p>
            </div>

            <ul className="mb-8 space-y-3 text-[13px]">
              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <div>
                  <strong>{formatNumber(bulkLinks)} Links / mo</strong>
                  {bulkLinks > 50000 && (
                    <p className="text-[11px] text-gray-500">
                      Additional links may cost extra.
                    </p>
                  )}
                </div>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <div>
                  <strong>50,000 Tracked Clicks / mo</strong>
                  <p className="text-[11px] text-gray-500">
                    Additional clicks may cost extra.
                  </p>
                </div>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>3 Branded Domains</strong>
              </li>
            </ul>

            <button
              onClick={() => alert("Bulk plan selected!")}
              className="mt-auto w-full rounded-md bg-[#208447] px-4 py-3 font-semibold text-white transition hover:bg-[#176b38]"
            >
              Subscribe Now
            </button>
          </section>

          {/* ENTERPRISE */}
          <section className="flex flex-col rounded-lg border border-[#dce1e6] bg-white p-6 sm:p-7">
            <h2 className="mb-2 text-xl font-semibold">Enterprise</h2>

            <p className="mb-1 text-[25px] font-bold">Custom</p>

            <p className="mb-7 text-xs">
              {isAnnual
                ? "(Starts at $3,999 / yr)"
                : "Custom monthly pricing"}
            </p>

            <p className="mb-7 min-h-[60px] text-[13px] leading-[1.4]">
              A tailor-made plan for enterprises that need more than our
              regular plans offer.
            </p>

            <ul className="mb-8 space-y-3 text-[13px]">
              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>Custom Number of Links</strong>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>Custom Number of Tracked Clicks</strong>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>Custom Number of Branded Domains</strong>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>99.9% SLA-backed uptime guarantees</strong>
              </li>

              <li className="flex gap-2">
                <span className="text-green-700">✓</span>
                <strong>Custom Solutions for Compliance Needs</strong>
              </li>
            </ul>

            <button
              onClick={() => alert("Contact Sales clicked!")}
              className="mt-auto w-full rounded-md bg-[#208447] px-4 py-3 font-semibold text-white transition hover:bg-[#176b38]"
            >
              Contact Sales
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Plans;