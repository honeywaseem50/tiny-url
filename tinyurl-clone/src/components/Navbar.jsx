 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const features = [
  {
    icon: "✎",
    title: "Link Editor",
    description:
      "Keep all your links dynamic, and extend their value in the long run",
  },
  {
    icon: "🔗",
    title: "Branded Links",
    description:
      "Turn heads and hold attention with fully custom short links",
  },
  {
    icon: "▦",
    title: "QR Code Generator",
    description:
      "Elevate your customers' experiences with dynamic, scannable codes",
  },
  {
    icon: "☷",
    title: "Link Management",
    description:
      "Organize as many links as you need with our powerful, intuitive platform",
  },
  {
    icon: "⊙",
    title: "Short URL Tracking",
    description:
      "Measure the success of your efforts and make smarter, data-driven choices",
  },
  {
    icon: "</>",
    title: "Short URL API",
    description:
      "Build powerful apps and automations with your link shortening API",
  },
];

const resources = [
  {
    icon: "▤",
    title: "Blog",
    description:
      "Read the latest tips and tricks from the top experts in link shortening",
  },
  {
    icon: "♧",
    title: "For Developers",
    description:
      "Power your apps and software with automated, fully custom URL shortening",
  },
  {
    icon: "✓",
    title: "Our Proven Process",
    description:
      "Learn how our customers go from zero to hero with our link management tools",
  },
  {
    icon: "▣",
    title: "About Us",
    description:
      "Learn about TinyURL's journey as the first link shortener",
  },
];

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    setResourcesOpen(false);
  };

  const openPlans = () => {
    closeMenus();
    navigate("/app/pricing");
  };

  const toggleFeatures = () => {
    setFeaturesOpen((prev) => !prev);
    setResourcesOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen((prev) => !prev);
    setFeaturesOpen(false);
  };

  const getFeatureLink = (feature) => {
    if (feature.title.trim() === "Link Editor") {
      return "/link-editor";
    }

    return `/#${feature.title.toLowerCase().replaceAll(" ", "-")}`;
  };

  const getResourceLink = (resource) =>
    `/#${resource.title.toLowerCase().replaceAll(" ", "-")}`;

  const handleFeatureClick = (feature) => {
    closeMenus();
    navigate(getFeatureLink(feature));
  };

  const handleResourceClick = (resource) => {
    closeMenus();
    navigate(getResourceLink(resource));
  };

  return (
    <nav className="relative z-50 w-full bg-gradient-to-r from-[#0d7390] to-[#033655]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="text-3xl font-black tracking-[-0.04em] text-white [text-shadow:2px_2px_0px_rgba(0,0,0,0.15)]"
          >
            TINYURL
          </Link>

          {/* Desktop Menu */}
          <div className="ml-12 mr-auto hidden items-center gap-8 lg:flex">
            <button
              type="button"
              onClick={openPlans}
              className="relative z-[100] cursor-pointer text-lg font-semibold text-white/90 transition hover:text-white"
            >
              View Plans
            </button>

            {/* Features Dropdown */}
            <div
              className="flex h-20 items-center"
              onMouseEnter={() => {
                setFeaturesOpen(true);
                setResourcesOpen(false);
              }}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                type="button"
                onClick={toggleFeatures}
                aria-expanded={featuresOpen}
                className={`h-full text-lg font-semibold text-white underline-offset-4 transition ${
                  featuresOpen ? "underline" : "hover:underline"
                }`}
              >
                Features
              </button>

              {featuresOpen && (
                <div
                  className="absolute left-0 top-full w-full rounded-b-xl bg-[#f7f8fa] text-gray-900 shadow-xl"
                  onMouseEnter={() => setFeaturesOpen(true)}
                >
                  <div className="mx-auto max-w-7xl px-8 py-10">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                      {features.map((feature) => (
                        <button
                          key={feature.title}
                          type="button"
                          onClick={() => handleFeatureClick(feature)}
                          className="group flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-white"
                        >
                          <span className="mt-0.5 w-6 shrink-0 text-xl font-bold text-[#082d46]">
                            {feature.icon}
                          </span>

                          <span>
                            <span className="mb-1 block text-xl font-bold transition group-hover:text-[#087d9c]">
                              {feature.title}
                            </span>

                            <span className="block text-[15px] leading-5 text-gray-800">
                              {feature.description}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Domains */}
            <Link
              to="/#domains"
              onClick={closeMenus}
              className="text-lg font-semibold text-white/90 transition hover:text-white"
            >
              Domains
            </Link>

            {/* Resources Dropdown */}
            <div
              className="flex h-20 items-center"
              onMouseEnter={() => {
                setResourcesOpen(true);
                setFeaturesOpen(false);
              }}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                onClick={toggleResources}
                aria-expanded={resourcesOpen}
                className={`h-full text-lg font-semibold text-white underline-offset-4 transition ${
                  resourcesOpen ? "underline" : "hover:underline"
                }`}
              >
                Resources
              </button>

              {resourcesOpen && (
                <div className="absolute left-0 top-full w-full rounded-b-xl bg-[#f7f8fa] text-gray-900 shadow-xl">
                  <div className="mx-auto max-w-7xl px-8 py-10">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                      {resources.map((resource) => (
                        <button
                          key={resource.title}
                          type="button"
                          onClick={() => handleResourceClick(resource)}
                          className="group flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-white"
                        >
                          <span className="mt-0.5 w-6 shrink-0 text-xl font-bold text-[#082d46]">
                            {resource.icon}
                          </span>

                          <span>
                            <span className="mb-1 block text-xl font-bold transition group-hover:text-[#087d9c]">
                              {resource.title}
                            </span>

                            <span className="block text-[15px] leading-5 text-gray-800">
                              {resource.description}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={closeMenus}
              className="px-5 py-2.5 text-lg font-semibold text-white transition hover:text-gray-200"
            >
              Log In
            </button>

            <button
              type="button"
              onClick={closeMenus}
              className="rounded-lg bg-[#087d98] px-5 py-2.5 text-lg font-semibold text-white shadow-sm transition hover:bg-[#066981]"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setFeaturesOpen(false);
              setResourcesOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/20 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={openPlans}
                className="w-full rounded-lg px-4 py-3 text-left font-medium text-white transition hover:bg-white/10"
              >
                View Plans
              </button>

              {/* Mobile Features */}
              <button
                type="button"
                onClick={toggleFeatures}
                className="w-full rounded-lg px-4 py-3 text-left font-medium text-white transition hover:bg-white/10"
                aria-expanded={featuresOpen}
              >
                Features
                <span className="float-right">
                  {featuresOpen ? "−" : "+"}
                </span>
              </button>

              {featuresOpen && (
                <div className="mx-2 mb-2 rounded-lg bg-white p-3">
                  {features.map((feature) => (
                    <button
                      key={feature.title}
                      type="button"
                      onClick={() => handleFeatureClick(feature)}
                      className="flex w-full items-start gap-3 rounded-lg p-3 text-left transition hover:bg-gray-100"
                    >
                      <span className="text-lg font-bold text-[#087d98]">
                        {feature.icon}
                      </span>

                      <span>
                        <span className="block font-bold text-gray-900">
                          {feature.title}
                        </span>

                        <span className="mt-1 block text-sm text-gray-600">
                          {feature.description}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile Domains */}
              <Link
                to="/#domains"
                onClick={closeMenus}
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Domains
              </Link>

              {/* Mobile Resources */}
              <button
                type="button"
                onClick={toggleResources}
                className="w-full rounded-lg px-4 py-3 text-left font-medium text-white transition hover:bg-white/10"
                aria-expanded={resourcesOpen}
              >
                Resources
                <span className="float-right">
                  {resourcesOpen ? "−" : "+"}
                </span>
              </button>

              {resourcesOpen && (
                <div className="mx-2 mb-2 rounded-lg bg-white p-3">
                  {resources.map((resource) => (
                    <button
                      key={resource.title}
                      type="button"
                      onClick={() => handleResourceClick(resource)}
                      className="flex w-full items-start gap-3 rounded-lg p-3 text-left transition hover:bg-gray-100"
                    >
                      <span className="text-lg font-bold text-[#087d98]">
                        {resource.icon}
                      </span>

                      <span>
                        <span className="block font-bold text-gray-900">
                          {resource.title}
                        </span>

                        <span className="mt-1 block text-sm text-gray-600">
                          {resource.description}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeMenus}
                  className="flex-1 rounded-lg border border-white/50 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Log In
                </button>

                <button
                  type="button"
                  onClick={closeMenus}
                  className="flex-1 rounded-lg bg-[#087d98] px-4 py-3 font-semibold text-white transition hover:bg-[#066981]"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}