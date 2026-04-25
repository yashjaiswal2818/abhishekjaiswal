"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex h-[30px] w-[30px] items-center justify-center" aria-label="Home">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Geometric K logo */}
        <rect width="30" height="30" rx="4" fill="#30333b" />
        <path
          d="M8 7h4v6.5l5-6.5h5l-6 7.5 6.5 8.5h-5.2L12 15.5V23H8V7z"
          fill="#fff8ec"
        />
      </svg>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] py-4 transition-[padding,background-color,box-shadow,backdrop-filter] duration-300 md:py-5",
        scrolled &&
          "bg-canvas/80 py-3 shadow-[0_2px_20px_rgba(33,35,41,0.06)] backdrop-blur-md md:py-3"
      )}
    >
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div
          className={cn(
            "flex flex-col gap-5 transition-all duration-300 ease-out md:flex-row md:items-center md:justify-between",
            scrolled && "gap-3"
          )}
        >
          {/* Logo + mobile nav row */}
          <div className="flex items-center justify-between gap-4 md:justify-start md:gap-8">
            <Logo />

            {/* Mobile nav links (horizontal scroll) */}
            <nav className="overflow-x-auto md:hidden scrollbar-hide">
              <ul className="flex min-w-max items-center gap-6 text-base text-ink sm:gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200 hover:text-moss"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-moss hover:text-moss"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop: center nav + right CTAs */}
          <nav className="hidden md:block">
            <ul className="flex min-w-max items-center gap-10 text-base text-ink">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-moss"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-moss hover:text-moss"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full bg-moss px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-moss-dark"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
