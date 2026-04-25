"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "AI Product Manager",
  "Technical PM",
  "AI Strategist",
  "Data & AI Builder",
  "Multi-Agent Systems",
];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_MS = 2000;

export default function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setIsDeleting(true);
      }, PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (!isDeleting) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(
          () => setDisplayed(phrase.slice(0, displayed.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      }
      // Fully typed — pause before deleting
      setPaused(true);
      return;
    }

    // Deleting
    if (displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(phrase.slice(0, displayed.length - 1)),
        DELETE_SPEED
      );
      return () => clearTimeout(t);
    }

    // Done deleting — move to next phrase
    setIsDeleting(false);
    setPhraseIdx((i) => (i + 1) % PHRASES.length);
  }, [displayed, isDeleting, paused, phraseIdx]);

  return (
    <span className="font-serif text-[50px] font-normal italic leading-[60px] text-moss-dark">
      {displayed}
      <span className="animate-caret-blink ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[2px] bg-current" />
    </span>
  );
}
