import React from "react";
import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  AboutSection,
  CtaSection,
} from "./components/sections";
import { AnimatedCursor } from "./components/ui";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        overflowX: "hidden",
        cursor: "none",
      }}
    >
      <AnimatedCursor />

      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
