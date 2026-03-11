import React from "react";

export const HeroSection: React.FC = () => (
  <section
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 24px 10px",
      position: "relative",
    }}
  >
    {/* Background orbs */}
    <div
      style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)",
        top: "-10%",
        right: "-10%",
        filter: "blur(60px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(94,234,212,0.08) 0%, transparent 70%)",
        bottom: "5%",
        left: "-5%",
        filter: "blur(50px)",
      }}
    />

    <div
      style={{
        maxWidth: 1200,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 48,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left content */}
      <div className="hero-content" style={{ flex: "1 1 480px", maxWidth: 560 }}>
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 99,
            background: "rgba(13,148,136,0.1)",
            border: "1px solid rgba(13,148,136,0.2)",
            marginBottom: 24,
            fontSize: 13,
            color: "var(--color-accent-light)",
            fontWeight: 500,
          }}
        >
          <span className="animate-pulse-dot">●</span>
          Available on iOS & Android
        </div>

        <h1
          className="animate-fade-up-d1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Never Miss the Moments
          <br />
          <span className="text-gradient-wide">That Matter</span>
        </h1>

        <p
          className="animate-fade-up-d2"
          style={{
            fontSize: "1.15rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 460,
          }}
        >
          WinWhen helps families and friends stay connected by sharing schedules for games,
          concerts, graduations, and life's biggest moments. Because every moment is better
          when someone is cheering for you.
        </p>

        <div className="animate-fade-up-d3 hero-cta-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="#download"
            className="btn-glow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 14,
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-mid))",
              color: "var(--color-bg)",
              fontWeight: 700,
              fontSize: 16,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,148,136,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Download Free →
          </a>
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 14,
              border: "1px solid rgba(94,234,212,0.2)",
              color: "var(--color-accent-light)",
              fontWeight: 600,
              fontSize: 16,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.5)";
              e.currentTarget.style.background = "rgba(94,234,212,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See Features
          </a>
        </div>
      </div>

      {/* Right — Community image */}
      <div
        className="animate-float-1 hero-image-col"
        style={{
          flex: "1 1 400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Glow behind image */}
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <img
          src="/WinWhen_Community.svg"
          alt="WinWhen Community"
          style={{
            width: "100%",
            maxWidth: 520,
            height: "auto",
            position: "relative",
            zIndex: 1,
            filter: "drop-shadow(0 24px 48px rgba(13,148,136,0.25))",
          }}
        />
      </div>
    </div>
  </section>
);
