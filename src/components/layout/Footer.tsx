import React from "react";
import { SITE_NAME, FOOTER_COLUMNS } from "../../data/constants";

export const Footer: React.FC = () => (
  <footer style={{ padding: "48px 24px 32px", borderTop: "1px solid var(--color-border)" }}>
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 32,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              color: "var(--color-bg)",
            }}
          >
            W
          </div>
          <span className="text-gradient" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {SITE_NAME}
          </span>
        </div>
        <p style={{ color: "var(--color-text-faint)", fontSize: 13, maxWidth: 280, lineHeight: 1.6 }}>
          Building authentic communities through meaningful connections and real-world events.
        </p>
      </div>

      {FOOTER_COLUMNS.map((col) => (
        <div key={col.title}>
          <h4 style={{ fontWeight: 600, fontSize: 14, marginBottom: 14, color: "var(--color-text)" }}>{col.title}</h4>
          {col.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                display: "block",
                color: "var(--color-text-faint)",
                fontSize: 13,
                marginBottom: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
            >
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>

    <div
      style={{
        maxWidth: 1100,
        margin: "32px auto 0",
        paddingTop: 24,
        borderTop: "1px solid rgba(94,234,212,0.04)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        fontSize: 12,
        color: "var(--color-text-dark)",
      }}
    >
      <span>© 2026 {SITE_NAME}. All rights reserved.</span>
      <span>Made with 💚 for communities everywhere</span>
    </div>
  </footer>
);
