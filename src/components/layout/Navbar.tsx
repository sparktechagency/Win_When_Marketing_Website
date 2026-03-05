import React, { useState, useEffect } from "react";
import { NAV_LINKS, SITE_NAME } from "../../data/constants";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveLink(link);
          return;
        }
      }
      setActiveLink("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-light), var(--color-accent-lighter))",
          zIndex: 200,
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px var(--color-accent-light)",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "10px 32px" : "20px 32px",
          background: scrolled ? "rgba(2, 6, 23, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(94,234,212,0.08)"
            : "1px solid transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.35s ease, background 0.35s ease, border-color 0.35s ease",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "#020617",
              boxShadow: "0 0 24px rgba(13,148,136,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
              position: "relative",
              flexShrink: 0,
              letterSpacing: "-0.5px",
            }}
          >
            W
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 12,
                background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #e2e8f0 30%, var(--color-accent-light) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.3px",
            }}
          >
            {SITE_NAME}
          </span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "var(--color-accent-light)",
              background: "rgba(94,234,212,0.08)",
              border: "1px solid rgba(94,234,212,0.22)",
              borderRadius: 6,
              padding: "2px 6px",
              letterSpacing: "1px",
              marginTop: 1,
            }}
          >
            BETA
          </span>
        </a>

        {/* ── Desktop Nav — Pill centered ── */}
        <div
          className="hidden md:flex"
          style={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(15,23,42,0.5)",
            border: "1px solid rgba(94,234,212,0.08)",
            borderRadius: 100,
            padding: "5px",
            backdropFilter: "blur(12px)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link;
            const isHovered = hoveredLink === link;
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: "relative",
                  color: isActive
                    ? "var(--color-accent-light)"
                    : isHovered
                    ? "var(--color-text)"
                    : "var(--color-text-secondary)",
                  fontSize: 13.5,
                  fontWeight: isActive ? 600 : 500,
                  padding: "7px 18px",
                  borderRadius: 100,
                  transition: "color 0.2s, background 0.2s",
                  background: isActive
                    ? "rgba(94,234,212,0.1)"
                    : isHovered
                    ? "rgba(255,255,255,0.05)"
                    : "transparent",
                  letterSpacing: "0.01em",
                }}
              >
                {link}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 5,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      background: "var(--color-accent-light)",
                      boxShadow: "0 0 6px var(--color-accent-light)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* ── Desktop Right: Sign in + CTA ── */}
        <div
          className="hidden md:flex"
          style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}
        >
          <a
            href="#download"
            className="btn-glow"
            style={{
              padding: "9px 22px",
              borderRadius: 100,
              background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-mid) 100%)",
              color: "#020617",
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: "0.01em",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 0 1px rgba(94,234,212,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(13,148,136,0.5), 0 0 0 1px rgba(94,234,212,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 1px rgba(94,234,212,0.2)";
            }}
          >
            Get the App
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{
            background: menuOpen ? "rgba(94,234,212,0.1)" : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(94,234,212,0.15)",
            borderRadius: 10,
            width: 42,
            height: 42,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s",
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? (menuOpen ? 18 : 13) : 18,
                height: 1.5,
                borderRadius: 2,
                background: menuOpen
                  ? "var(--color-accent-light)"
                  : "var(--color-text-secondary)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: menuOpen
                  ? i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile Menu (full-screen slide) ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(2,6,23,0.98)",
          backdropFilter: "blur(24px)",
          zIndex: 98,
          display: "flex",
          flexDirection: "column",
          padding: "100px 32px 48px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          overflowY: "auto",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: 120,
            right: -60,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: activeLink === link ? "var(--color-accent-light)" : "var(--color-text)",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(94,234,212,0.06)",
                letterSpacing: "-0.5px",
                transition: "color 0.2s, opacity 0.4s, transform 0.4s",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                transitionDelay: menuOpen ? `${i * 55 + 80}ms` : "0ms",
              }}
            >
              {link}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 40,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s 0.32s, transform 0.4s 0.32s",
          }}
        >
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="btn-glow"
            style={{
              textAlign: "center",
              padding: "17px 24px",
              borderRadius: 16,
              background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-mid) 100%)",
              color: "#020617",
              fontWeight: 700,
              fontSize: 16,
              boxShadow: "0 8px 32px rgba(13,148,136,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            Get the App — Free
          </a>
        </div>
      </div>
    </>
  );
};
