/* ─── Impact Numbers Section — auto-scrolling ticker ─── */

function USAALogo() {
  return (
    <svg height="20" viewBox="0 0 80 20" fill="none" aria-label="USAA via TCS">
      <rect x="0" y="0" width="28" height="20" rx="3" fill="#003087" />
      <text x="14" y="14" textAnchor="middle" fontFamily="var(--font-inter),sans-serif" fontWeight="800" fontSize="8" fill="white" letterSpacing="0.3">
        USAA
      </text>
      <text x="34" y="14" fontFamily="var(--font-inter),sans-serif" fontWeight="600" fontSize="11" fill="#003087">
        via TCS
      </text>
    </svg>
  );
}

/* ─── Card data ─── */
const CARDS = [
  {
    metric: "98% Automation",
    subtitle: "on financial data validation cycles",
    logo: <USAALogo />,
  },
  {
    metric: "90% Error Reduction",
    subtitle: "via AI-driven validation framework",
    logo: <USAALogo />,
  },
  {
    metric: "500+ Daily Users",
    subtitle: "across shipped analytics products",
    logo: <USAALogo />,
  },
  {
    metric: "40% Faster ETL",
    subtitle: "through Python automation pipelines",
    logo: <USAALogo />,
  },
];

/* ─── Single card ─── */
function ImpactCard({
  metric,
  subtitle,
  logo,
}: {
  metric: string;
  subtitle: string;
  logo: React.ReactNode;
}) {
  return (
    <div className="flex h-[162px] w-[265px] shrink-0 flex-col justify-between rounded-[24px] border border-[#ece3d2] bg-[#ece3d2]/65 px-8 py-7 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
      <div className="flex flex-col gap-1">
        <p className="text-[20px] font-semibold leading-[30px] text-ink">{metric}</p>
        <p className="text-base leading-6 text-copy">{subtitle}</p>
      </div>
      <div className="flex h-6 w-20 items-center justify-start overflow-hidden">
        {logo}
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function ImpactNumbers() {
  const allCards = [...CARDS, ...CARDS, ...CARDS];

  return (
    <section className="pb-[52px] pt-2 sm:pb-[72px] sm:pt-3">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="flex flex-col gap-7">
          <h2 className="font-serif text-[40px] font-normal leading-[52px] text-ink">
            Impact in Numbers
          </h2>

          {/* Fade-edge ticker wrapper */}
          <div
            className="ticker-wrap -mx-6 overflow-hidden sm:-mx-10"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              className="flex min-w-max items-center gap-5 px-6 py-4 sm:px-10"
              style={{
                animation: "ticker-left 28s linear infinite",
                animationName: "ticker-left-third",
              }}
            >
              {allCards.map((card, i) => (
                <ImpactCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-left-third {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
