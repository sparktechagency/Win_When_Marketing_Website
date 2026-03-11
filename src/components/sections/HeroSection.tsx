import React from "react";

const PREVIEW_EVENTS = [
  {
    emoji: "🏀",
    title: "Tyler's Basketball Game",
    sub: "Riverside Court · Today 4:30 PM",
    color: "#f97316",
    attending: ["A", "B", "C"],
    count: 8,
    tag: "Going",
    tagColor: "rgba(13,148,136,0.15)",
    tagText: "var(--color-accent-light)",
  },
  {
    emoji: "🎹",
    title: "Emma's Piano Recital",
    sub: "Downtown Hall · Friday 7:00 PM",
    color: "#a855f7",
    attending: ["D", "E", "F", "G"],
    count: 14,
    tag: "Reminder set",
    tagColor: "rgba(168,85,247,0.12)",
    tagText: "#c084fc",
  },
  {
    emoji: "🎓",
    title: "Jake's Graduation",
    sub: "State University · June 15",
    color: "#eab308",
    attending: ["H", "I", "J"],
    count: 32,
    tag: "28 going",
    tagColor: "rgba(234,179,8,0.12)",
    tagText: "#fde047",
  },
];

const AVATAR_COLORS = [
  "#0d9488", "#14b8a6", "#5eead4", "#a855f7", "#f97316", "#eab308",
];

const MiniAvatar: React.FC<{ letter: string; idx: number }> = ({ letter, idx }) => (
  <div style={{
    width: 22, height: 22, borderRadius: "50%",
    background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
    border: "2px solid #0d1424",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 8, fontWeight: 800, color: "#020617",
    marginLeft: idx === 0 ? 0 : -6,
    zIndex: 10 - idx, position: "relative", flexShrink: 0,
  }}>
    {letter}
  </div>
);

const EventCard: React.FC<{ event: typeof PREVIEW_EVENTS[0]; style?: React.CSSProperties }> = ({ event, style }) => (
  <div style={{
    background: "linear-gradient(145deg, rgba(15,23,42,0.97) 0%, rgba(9,16,35,0.99) 100%)",
    border: "1px solid rgba(94,234,212,0.1)",
    borderRadius: 18,
    padding: "16px 18px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(94,234,212,0.04)",
    ...style,
  }}>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
      <div style={{
        width: 42, height: 42, borderRadius: 13, flexShrink: 0,
        background: `${event.color}18`,
        border: `1px solid ${event.color}35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>
        {event.emoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: "var(--color-text)",
          marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {event.title}
        </div>
        <div style={{ fontSize: 11, color: "var(--color-text-muted)", lineHeight: 1.4 }}>
          {event.sub}
        </div>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ display: "flex" }}>
          {event.attending.map((l, i) => <MiniAvatar key={i} letter={l} idx={i} />)}
        </div>
        <span style={{ fontSize: 10.5, color: "var(--color-text-muted)", marginLeft: 4 }}>
          +{event.count} going
        </span>
      </div>
      <div style={{
        fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em",
        padding: "3px 9px", borderRadius: 99,
        background: event.tagColor,
        color: event.tagText,
      }}>
        {event.tag}
      </div>
    </div>
  </div>
);

export const HeroSection: React.FC = () => (
  <section style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 24px 80px",
    position: "relative",
    overflow: "hidden",
  }}>

    {/* ── Grid pattern ── */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(94,234,212,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(94,234,212,0.025) 1px, transparent 1px)
      `,
      backgroundSize: "64px 64px",
      maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
    }} />

    {/* ── Orbs ── */}
    <div style={{
      position: "absolute", width: 600, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(13,148,136,0.14) 0%, transparent 65%)",
      top: "-15%", left: "10%", filter: "blur(80px)", pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)",
      bottom: "5%", right: "0%", filter: "blur(70px)", pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", width: 350, height: 350, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 65%)",
      bottom: "15%", left: "5%", filter: "blur(60px)", pointerEvents: "none",
    }} />

    {/* ── Two-column layout ── */}
    <div className="hero-two-col" style={{
      maxWidth: 1240,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 64,
      position: "relative",
      zIndex: 1,
    }}>

      {/* ══ LEFT: Text content ══ */}
      <div className="hero-left" style={{ flex: "1 1 480px", maxWidth: 580 }}>

        {/* Badge */}
        <div className="animate-fade-up" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", borderRadius: 99, marginBottom: 28,
          background: "rgba(13,148,136,0.08)",
          border: "1px solid rgba(13,148,136,0.2)",
          fontSize: 12, fontWeight: 600, letterSpacing: "0.05em",
          color: "var(--color-accent-light)",
        }}>
          <span className="animate-pulse-dot" style={{ fontSize: 7 }}>●</span>
          Available on iOS & Android — Free
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-d1" style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
          fontWeight: 900,
          lineHeight: 1.06,
          marginBottom: 22,
          letterSpacing: "-0.02em",
        }}>
          Never Miss the
          <br />
          Moments That
          <br />
          <span style={{
            background: "linear-gradient(135deg, #0d9488 0%, #5eead4 55%, #99f6e4 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            filter: "drop-shadow(0 0 28px rgba(94,234,212,0.25))",
          }}>
            Matter Most
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-d2" style={{
          fontSize: "1.1rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.75,
          marginBottom: 36,
          maxWidth: 480,
        }}>
          WinWhen helps families and friends stay connected by sharing schedules for games,
          concerts, graduations, and life's biggest moments.{" "}
          <span style={{ color: "var(--color-accent-light)", fontWeight: 500 }}>
            Because every moment is better when someone is cheering for you.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-d3 hero-cta-buttons" style={{
          display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44,
        }}>
          <a
            href="#download"
            className="btn-glow"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "14px 32px", borderRadius: 100,
              background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-mid) 100%)",
              color: "#020617", fontWeight: 800, fontSize: 15,
              letterSpacing: "0.01em",
              boxShadow: "0 0 0 1px rgba(94,234,212,0.2), 0 8px 28px rgba(13,148,136,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 0 0 1px rgba(94,234,212,0.35), 0 16px 44px rgba(13,148,136,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 1px rgba(94,234,212,0.2), 0 8px 28px rgba(13,148,136,0.35)";
            }}
          >
            Get the App Free
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#features"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 100,
              border: "1px solid rgba(94,234,212,0.15)",
              background: "rgba(94,234,212,0.03)",
              color: "var(--color-text-secondary)", fontWeight: 600, fontSize: 15,
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.35)";
              e.currentTarget.style.color = "var(--color-accent-light)";
              e.currentTarget.style.background = "rgba(94,234,212,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.15)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.background = "rgba(94,234,212,0.03)";
            }}
          >
            See Features
          </a>
        </div>

        {/* Social proof */}
        <div className="animate-fade-up-d3" style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "10px 20px", borderRadius: 99,
          background: "rgba(15,23,42,0.55)",
          border: "1px solid rgba(94,234,212,0.07)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex" }}>
            {["S", "J", "P", "M", "K"].map((l, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: "50%",
                background: AVATAR_COLORS[i],
                border: "2px solid rgba(2,6,23,0.9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9.5, fontWeight: 800, color: "#020617",
                marginLeft: i === 0 ? 0 : -8,
                zIndex: 10 - i, position: "relative",
              }}>{l}</div>
            ))}
          </div>
          <div style={{ width: 1, height: 16, background: "rgba(94,234,212,0.1)" }} />
          <div style={{ display: "flex", gap: 2 }}>
            {[0, 1, 2, 3, 4].map(i => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fde047" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)", fontWeight: 500 }}>
            <span style={{ color: "var(--color-text)", fontWeight: 700 }}>50,000+</span> families
          </span>
        </div>
      </div>

      {/* ══ RIGHT: Floating event cards ══ */}
      <div className="hero-right" style={{
        flex: "1 1 400px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "stretch",
        paddingLeft: 16,
      }}>
        {/* Ambient glow behind cards */}
        <div style={{
          position: "absolute",
          top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "90%", height: "60%",
          background: "radial-gradient(ellipse, rgba(13,148,136,0.12) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
        }} />

        {/* Card 1 */}
        <div className="animate-float-1" style={{ position: "relative", zIndex: 1 }}>
          <EventCard event={PREVIEW_EVENTS[0]} style={{ transform: "translateX(0px)" }} />
        </div>

        {/* Card 2 — offset right */}
        <div className="animate-float-2" style={{ position: "relative", zIndex: 1, alignSelf: "flex-end", width: "90%" }}>
          <EventCard event={PREVIEW_EVENTS[1]} />
        </div>

        {/* Card 3 */}
        <div className="animate-float-3" style={{ position: "relative", zIndex: 1, width: "95%" }}>
          <EventCard event={PREVIEW_EVENTS[2]} />
        </div>

        {/* Notification toast */}
        <div className="animate-float-1" style={{
          position: "absolute", top: -24, right: -16,
          background: "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(9,16,35,0.99) 100%)",
          border: "1px solid rgba(94,234,212,0.15)",
          borderRadius: 14, padding: "10px 14px",
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          zIndex: 3,
          backdropFilter: "blur(20px)",
          maxWidth: 220,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            background: "rgba(13,148,136,0.15)",
            border: "1px solid rgba(13,148,136,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>🔔</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-text)", marginBottom: 2 }}>
              Event starting soon!
            </div>
            <div style={{ fontSize: 10, color: "var(--color-text-muted)" }}>
              Tyler's game in 30 min
            </div>
          </div>
        </div>

        {/* Support badge */}
        <div style={{
          position: "absolute", bottom: -20, left: -16,
          background: "linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(15,23,42,0.97) 100%)",
          border: "1px solid rgba(13,148,136,0.2)",
          borderRadius: 14, padding: "10px 16px",
          display: "flex", alignItems: "center", gap: 8,
          boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          zIndex: 3,
          backdropFilter: "blur(20px)",
        }}>
          <div style={{ display: "flex", marginRight: 2 }}>
            {["A", "B", "C"].map((l, i) => (
              <div key={i} style={{
                width: 22, height: 22, borderRadius: "50%",
                background: AVATAR_COLORS[i],
                border: "2px solid rgba(2,6,23,0.9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 7.5, fontWeight: 800, color: "#020617",
                marginLeft: i === 0 ? 0 : -6, position: "relative", zIndex: 3 - i,
              }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent-light)" }}>
              3 people are going!
            </div>
            <div style={{ fontSize: 10, color: "var(--color-text-muted)" }}>Emma's recital</div>
          </div>
        </div>
      </div>

    </div>
  </section>
);
