import Image from "next/image";

/* ─── About Section ─── */

/* ── Tool icons (colored pill + name) ── */
function ToolIcon({
  name,
  color,
  initial,
  logoSrc,
}: {
  name: string;
  color: string;
  initial: string;
  logoSrc?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg text-[11px] font-bold text-white"
        style={{ background: logoSrc ? "#ffffff" : color }}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={name}
            width={32}
            height={32}
            className="h-full w-full object-contain"
          />
        ) : (
          initial
        )}
      </span>
      <span className="text-base leading-none text-ink">{name}</span>
    </span>
  );
}

const TOOLS = [
  { name: "Python", color: "#3776ab", initial: "Py", logoSrc: "/assets/python-logo.png" },
  { name: "SQL", color: "#336791", initial: "Sq", logoSrc: "/assets/sql-logo.png" },
  { name: "Snowflake", color: "#29b5e8", initial: "Sf", logoSrc: "/assets/snowflake-logo.png" },
  { name: "Claude API", color: "#d97757", initial: "Cl", logoSrc: "/assets/claude-api-logo.png" },
  { name: "LangChain", color: "#1c3c3c", initial: "Lc", logoSrc: "/assets/langchain-logo.png" },
  { name: "AWS", color: "#FF9900", initial: "AW", logoSrc: "/assets/aws-logo.png" },
  { name: "Tableau", color: "#E97627", initial: "Tb", logoSrc: "/assets/tableau-logo.png" },
  { name: "Power BI", color: "#F2C811", initial: "PB", logoSrc: "/assets/power-bi-logo.png" },
  { name: "dbt", color: "#FF694A", initial: "db", logoSrc: "/assets/dbt-logo.png" },
  { name: "Airflow", color: "#017CEE", initial: "Af", logoSrc: "/assets/airflow-logo.png" },
  { name: "Docker", color: "#2496ED", initial: "Dk", logoSrc: "/assets/docker-logo.png" },
  { name: "Streamlit", color: "#FF4B4B", initial: "St", logoSrc: "/assets/streamlit-logo.png" },
  { name: "JIRA", color: "#0052CC", initial: "Ji", logoSrc: "/assets/jira-logo.png" },
  { name: "GitHub", color: "#24292f", initial: "Gh", logoSrc: "/assets/github-logo.png" },
  { name: "Azure ML", color: "#0078D4", initial: "Az", logoSrc: "/assets/azure-ml-logo.png" },
  { name: "BigQuery", color: "#4285F4", initial: "BQ", logoSrc: "/assets/bigquery-logo.png" },
];

/* ── Tools RTL ticker ── */
function ToolsTicker() {
  const tripled = [...TOOLS, ...TOOLS, ...TOOLS];
  return (
    <div
      className="mt-5 flex h-12 w-full overflow-hidden border-y border-moss/20"
      style={{
        background:
          "linear-gradient(90deg,rgba(239,241,193,0) 0%,rgb(239,241,193) 10%,rgb(239,241,193) 90%,rgba(239,241,193,0) 100%)",
      }}
    >
      <div
        className="flex min-w-max items-center gap-6 whitespace-nowrap px-16"
        style={{ animation: "tools-rtl 32s linear infinite" }}
      >
        {tripled.map((t, i) => (
          <ToolIcon key={i} {...t} />
        ))}
      </div>

      <style>{`
        @keyframes tools-rtl {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ── Experience cards ── */
const EXP_CARDS = [
  {
    title: "Senior Analyst — Data Engineering & AI Automation",
    description: "Tata Consultancy Services (Client: USAA) · Jun 2021 – Present · Plano, TX. Data engineering, cloud migration, Python automation, and multi-agent AI delivery on one of the largest financial services accounts in TCS's portfolio.",
  },
  {
    title: "Data Analyst — Ad Intelligence Product",
    description: "Airfind Corp · May 2020 – Dec 2020 · Remote. Owned ad analytics product end-to-end — KPI dashboards, A/B testing across DSPs, and data-driven recommendations that drove 15% revenue growth.",
  },
  {
    title: "Research Analyst — Ad Quality & Automation",
    description: "Media.Net Software Services · Jun 2017 – May 2019 · Mumbai, India. Built SQL/Python automation pipelines and Excel VBA solutions, improving team efficiency by 30%.",
  },
  {
    title: "MS, Information Technology & Analytics",
    description: "Rutgers University, Newark NJ · 2019–2020 · GPA: 3.83. Specialisation in data analytics, machine learning, and information systems.",
  },
];

function ExpCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-[204px] rounded-[16px] border border-white/45 bg-[#ece3d2]/65 px-8 py-7 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
      <p className="font-serif text-[24px] font-normal leading-7 text-ink">{title}</p>
      <p className="mt-4 text-base leading-[24px] text-copy">{description}</p>
    </div>
  );
}

/* ── Core expertise tags ── */
const EXPERTISE = [
  "AI Product Management",
  "Product Strategy",
  "Multi-Agent Systems",
  "LLM Integration",
  "RAG",
  "Prompt Engineering",
  "Data Engineering",
  "ETL Pipeline Design",
  "Cloud Migration",
  "Financial Domain Expertise",
  "Stakeholder Management",
  "Agile / SCRUM",
  "A/B Testing",
  "KPI & Metrics (LTV, CAC, MRR)",
  "PRD Writing",
  "Product Roadmapping",
];

function CoreExpertise() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start gap-3">
        {/* Label — first item in the flex wrap */}
        <div className="px-2 pt-[6px]">
          <span className="font-serif text-[24px] font-normal leading-none text-ink">
            Core Expertise
          </span>
        </div>
        {EXPERTISE.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border border-[#e0d2b8] bg-[#fff8ec] px-4 pb-[10px] pt-[12px] text-base leading-none text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Photo placeholder ── */
function PhotoCard() {
  return (
    <div className="overflow-hidden rounded-[22px] border-4 border-white bg-[#ece3d2]/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
      <div className="h-[258px] overflow-hidden rounded-[18px] bg-gradient-to-b from-[#b0bea0] to-[#6a7860]">
        {/* Replace with <Image src="/assets/about-photo.jpg" … /> when available */}
        <div className="flex h-full items-center justify-center opacity-20 text-6xl">
          👤
        </div>
      </div>
    </div>
  );
}

/* ── Main About section ── */
export default function About() {
  return (
    <section id="about" className="pb-16 pt-2 sm:pb-20 sm:pt-6">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="flex flex-col gap-5">

          {/* Row 1: photo + bio card */}
          <div className="grid gap-5 lg:grid-cols-[215px_minmax(0,1fr)]">
            <PhotoCard />

            {/* Bio card */}
            <div className="flex min-h-[258px] flex-col justify-center rounded-[16px] border border-white/45 bg-[#ece3d2]/65 px-8 py-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl md:px-10">
              <h2 className="font-serif text-[26px] font-normal leading-none text-ink">
                About Me
              </h2>
              <p className="mt-4 max-w-[49rem] text-base leading-7 text-copy">
                I&apos;m Abhishek — a Senior Analyst and AI builder based in Plano,
                TX. For the past 5 years I&apos;ve been embedded inside USAA, one of
                the most respected financial institutions in the US, doing work
                that sits right at the edge of data engineering, AI automation,
                and product delivery. Most recently I architected a multi-agent
                AI system — 4 specialised agents with an orchestrator — that
                automated financial data validation end-to-end. I&apos;m now
                actively looking for AI PM and Product Strategy roles where the
                product is the AI. I hold an AWS Certified AI Practitioner
                certification and a Master&apos;s from Rutgers University (GPA: 3.83).
              </p>
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-ink/25 px-6 py-3 text-base font-medium text-ink transition-colors duration-200 hover:border-moss hover:text-moss"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: 4-column experience cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXP_CARDS.map((card) => (
              <ExpCard key={card.title} {...card} />
            ))}
          </div>

          {/* Row 3: Core expertise tags */}
          <CoreExpertise />
        </div>
      </div>

      {/* Tools RTL ticker — full bleed */}
      <ToolsTicker />
    </section>
  );
}
