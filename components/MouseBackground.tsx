"use client";

import { useEffect, useRef } from "react";

export default function MouseBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--pointer-x", `${e.clientX}px`);
      el.style.setProperty("--pointer-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={
        {
          "--pointer-x": "50vw",
          "--pointer-y": "30vh",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(360px circle at var(--pointer-x) var(--pointer-y), rgba(90,143,34,0.08), transparent 70%)",
        }}
      />
    </div>
  );
}
