import { useEffect, useRef, useState } from "react";

export const AnimatedCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [data-cursor-hover]")
      ) {
        setHovering(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [data-cursor-hover]")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 10 : clicking ? 6 : 8,
          height: hovering ? 10 : clicking ? 6 : 8,
          borderRadius: "50%",
          background: hovering
            ? "var(--color-accent-light)"
            : "var(--color-accent-light)",
          pointerEvents: "none",
          zIndex: 99999,
          marginLeft: hovering ? -5 : clicking ? -3 : -4,
          marginTop: hovering ? -5 : clicking ? -3 : -4,
          transition: "width 0.2s, height 0.2s, margin 0.2s, opacity 0.2s",
          mixBlendMode: "difference",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 48 : clicking ? 28 : 36,
          height: hovering ? 48 : clicking ? 28 : 36,
          borderRadius: "50%",
          border: `1.5px solid var(--color-accent-light)`,
          opacity: hovering ? 1 : 0.55,
          pointerEvents: "none",
          zIndex: 99998,
          marginLeft: hovering ? -24 : clicking ? -14 : -18,
          marginTop: hovering ? -24 : clicking ? -14 : -18,
          transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), margin 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, opacity 0.3s, box-shadow 0.3s",
          background: hovering ? "rgba(94,234,212,0.08)" : "transparent",
          boxShadow: hovering ? "0 0 16px rgba(94,234,212,0.2)" : "none",
        }}
      />
    </>
  );
};
