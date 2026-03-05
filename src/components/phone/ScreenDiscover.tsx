import React from "react";

const PEOPLE = [
  { name: "Jamie L.", mutual: 3 },
  { name: "Nora C.", mutual: 5 },
  { name: "Daniel W.", mutual: 2 },
  { name: "Mia S.", mutual: 7 },
];

export const ScreenDiscover: React.FC = () => (
  <div style={{ padding: "36px 16px 16px", fontFamily: "var(--font-body)" }}>
    <div style={{ fontWeight: 700, color: "#5eead4", fontSize: 14, marginBottom: 12 }}>
      People You May Know
    </div>
    {PEOPLE.map((person, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 0",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: `hsl(${170 + i * 15}, 60%, ${35 + i * 5}%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {person.name[0]}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{person.name}</div>
          <div style={{ color: "#64748b", fontSize: 10 }}>{person.mutual} mutual connections</div>
        </div>
        <div
          style={{
            padding: "4px 12px",
            borderRadius: 12,
            border: "1px solid #0d9488",
            color: "#5eead4",
            fontSize: 10,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Connect
        </div>
      </div>
    ))}
  </div>
);
