import React from "react";

const MESSAGES = [
  "Hey! Anyone going to the meetup?",
  "Count me in! 🙌",
  "Same here, see you all there!",
  "Awesome, let's plan the details",
];

export const ScreenChat: React.FC = () => (
  <div style={{ padding: "36px 16px 16px", height: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "#5eead4", fontSize: 14, marginBottom: 4 }}>
      Group Chat
    </div>
    {MESSAGES.map((msg, i) => (
      <div
        key={i}
        style={{
          alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
          background: i % 2 === 0 ? "#1e293b" : "linear-gradient(135deg, #0d9488, #14b8a6)",
          color: "#e2e8f0",
          padding: "8px 14px",
          borderRadius: 16,
          fontSize: 12,
          fontFamily: "var(--font-body)",
          maxWidth: "80%",
        }}
      >
        {msg}
      </div>
    ))}
    <div
      style={{
        marginTop: "auto",
        background: "#1e293b",
        borderRadius: 20,
        padding: "8px 14px",
        fontSize: 11,
        color: "#64748b",
        fontFamily: "var(--font-body)",
      }}
    >
      Type a message...
    </div>
  </div>
);
