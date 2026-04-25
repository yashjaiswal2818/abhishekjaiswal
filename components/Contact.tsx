"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Handshake SVG (green stroke) ─── */
function HandshakeIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#6aa931"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Left hand */}
      <path d="M4 36l8-8 6 2 8-6h8l6 6" />
      {/* Right hand */}
      <path d="M60 28l-8-8-6 2-8-6h-8l-6 6" />
      {/* Clasped hands */}
      <path d="M20 34l4 4 4-2 4 4 4-2 4 4" />
      <path d="M16 38l6 6 4-2 4 4 4-2 4 4 4-4" />
      <path d="M12 34l2 6" />
      <path d="M52 34l-2 6" />
      {/* Cuffs */}
      <path d="M4 36C2 40 2 44 6 46l6-4" />
      <path d="M60 28c2 4 2 8-2 10l-6-4" />
    </svg>
  );
}

/* ─── Copy button with checkmark feedback ─── */
function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator.clipboard?.writeText === "function") {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${value}`}
      className="relative inline-flex h-[1em] w-[1em] items-center justify-center text-[1.2em] text-[#747772] transition-colors duration-200 hover:text-moss"
    >
      {copied ? (
        <Check className="h-[1em] w-[1em] text-moss" />
      ) : (
        <Copy className="h-[1em] w-[1em]" />
      )}
    </button>
  );
}

/* ─── Single contact row ─── */
function ContactRow({
  icon,
  value,
  displayValue,
  copyValue,
  actions,
}: {
  icon: React.ReactNode;
  value: string;
  displayValue?: string;
  copyValue: string;
  actions: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-[16px] border border-white/45 bg-[#ece3d2]/65 px-6 py-5 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      {/* Icon + value + copy */}
      <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
        <span className="h-6 w-6 text-moss">{icon}</span>
        <span>{displayValue ?? value}</span>
        <CopyBtn value={copyValue} />
      </div>
      {/* Action buttons */}
      <div className="relative z-10 flex items-center gap-3">{actions}</div>
    </div>
  );
}

/* ─── Pill action button ─── */
function ActionBtn({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2.5 text-base font-medium leading-none text-ink transition-colors duration-200 hover:border-moss hover:text-moss",
        className
      )}
    >
      {children}
    </a>
  );
}

/* ─── Contact section ─── */
export default function Contact() {
  return (
    <section id="contact" className="pb-10 pt-4 sm:pb-14">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-20">

          {/* ── Left: icon + heading + book call ── */}
          <div className="flex flex-col items-start gap-7">
            <HandshakeIcon />

            <h2 className="font-serif text-[2.5rem] font-normal leading-[1.25] text-ink max-w-[26rem]">
              Let&apos;s build something meaningful together.
            </h2>

            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ecebe8] px-5 py-3 text-[1.125rem] font-medium leading-none text-ink transition-colors duration-200 hover:bg-[#e0ddd8]"
            >
              Book a call
            </a>
          </div>

          {/* ── Right: contact rows ── */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <ContactRow
              icon={<Mail className="h-6 w-6" />}
              value="abhishek.jaiswal@rutgers.edu"
              copyValue="abhishek.jaiswal@rutgers.edu"
              actions={
                <ActionBtn href="mailto:abhishek.jaiswal@rutgers.edu">
                  Send a mail
                </ActionBtn>
              }
            />

            {/* LinkedIn */}
            <ContactRow
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4"/>
                  <path d="M7 10v7M7 7v.5"/>
                  <path d="M11 17v-4c0-1.66 1.34-3 3-3s3 1.34 3 3v4"/>
                  <path d="M11 10v7"/>
                </svg>
              }
              value="linkedin.com/in/iamabhishekjaiswal"
              displayValue="LinkedIn"
              copyValue="https://linkedin.com/in/iamabhishekjaiswal"
              actions={
                <ActionBtn href="https://linkedin.com/in/iamabhishekjaiswal">
                  Let&apos;s Connect
                </ActionBtn>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
