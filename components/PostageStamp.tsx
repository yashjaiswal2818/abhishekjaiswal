"use client";

import Image from "next/image";
import { useState } from "react";

/* ─── Circular spinning text badge ─── */
function CircularBadge() {
  const text = "★ 5+ YEARS DELIVERING DATA & AI PRODUCTS ★ ";
  const radius = 56;

  return (
    <div className="absolute -bottom-3 -left-2.5 h-40 w-40 -rotate-[7deg] sm:-bottom-5">
      <div className="relative h-full w-full">
        {/* Spinning text ring */}
        <svg
          viewBox="0 0 160 160"
          className="animate-badge-spin absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <path
              id="badge-circle"
              d={`M 80,80 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
              fill="none"
            />
          </defs>
          <text
            fontSize="9.5"
            fontFamily="var(--font-inter), sans-serif"
            fill="#30333b"
            letterSpacing="1.5"
            fontWeight="500"
          >
            <textPath href="#badge-circle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>

        {/* Badge background circle */}
        <div className="absolute inset-[14px] rounded-full border-2 border-[#c8d4a0] bg-[#e8f0d4] shadow-[0_4px_16px_rgba(106,169,49,0.2)]" />

        {/* Center number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-[2rem] font-normal leading-none text-ink">
            5+
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── AWS Certified badge ─── */
function AWSBadge() {
  return (
    <div className="absolute bottom-[26px] right-[13px] flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 shadow-[0_4px_16px_rgba(33,35,41,0.12)]">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden>
        <path d="M3 9c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" fill="#FF9900" />
        <text x="11" y="13" textAnchor="middle" fontFamily="monospace" fontSize="7" fontWeight="700" fill="white">AWS</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[11px] font-semibold text-[#FF9900]">AWS</span>
        <span className="text-[10px] font-medium text-ink">AI Practitioner</span>
      </div>
    </div>
  );
}

/* Portrait — add your photo to /public/assets/hero-portrait.jpg to show it */
const PORTRAIT_SRC = "/assets/hero-portrait.jpg";
const HAS_PORTRAIT = true;

function Portrait() {
  const [imgError, setImgError] = useState(false);

  if (!HAS_PORTRAIT || imgError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#b0bea0] via-[#8a9880] to-[#6a7860]" />
    );
  }

  return (
    <Image
      src={PORTRAIT_SRC}
      alt="Portrait"
      fill
      className="object-cover object-top"
      onError={() => setImgError(true)}
      priority
    />
  );
}

/* ─── Postage Stamp ─── */
export default function PostageStamp() {
  return (
    <div className="relative mx-auto h-[393px] w-full max-w-[320px] shrink-0 lg:mx-0">
      {/* Stamp card — perforated border via radial-gradient */}
      <div className="absolute right-0 top-0 h-[310px] w-[260px]">
        <div
          className="relative h-full w-full bg-white"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #fff8ec 7px, white 7px),
              radial-gradient(circle at center, #fff8ec 7px, white 7px),
              radial-gradient(circle at center, #fff8ec 7px, white 7px),
              radial-gradient(circle at center, #fff8ec 7px, white 7px)
            `,
            backgroundSize: "14px 14px, 14px 14px, 14px 14px, 14px 14px",
            backgroundPosition:
              "0 -7px, 0 calc(100% + 7px), -7px 0, calc(100% + 7px) 0",
            backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
            boxShadow:
              "0 8px 40px rgba(33, 35, 41, 0.18), 0 2px 8px rgba(33, 35, 41, 0.08)",
          }}
        >
          {/* Portrait area */}
          <div className="absolute inset-[14px] overflow-hidden bg-[#c8d0b8]">
            <Portrait />
          </div>

          {/* A letter — top right corner */}
          <span className="absolute right-4 top-2 z-10 font-serif text-2xl font-normal text-ink">
            A
          </span>

          {/* AWS Certified badge */}
          <AWSBadge />
        </div>
      </div>

      {/* 14+ circular spinning badge */}
      <CircularBadge />
    </div>
  );
}
