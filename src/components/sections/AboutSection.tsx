import React from "react";

const VALUES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community First",
    desc: "Every decision we make starts with one question: does this bring real people closer together? Technology is just the bridge.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trust by Design",
    desc: "OTP-verified profiles, transparent matching, and zero tolerance for fake accounts. Safety isn't an afterthought — it's the foundation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Built with Heart",
    desc: "WinWhen was born from a real need — to find your people in a noisy world. Every feature is crafted with genuine care for human connection.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Always Improving",
    desc: "We ship fast, listen to our community, and iterate relentlessly. The app you use today is better than yesterday — and tomorrow's is better still.",
  },
];

export const AboutSection: React.FC = () => (
  <section id="about" className="section-pad" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
    {/* Background ambient */}
    <div style={{
      position: "absolute", top: "30%", right: "-15%",
      width: 600, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 65%)",
      filter: "blur(60px)", pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", bottom: "10%", left: "-10%",
      width: 400, height: 400, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(94,234,212,0.05) 0%, transparent 65%)",
      filter: "blur(50px)", pointerEvents: "none",
    }} />

    <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <p style={{
          color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13,
          textTransform: "uppercase", letterSpacing: 3, marginBottom: 12,
        }}>
          About
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 900, lineHeight: 1.15,
          marginBottom: 20,
        }}>
          We Believe Every Person<br />
          Deserves a{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--color-accent-light), var(--color-accent-lighter))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Real Community
          </span>
        </h2>
        <p style={{
          color: "var(--color-text-secondary)", fontSize: "1.1rem",
          lineHeight: 1.75, maxWidth: 600, margin: "0 auto",
        }}>
          WinWhen started with a simple idea — the right connections change lives. We set out to
          build an app where authenticity beats algorithms, and where winning together is the only goal.
        </p>
      </div>

      {/* ── Two-column: story + image ── */}
      <div className="about-two-col" style={{
        display: "flex", gap: 64, alignItems: "center",
        flexWrap: "wrap", marginBottom: 80,
      }}>
        {/* Left: story */}
        <div style={{ flex: "1 1 420px", maxWidth: 560 }}>
          {/* Founder quote card */}
          <div style={{
            padding: "32px 36px", borderRadius: 20,
            background: "linear-gradient(135deg, rgba(13,148,136,0.08) 0%, rgba(15,23,42,0.6) 100%)",
            border: "1px solid rgba(94,234,212,0.1)",
            marginBottom: 32, position: "relative",
          }}>
            {/* Quote mark */}
            <div style={{
              position: "absolute", top: 20, left: 28,
              fontFamily: "var(--font-display)", fontSize: "5rem",
              lineHeight: 1, color: "var(--color-accent)", opacity: 0.2,
              pointerEvents: "none", userSelect: "none",
            }}>
              "
            </div>
            <p style={{
              color: "var(--color-text)", fontSize: "1.05rem",
              lineHeight: 1.8, fontStyle: "italic",
              position: "relative", zIndex: 1, paddingTop: 16,
            }}>
              We built WinWhen because we were tired of social apps that made us feel more alone.
              Real community happens when people show up authentically — and we made it our mission
              to build the space where that's possible.
            </p>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 15, color: "#020617",
              }}>
                WW
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>The WinWhen Team</div>
                <div style={{ color: "var(--color-accent-light)", fontSize: 12 }}>Founders & Builders</div>
              </div>
            </div>
          </div>

          {/* Mission stats row */}
          <div className="about-mission-stats" style={{ display: "flex", gap: 20 }}>
            {[
              { num: "2023", label: "Founded" },
              { num: "50K+", label: "Members" },
              { num: "15+", label: "Countries" },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, textAlign: "center", padding: "18px 12px",
                borderRadius: 14,
                background: "rgba(15,23,42,0.5)",
                border: "1px solid rgba(94,234,212,0.07)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: "1.5rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--color-accent-light), var(--color-accent-lighter))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  marginBottom: 4,
                }}>
                  {s.num}
                </div>
                <div style={{ color: "var(--color-text-muted)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: onboarding illustration */}
        <div style={{
          flex: "1 1 340px", display: "flex",
          justifyContent: "center", alignItems: "center",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle, rgba(13,148,136,0.14) 0%, transparent 70%)",
            filter: "blur(32px)", pointerEvents: "none",
          }} />
          <img
            src="/WinWhen_Onboarding.svg"
            alt="WinWhen Onboarding"
            style={{
              width: "100%", maxWidth: 420, height: "auto",
              position: "relative", zIndex: 1,
              filter: "drop-shadow(0 20px 40px rgba(13,148,136,0.2))",
            }}
          />
        </div>
      </div>

      {/* ── Values grid ── */}
      <div>
        <p style={{
          textAlign: "center", color: "var(--color-text-muted)",
          fontSize: 12, fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.15em", marginBottom: 32,
        }}>
          Our Core Values
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {VALUES.map((v, i) => (
            <div
              key={i}
              style={{
                padding: "28px 28px",
                borderRadius: 18,
                background: "rgba(15,23,42,0.5)",
                border: "1px solid rgba(94,234,212,0.07)",
                transition: "border-color 0.25s, transform 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(94,234,212,0.18)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(13,148,136,0.08) 0%, rgba(15,23,42,0.7) 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(94,234,212,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(15,23,42,0.5)";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                background: "rgba(13,148,136,0.1)",
                border: "1px solid rgba(94,234,212,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-accent-light)",
              }}>
                {v.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.1rem",
                fontWeight: 700, marginBottom: 10,
                color: "var(--color-text)",
              }}>
                {v.title}
              </h3>
              <p style={{
                color: "var(--color-text-muted)", fontSize: 14,
                lineHeight: 1.7,
              }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
