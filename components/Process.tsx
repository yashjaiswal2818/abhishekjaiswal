"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    title: "Discover",
    body: "I start with the business problem, not the technology. Stakeholder interviews, metric deep-dives, and competitive research to understand what \"good\" actually looks like before writing a single line of code or a PRD bullet.",
  },
  {
    title: "Define",
    body: "Translate ambiguous business needs into structured product requirements — user stories, PRDs, and success metrics that engineers can build against and stakeholders can sign off on.",
  },
  {
    title: "Prototype",
    body: "Build a working proof of concept fast — Python scripts, LLM integrations, Streamlit UIs. I validate ideas with real outputs, not slide decks. If it doesn't work in a notebook, it won't work in production.",
  },
  {
    title: "Ship",
    body: "Own end-to-end delivery in Agile sprints — from data pipeline and model integration through stakeholder UAT, validation, and go-live. I've shipped products used daily by 500+ users at a Fortune 500 company.",
  },
  {
    title: "Measure",
    body: "Define leading and lagging KPIs before launch, instrument tracking, and close the loop with stakeholder reporting. No product is done at launch — it's done when the metrics prove it's working.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="pb-20 pt-8 sm:pb-24 sm:pt-14">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="grid gap-12 px-0 sm:px-6 lg:grid-cols-[26.25rem_1fr] lg:gap-[4.5rem]">

          {/* ── Left: heading + description ── */}
          <div>
            <h2 className="max-w-[18rem] font-serif text-[2.5rem] font-normal leading-[1.3] text-ink">
              How I Work
            </h2>
            <p className="mt-6 max-w-[26rem] text-base leading-7 text-copy">
              I don&apos;t separate &ldquo;technical&rdquo; from &ldquo;strategic.&rdquo; The best AI
              products get built when the same person who can write the Python
              script also understands why the business needs it. My process is
              iterative, stakeholder-driven, and grounded in real data — not
              assumptions.
            </p>
          </div>

          {/* ── Right: steps + green line ── */}
          <div ref={ref} className="relative lg:pl-12">
            {/* Green gradient vertical line */}
            <div
              className="absolute left-0 top-0 hidden h-[30rem] w-2 rounded-full lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, #6aa931 0%, #5f9a20 40%, rgba(106,169,49,0.15) 85%, transparent 100%)",
              }}
            />

            {/* Steps */}
            <motion.div
              className="flex flex-col gap-10"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {STEPS.map((step) => (
                <motion.div key={step.title} variants={item}>
                  <p className="text-[20px] font-semibold leading-none text-ink">
                    {step.title}
                  </p>
                  <p className="mt-3 max-w-[29rem] text-base leading-7 text-copy">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
