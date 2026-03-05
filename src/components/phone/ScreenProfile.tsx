import React from "react";

const PROFILE_STATS = [
  ["Events Attended", "24"],
  ["Connections", "148"],
  ["Badge Level", "Gold"],
];

export const ScreenProfile: React.FC = () => (
  <div style={{ padding: "36px 16px 16px", textAlign: "center", fontFamily: "var(--font-body)" }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #0d9488, #5eead4)",
        margin: "0 auto 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
      }}
    >
      👤
    </div>
    <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>Alex Rivera</div>
    <div style={{ color: "#5eead4", fontSize: 11, marginBottom: 12 }}>Verified Member</div>
    {PROFILE_STATS.map(([k, v], i) => (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0",
          borderBottom: "1px solid #1e293b",
          fontSize: 12,
          color: "#94a3b8",
        }}
      >
        <span>{k}</span>
        <span style={{ color: "#e2e8f0", fontWeight: 600 }}>{v}</span>
      </div>
    ))}
  </div>
);
