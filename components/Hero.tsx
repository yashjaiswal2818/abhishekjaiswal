import { Suspense } from "react";
import TypewriterText from "./TypewriterText";
import PostageStamp from "./PostageStamp";

/* ─── USAA logo ─── */
function USAALogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <svg height="32" viewBox="0 0 100 32" fill="none" aria-label="USAA">
        <rect x="0" y="0" width="32" height="32" rx="4" fill="#003087" />
        <text x="16" y="22" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="800" fontSize="10" fill="white" letterSpacing="0.5">
          USAA
        </text>
        <text x="44" y="22" fontFamily="var(--font-inter), sans-serif" fontWeight="700" fontSize="15" fill="#003087" letterSpacing="-0.3">
          USAA
        </text>
      </svg>
    </div>
  );
}

/* ─── TCS logo ─── */
function TCSLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <svg height="32" viewBox="0 0 90 32" fill="none" aria-label="TCS">
        <rect x="0" y="0" width="32" height="32" rx="4" fill="#0063BF" />
        <text x="16" y="22" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="800" fontSize="12" fill="white" letterSpacing="0.5">
          TCS
        </text>
        <text x="42" y="22" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="13" fill="#0063BF" letterSpacing="-0.2">
          Tata Consultancy
        </text>
      </svg>
    </div>
  );
}

/* ─── Airfind logo ─── */
function AirfindLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <svg height="28" viewBox="0 0 88 28" fill="none" aria-label="Airfind">
        <circle cx="14" cy="14" r="14" fill="#00AEEF" />
        <path d="M8 14 Q14 6 20 14 Q14 22 8 14z" fill="white" />
        <text x="32" y="19" fontFamily="var(--font-inter), sans-serif" fontWeight="700" fontSize="14" fill="#00AEEF" letterSpacing="-0.2">
          Airfind
        </text>
      </svg>
    </div>
  );
}

/* ─── Media.net logo ─── */
function MediaNetLogo() {
  return (
    <div className="flex h-12 items-center gap-2">
      <svg height="28" viewBox="0 0 96 28" fill="none" aria-label="Media.net">
        <rect x="0" y="4" width="20" height="20" rx="3" fill="#E85D04" />
        <text x="10" y="18" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="800" fontSize="10" fill="white">
          m
        </text>
        <text x="26" y="19" fontFamily="var(--font-inter), sans-serif" fontWeight="700" fontSize="14" fill="#E85D04" letterSpacing="-0.2">
          Media.net
        </text>
      </svg>
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
