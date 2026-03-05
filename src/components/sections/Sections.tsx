import React, { useState, useEffect } from "react";
import { AnimatedStat } from "../ui";
import { STATS, FEATURES, STEPS, TESTIMONIALS } from "../../data/constants";

/* ═══ STATS ═══ */
export const StatsSection: React.FC = () => (
  <section style={{ padding: "0", position: "relative", overflow: "hidden" }}>
    {/* Top glow line */}
    <div style={{
      position: "absolute",
      top: 0, left: 0, right: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent 0%, rgba(94,234,212,0.35) 30%, rgba(94,234,212,0.35) 70%, transparent 100%)",
    }} />
    {/* Bottom glow line */}
    <div style={{
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent 0%, rgba(13,148,136,0.2) 30%, rgba(13,148,136,0.2) 70%, transparent 100%)",
    }} />
    {/* Ambient glow */}
    <div style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-50%,-50%)",
      width: 800, height: 300,
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(13,148,136,0.07) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <div
      style={{
        background: "linear-gradient(135deg, rgba(13,148,136,0.06) 0%, rgba(15,23,42,0.5) 50%, rgba(94,234,212,0.03) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="stats-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        padding: "56px 64px",
        position: "relative",
        zIndex: 1,
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              padding: "0 32px",
              borderRight: i < STATS.length - 1
                ? "1px solid rgba(94,234,212,0.08)"
                : "none",
            }}
          >
            <AnimatedStat value={s.value} label={s.label} delay={i * 100} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ FEATURES ═══ */
export const FeaturesSection: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % FEATURES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="features" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Features</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Everything You Need to <span className="text-gradient">Connect</span>
          </h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Built with care for communities that value authentic relationships and real-world connections.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {FEATURES.map((f, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: 32,
                  borderRadius: 20,
                  background: isActive
                    ? "linear-gradient(135deg, rgba(13,148,136,0.12), rgba(94,234,212,0.04))"
                    : "var(--color-card)",
                  border: `1px solid ${isActive ? "var(--color-border-active)" : "var(--color-border)"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; } }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, marginBottom: 10, color: isActive ? "var(--color-accent-light)" : "var(--color-text)", transition: "color 0.3s" }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: 14 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══ HOW IT WORKS ═══ */
export const HowItWorksSection: React.FC = () => (
  <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, rgba(13,148,136,0.03) 0%, transparent 100%)" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>How It Works</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 64 }}>
        Three Steps to Your <span className="text-gradient">Community</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>
        {STEPS.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", border: "2px solid var(--color-border-active)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--color-accent-light)" }}>
              {s.step}
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: 14 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ TESTIMONIALS ═══ */
export const TestimonialsSection: React.FC = () => (
  <section id="community" style={{ padding: "100px 24px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Testimonials</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
          Loved by Our <span className="text-gradient">Community</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            style={{ padding: 32, borderRadius: 20, background: "var(--color-card)", border: "1px solid var(--color-border)", transition: "border-color 0.3s, transform 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, hsl(${170 + i * 20}, 55%, 35%), hsl(${170 + i * 20}, 60%, 50%))`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, color: "#fff" }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                <div style={{ color: "var(--color-accent-light)", fontSize: 12 }}>{t.role}</div>
              </div>
            </div>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: 14, fontStyle: "italic" }}>"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ CTA ═══ */
export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="download" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(13,148,136,0.08) 0%, transparent 60%)" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 16 }}>
          Ready to <span className="text-gradient-wide">Win Together</span>?
        </h2>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 36, fontSize: "1.05rem" }}>
          Join thousands building meaningful connections. Download WinWhen today — it's free.
        </p>

        {!submitted ? (
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "14px 20px", borderRadius: 14, border: "1px solid rgba(94,234,212,0.15)", background: "rgba(15,23,42,0.8)", color: "var(--color-text)", fontSize: 15, fontFamily: "var(--font-body)", width: 300, outline: "none", transition: "border-color 0.2s" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(13,148,136,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(94,234,212,0.15)")}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              className="btn-glow"
              style={{ padding: "14px 32px", borderRadius: 14, background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-mid))", color: "var(--color-bg)", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "var(--font-body)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,148,136,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Get Early Access
            </button>
          </div>
        ) : (
          <div style={{ padding: "20px 32px", borderRadius: 16, background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.25)", marginBottom: 32, color: "var(--color-accent-light)", fontWeight: 600 }}>
            🎉 You're on the list! We'll be in touch soon.
          </div>
        )}

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {[{ name: "App Store", icon: "🍎" }, { name: "Google Play", icon: "🤖" }].map((store) => (
            <div
              key={store.name}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", borderRadius: 12, background: "var(--color-elevated)", border: "1px solid rgba(94,234,212,0.1)", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(94,234,212,0.1)")}
            >
              <span style={{ fontSize: 22 }}>{store.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "var(--color-text-muted)" }}>Download on</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{store.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
