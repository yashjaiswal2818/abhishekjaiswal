import { Suspense } from "react";
import Image from "next/image";
import TypewriterText from "./TypewriterText";
import PostageStamp from "./PostageStamp";

/* ─── USAA logo ─── */
function USAALogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <span className="relative h-8 w-8 overflow-hidden rounded-[4px]">
        <Image
          src="/assets/usaa-logo.png"
          alt="USAA"
          fill
          sizes="32px"
          className="object-cover"
        />
      </span>
      <span className="font-sans text-[15px] font-bold tracking-[-0.3px] text-[#003087]">
        USAA
      </span>
    </div>
  );
}

/* ─── TCS logo ─── */
function TCSLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <span className="relative h-8 w-8 overflow-hidden rounded-[4px] bg-white">
        <Image
          src="/assets/tcs-logo-v3.png"
          alt="TCS"
          fill
          sizes="32px"
          className="object-contain"
        />
      </span>
      <span className="font-sans text-[13px] font-semibold tracking-[-0.2px] text-[#0063BF]">
        Tata Consultancy
      </span>
    </div>
  );
}

/* ─── Airfind logo ─── */
function AirfindLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <span className="relative h-8 w-8 overflow-hidden rounded-[4px] bg-white">
        <Image
          src="/assets/airfind-logo.png"
          alt="Airfind"
          fill
          sizes="32px"
          className="object-contain"
        />
      </span>
      <span className="font-sans text-[14px] font-bold tracking-[-0.2px] text-[#d6a31a]">
        Airfind
      </span>
    </div>
  );
}

/* ─── Media.net logo ─── */
function MediaNetLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <span className="relative h-8 w-8 overflow-hidden rounded-[4px] bg-white">
        <Image
          src="/assets/media-net-logo.png"
          alt="Media.net"
          fill
          sizes="32px"
          className="object-contain"
        />
      </span>
      <span className="font-sans text-[14px] font-bold tracking-[-0.2px] text-[#111111]">
        Media.net
      </span>
    </div>
  );
}

/* ─── Status pill ─── */
function StatusPill() {
  return (
    <div className="animate-status-pill inline-flex items-center gap-2 self-start rounded-full bg-[#eaf2dc] px-4 pb-2 pt-[10px]">
      <span className="text-[13px] font-medium uppercase leading-none tracking-wide text-moss">
        Open to Work
      </span>
      <span className="h-3 w-px bg-moss/30" />
      <span className="text-[13px] font-medium uppercase leading-none tracking-wide text-moss">
        AI PM &amp; Product Strategy
      </span>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section
      id="home"
      className="pb-10 pt-9 sm:pb-16 sm:pt-[3.75rem] lg:pt-[6.25rem]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        {/* Two-column hero grid */}
        <div className="grid gap-12 px-0 sm:px-6 lg:grid-cols-[minmax(0,623px)_20rem] lg:items-start lg:justify-between lg:gap-[5.8125rem]">

          {/* ── Left column ── */}
          <div className="flex max-w-[623px] flex-col gap-11">
            <div className="flex flex-col gap-7">

              <StatusPill />

              {/* Heading + typewriter */}
              <div className="font-sans text-[2.875rem] font-semibold leading-[60px] text-ink max-w-[606px]">
                I Build AI Products That Actually Ship
                <br />
                <Suspense
                  fallback={
                    <span className="font-serif text-[50px] font-normal italic leading-[60px] text-moss-dark">
                      AI Product Manager
                    </span>
                  }
                >
                  <TypewriterText />
                </Suspense>
              </div>

              {/* Description */}
              <p className="max-w-[503px] text-[1.125rem] leading-[30px] text-copy">
                Senior Analyst and AI builder with 5+ years delivering data and
                AI products for one of the largest financial institutions in the
                US. I sit at the intersection of AI prototyping and business
                impact — equally comfortable architecting multi-agent systems in
                Python and presenting product strategy to C-suite stakeholders.
              </p>
            </div>

            {/* Brand logos */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <USAALogo />
              <TCSLogo />
              <AirfindLogo />
              <MediaNetLogo />
            </div>
          </div>

          {/* ── Right column: Postage Stamp ── */}
          <div className="flex justify-center lg:justify-end">
            <PostageStamp />
          </div>
        </div>

        {/* ── Value Props card (below grid) ── */}
        <ValueProps />
      </div>
    </section>
  );
}

/* ─── Value props icons ─── */
function IconBridge() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#6aa931" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 36h40" />
      <path d="M4 36 Q12 20 24 20 Q36 20 44 36" />
      <path d="M12 36V28M24 36V22M36 36V28" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#6aa931" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6C24 6 36 10 36 26l-12 10L12 26C12 10 24 6 24 6z" />
      <circle cx="24" cy="22" r="4" />
      <path d="M12 26l-6 8 8-2" />
      <path d="M36 26l6 8-8-2" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#6aa931" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="12" rx="14" ry="5" />
      <path d="M10 12v12c0 2.76 6.27 5 14 5s14-2.24 14-5V12" />
      <path d="M10 24v12c0 2.76 6.27 5 14 5s14-2.24 14-5V24" />
    </svg>
  );
}

const VALUE_PROPS = [
  {
    icon: <IconBridge />,
    title: "Technical Translator",
    body: "I bridge the gap between AI engineering and business impact — prototyping LLM workflows in Python in the morning and presenting the product case to stakeholders in the afternoon.",
  },
  {
    icon: <IconRocket />,
    title: "Shipped in Production",
    body: "My AI work isn't theoretical. I designed and delivered a Copilot-based multi-agent validation system deployed in production at USAA — 4 agents, an orchestrator, and 98% automation.",
  },
  {
    icon: <IconDatabase />,
    title: "Financial Domain Depth",
    body: "5+ years inside one of the most data-intensive financial institutions in the US. I understand compliance-adjacent AI, financial KPIs, and the real cost of bad data.",
  },
];

function ValueProps() {
  return (
    <div className="mt-[7.5rem] rounded-[20px] bg-[#fffcf6] px-7 py-10 shadow-[0_18px_50px_rgba(33,35,41,0.04)] sm:px-16 sm:py-12">
      <div className="flex flex-wrap items-start gap-x-10 gap-y-[3.5rem]">
        {VALUE_PROPS.map((item) => (
          <div key={item.title} className="w-[272px] shrink-0">
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-serif text-[24px] font-normal leading-none text-ink">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-[30px] text-copy">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
