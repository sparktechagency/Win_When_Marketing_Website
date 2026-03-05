import React from "react";
import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  CtaSection,
} from "./components/sections";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        overflowX: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
