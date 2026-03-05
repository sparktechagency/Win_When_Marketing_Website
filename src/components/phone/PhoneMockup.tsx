import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "" }) => {
  return (
    <div
      className={className}
      style={{
        width: 260,
        height: 520,
        borderRadius: 36,
        border: "6px solid #1e293b",
        background: "#0f172a",
        boxShadow: "0 40px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(94,234,212,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 100,
          height: 24,
          background: "#1e293b",
          borderRadius: "0 0 16px 16px",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
};
