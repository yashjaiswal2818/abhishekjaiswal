"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Data ─── */
const FEATURED = {
  brand: "USAA via TCS",
  tags: ["Agentic AI", "Multi-Agent Systems"],
  categoryPills: ["Snowflake MCP", "Claude API", "VS Code Copilot", "Python", "Financial AI"],
  title: "Multi-Agent AI Data Validation System",
  description:
    "Designed and delivered a production Copilot-based orchestration system with 4 specialised agents — Excel extraction, SQL generation, Snowflake query execution, and automated test case generation. Achieved 98% automation on financial premium data validation across P3, UMB, and DWG release cycles, replacing a fully manual QA process.",
  slides: [
    { bg: "#003087", label: "Agent orchestration" },
    { bg: "#0a1628", label: "Snowflake MCP layer" },
    { bg: "#0f2a1a", label: "Validation output" },
  ],
  href: "#",
};

const SECONDARY = [
  {
    id: "llm-eval-framework",
    brand: "Personal Portfolio",
    tags: ["LLM Evaluation", "Python"],
    categoryPills: ["Claude API", "OpenAI", "Streamlit", "LLM-as-judge"],
    title: "LLM Evaluation & Testing Framework",
    description: "Built an open-source framework to benchmark LLM outputs across multiple models (Claude, GPT-4) using an LLM-as-judge pattern. Scores responses on accuracy, hallucination resistance, relevance, and instruction following — producing structured comparison reports for model selection decisions.",
    href: "#",
    imageBg: "#e8e4dc",
    publishSoon: false,
  },
  {
    id: "data-quality-validator",
    brand: "Personal Portfolio",
    tags: ["AI", "Data Quality"],
    categoryPills: ["Claude API", "Python", "Streamlit", "Data Validation"],
    title: "AI-Powered Data Quality Validator",
    description: "Shipped a public Streamlit app that ingests any CSV, runs automated quality checks (nulls, schema drift, outliers, duplicates, type mismatches), and uses the Claude API to generate a plain-English business summary of findings. Directly inspired by 5 years of enterprise data validation work at USAA.",
    href: "#",
    imageBg: "#dde8dd",
    publishSoon: false,
  },
];

/* ─── Tag row (Sixer • Mobile • Retention) ─── */
function TagRow({ brand, tags }: { brand: string; tags: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-base font-medium leading-none text-copy">{brand}</span>
      {tags.map((tag) => (
        <span key={tag} className="flex items-center gap-3">
          <span className="block h-1 w-1 rounded-full bg-[#a8aba0]" />
          <span className="text-base font-medium leading-none text-copy">{tag}</span>
        </span>
      ))}
    </div>
  );
}

/* ─── Pill tags ─── */
function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[#d9dccf] bg-[#f8f8f3] px-4 py-2.5 text-base leading-none text-[#747772]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ─── "View Case Study" link ─── */
function CaseStudyLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="group/case inline-flex w-fit items-center gap-1 text-base font-semibold leading-none text-moss transition-colors duration-200 hover:text-moss-dark"
    >
      View Case Study
      <ArrowRight className="relative top-px h-5 w-5 transition-transform duration-300 ease-out group-hover/case:translate-x-1" />
    </a>
  );
}

/* ─── Featured Case Study ─── */
function FeaturedCase() {
  const [slide, setSlide] = useState(0);
  const { brand, tags, categoryPills, title, description, slides, href } = FEATURED;

  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
  const next = () => setSlide((s) => (s + 1) % slides.length);

  return (
    <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch">
      {/* Left: text */}
      <div className="flex flex-1 flex-col justify-between gap-10">
        <div className="flex flex-col gap-4">
          <TagRow brand={brand} tags={tags} />
          <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink max-w-[480px]">
            {title}
          </h3>
          <p className="text-base leading-7 text-copy max-w-[460px]">{description}</p>
        </div>
        <div className="flex flex-col gap-6">
          <Pills items={categoryPills} />
          <CaseStudyLink href={href} />
        </div>
      </div>

      {/* Right: image carousel */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[520px] xl:h-[520px] xl:w-[560px] xl:shrink-0">
        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
              i === slide ? "opacity-100" : "opacity-0"
            )}
            style={{ background: s.bg }}
          >
            {/* Phone mockup placeholder */}
            <div className="flex h-[80%] w-[48%] flex-col overflow-hidden rounded-[28px] bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <div className="h-6 bg-white/5 flex items-center justify-center">
                <div className="h-1 w-12 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 bg-gradient-to-b from-white/10 to-white/5 flex items-center justify-center">
                <span className="text-white/30 text-sm font-medium">{s.label}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom overlay: brand label + arrow buttons */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-6 xl:bottom-[17px] xl:left-8 xl:right-6">
          <span className="inline-flex items-center rounded-full bg-[rgba(255,253,248,0.88)] px-4 py-2 text-base font-medium leading-none text-black shadow-[0_6px_16px_rgba(33,35,41,0.08)] backdrop-blur-sm">
            {brand}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black/60 transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-black/70"
            >
              <ChevronLeft className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black/60 transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-black/70"
            >
              <ChevronRight className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Secondary card ─── */
function SecondaryCard({
  brand, tags, categoryPills, title, description, href, imageBg, publishSoon,
}: (typeof SECONDARY)[number]) {
  return (
    <div className="group overflow-hidden rounded-[24px] bg-[#ece3d2]/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl transition-shadow duration-200 hover:shadow-[0_20px_54px_rgba(33,35,41,0.08)]">
      {/* Image top */}
      <div
        className="relative h-[240px] overflow-hidden rounded-t-[24px]"
        style={{ background: imageBg }}
      >
        {/* Placeholder case study image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center opacity-20">
            <div className="text-5xl font-bold text-ink">{brand}</div>
          </div>
        </div>
        {publishSoon && (
          <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[#ecebe8] px-5 py-3 text-[1rem] font-medium leading-none text-ink">
            Publishing soon
          </div>
        )}
      </div>

      {/* Text bottom */}
      <div className="flex flex-1 flex-col gap-3 px-8 pb-10 pt-6">
        <TagRow brand={brand} tags={tags} />
        <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink">{title}</h3>
        <p className="text-base leading-7 text-copy">{description}</p>
        <div className="mt-auto pt-3">
          {!publishSoon && <CaseStudyLink href={href} />}
        </div>
      </div>
    </div>
  );
}

/* ─── Works Section ─── */
export default function Works() {
  return (
    <section id="works" className="pb-16 pt-6 sm:pb-20">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-6 px-5">
          <h2 className="font-serif text-[2.5rem] font-normal leading-[52px] text-ink">
            Case Studies
          </h2>
          <p className="text-base leading-7 text-copy max-w-[640px]">
            A curated set of work showcasing how I approach complex problems,
            design systems, and business impact.
          </p>
        </div>

        {/* Cards stack */}
        <div className="flex flex-col gap-10">
          {/* Featured */}
          <FeaturedCase />

          {/* Secondary grid */}
          <div className="grid gap-10 lg:grid-cols-2">
            {SECONDARY.map((c) => (
              <SecondaryCard key={c.id} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
