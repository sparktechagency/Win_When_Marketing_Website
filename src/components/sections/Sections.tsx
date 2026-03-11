import React, { useState, useEffect } from "react";
import { AnimatedStat } from "../ui";
import { STATS, FEATURES, STEPS, TESTIMONIALS } from "../../data/constants";

/* ═══ APP STORE UPCOMING MODAL ═══ */
const AppStoreModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [notify, setNotify] = useState("");
  const [notifyDone, setNotifyDone] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => { document.body.style.overflow = ""; }, 300);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open && !visible) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(2,6,23,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(160deg, rgba(15,23,42,0.98) 0%, rgba(9,16,35,0.98) 100%)",
          border: "1px solid rgba(94,234,212,0.12)",
          borderRadius: 28,
          padding: "48px 40px",
          maxWidth: 440,
          width: "100%",
          position: "relative",
          textAlign: "center",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(94,234,212,0.05)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10, width: 36, height: 36,
            color: "var(--color-text-secondary)", fontSize: 16,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--color-text)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
        >
          ✕
        </button>

        {/* Apple icon */}
        <div style={{
          width: 72, height: 72, borderRadius: 20,
          background: "linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          fontSize: 34,
        }}>

        </div>

        {/* Coming soon badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 14px", borderRadius: 99, marginBottom: 16,
          background: "rgba(94,234,212,0.08)",
          border: "1px solid rgba(94,234,212,0.2)",
          fontSize: 11, fontWeight: 700, letterSpacing: "1.5px",
          color: "var(--color-accent-light)",
          textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent-light)", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
          Coming Soon
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.75rem", fontWeight: 800,
          marginBottom: 12, lineHeight: 1.2,
          color: "var(--color-text)",
        }}>
          iOS App is on<br />
          <span style={{
            background: "linear-gradient(135deg, var(--color-accent-light), var(--color-accent-lighter))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            the Way
          </span>
        </h2>

        <p style={{
          color: "var(--color-text-secondary)", lineHeight: 1.7,
          fontSize: "0.95rem", marginBottom: 32,
        }}>
          We're putting the finishing touches on our iOS app. Drop your email and we'll notify you the moment it launches on the App Store.
        </p>

        {!notifyDone ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={notify}
              onChange={(e) => setNotify(e.target.value)}
              style={{
                padding: "13px 18px", borderRadius: 12,
                border: "1px solid rgba(94,234,212,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--color-text)", fontSize: 15,
                fontFamily: "var(--font-body)", outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(13,148,136,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(94,234,212,0.15)")}
            />
            <button
              onClick={() => notify && setNotifyDone(true)}
              className="btn-glow"
              style={{
                padding: "13px 24px", borderRadius: 12,
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-mid))",
                color: "#020617", fontWeight: 700, fontSize: 15,
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(13,148,136,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Notify Me at Launch
            </button>
          </div>
        ) : (
          <div style={{
            padding: "16px 24px", borderRadius: 14,
            background: "rgba(13,148,136,0.1)",
            border: "1px solid rgba(13,148,136,0.25)",
            color: "var(--color-accent-light)", fontWeight: 600, fontSize: 15,
          }}>
            You're on the list! We'll ping you when iOS launches.
          </div>
        )}

        {/* Already on Android callout */}
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 10 }}>
            Already available on Android?
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.social.winwhen&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(94,234,212,0.12)",
              color: "var(--color-text-secondary)", fontSize: 13, fontWeight: 500,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)"; e.currentTarget.style.color = "var(--color-text)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.12)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
          >
            <span style={{ fontSize: 16 }}>🤖</span>
            Download on Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

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
    <section id="features" className="section-pad" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Features</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Everything You Need to <span className="text-gradient">Stay Connected</span>
          </h2>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Built for families and friends who want to show up for each other and celebrate life's most important moments together.
          </p>
        </div>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
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
  <section className="section-pad" style={{ padding: "100px 24px", background: "linear-gradient(180deg, rgba(13,148,136,0.03) 0%, transparent 100%)" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>How It Works</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 64 }}>
        Three Steps to <span className="text-gradient">Never Miss a Moment</span>
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
  <section id="community" className="section-pad" style={{ padding: "100px 24px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ color: "var(--color-accent-light)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>Testimonials</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
          Loved by <span className="text-gradient">Families Everywhere</span>
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <AppStoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
    <section id="download" className="section-pad" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(13,148,136,0.08) 0%, transparent 60%)" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 16 }}>
          Ready to <span className="text-gradient-wide">Never Miss a Moment</span>?
        </h2>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 36, fontSize: "1.05rem" }}>
          Join thousands of families staying connected. Download WinWhen today — it's free.
        </p>

        {!submitted ? (
          <div className="cta-form-row" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cta-email-input"
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
          {/* App Store — opens Coming Soon modal */}
          <button
            onClick={() => setModalOpen(true)}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", borderRadius: 12, background: "var(--color-elevated)", border: "1px solid rgba(94,234,212,0.1)", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ fontSize: 22 }}>🍎</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 10, color: "var(--color-text-muted)" }}>Download on</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)" }}>App Store</div>
            </div>
          </button>

          {/* Google Play — direct link */}
          <a
            href="https://play.google.com/store/apps/details?id=com.social.winwhen&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", borderRadius: 12, background: "var(--color-elevated)", border: "1px solid rgba(94,234,212,0.1)", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(94,234,212,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ fontSize: 22 }}>🤖</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 10, color: "var(--color-text-muted)" }}>Get it on</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)" }}>Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  );
};
