import React, { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "../../hooks";
import type { Stat } from "../../types";

// Parse "50K+" → { num: 50, suffix: "K+" }
function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export const AnimatedStat: React.FC<Stat & { delay?: number }> = ({ value, label, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver(0.4);
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  const { num, suffix } = parseValue(value);
  const isDecimal = num % 1 !== 0;

  useEffect(() => {
    if (!isVisible || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 1800;
    const startTime = performance.now() + delay;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(eased * num);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible, num, delay]);

  const displayNum = isDecimal
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        textAlign: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease`,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
          fontWeight: 800,
          lineHeight: 1,
          background: "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent-lighter) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-1px",
          marginBottom: 8,
        }}
      >
        {displayNum}{suffix}
      </div>
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "0.88rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
    </div>
  );
};
