"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/* ─── Scroll to top button (fixed, appears after 400px scroll) ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas shadow-[0_4px_20px_rgba(33,35,41,0.25)] transition-[transform,opacity] duration-200 hover:scale-[1.03] hover:opacity-90"
    >
      <ArrowUp className="h-4 w-4" />
      Scroll to Top
    </button>
  );
}

/* ─── Figma icon ─── */
function FigmaIcon() {
  return (
    <svg width="38" height="56" viewBox="0 0 38 56" fill="none" aria-label="Figma">
      <rect x="0" y="0" width="38" height="56" rx="4" fill="#1e1e1e" />
      <circle cx="19" cy="28" r="8" fill="#1abcfe" />
      <path d="M11 20h8a8 8 0 0 0 0-16H11v16z" fill="#f24e1e" />
      <path d="M11 36V20h8a8 8 0 0 1 0 16H11z" fill="#ff7262" />
      <path d="M11 52v-16h8a8 8 0 0 1 0 16H11z" fill="#0acf83" />
    </svg>
  );
}

/* ─── Codex icon (OpenAI Codex approximation) ─── */
function CodexIcon() {
  return (
    <svg width="38" height="56" viewBox="0 0 38 56" fill="none" aria-label="Codex">
      <rect x="0" y="0" width="38" height="56" rx="4" fill="#10a37f" />
      <text
        x="19"
        y="36"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="26"
        fontWeight="700"
        fill="white"
      >
        
      </text>
    </svg>
  );
}

/* ─── Footer ─── */
export default function Footer() {
  return (
    <>
      <footer className="overflow-hidden py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1140px] overflow-visible px-6 sm:px-10">
          <div className="flex flex-col gap-10 px-0 sm:px-6 lg:grid lg:grid-cols-[max-content_minmax(0,1fr)] lg:items-end lg:gap-[100px]">

            {/* Left: collaborator icons + credit text */}
            <div className="max-w-[32rem]">
              <div className="flex gap-4">
                <FigmaIcon />
                <CodexIcon />
              </div>
              <p className="mt-8 whitespace-nowrap text-[0.875rem] leading-[1.3] text-ink sm:text-[1rem]">
                Portfolio built with intention.
              </p>
              <p className="mt-2 whitespace-nowrap font-serif text-[1.6rem] leading-none text-ink sm:text-[2.5rem]">
                Designed for AI PM &amp; Product Strategy roles.
              </p>
            </div>

            {/* Right: decorative wordmark */}
            <div className="flex overflow-visible lg:min-w-0 lg:items-end lg:justify-end">
              <span
                className="font-serif font-normal leading-none text-ink/10 select-none"
                style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
              >
                portfolio
              </span>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
