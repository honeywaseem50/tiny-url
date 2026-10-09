import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Tools from "./components/Tools";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Plans from "./components/Plans";
import LinkEditorPage from "./components/LinkEditorPage";

// HOME PAGE
function Home() {
  return (
    <div className="min-h-screen bg-[#002342]">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Tools />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

// PLANS PAGE
function PlansPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />

      <main>
        <Plans />
      </main>

      <Footer />
    </div>
  );
}

// LINK EDITOR PAGE
function LinkEditorRoute() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <LinkEditorPage />
      </main>

      <Footer />
    </div>
  );
}

// MAIN APP
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/app/pricing"
          element={<PlansPage />}
        />

        <Route
          path="/plans"
          element={<PlansPage />}
        />

        <Route
          path="/link-editor"
          element={<LinkEditorRoute />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
