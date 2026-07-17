"use client";

import { motion } from "framer-motion";
import { PhotoFill } from "@/components/ui/PhotoFill";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/**
 * 5.4 — Technology (world-class, factual). A dark *photographic* band: full-bleed
 * laser photo + scrim, white text, a one-line factual reference to the integrated
 * technology, and a mono stat row. No partner language; no Han's logo.
 */
export function Technology() {
  const t = useT();

  return (
    <section id="technology" className="relative overflow-hidden">
      <PhotoFill
        label={t.tech.photoLabel}
        alt={t.tech.photoAlt}
        sizes="100vw"
        // src="/images/tech-bg.jpg"  ← drop the real photo here
      />
      {/* scrim for legibility */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.80) 0%, rgba(10,10,12,0.62) 45%, rgba(10,10,12,0.85) 100%)",
        }}
      />

      <div className="container-kauner relative z-10 py-section-sm md:py-section">
        <div className="max-w-3xl">
          <div className="mono-label flex items-center gap-3 text-steel-300">
            <span className="block h-px w-9 bg-blue-300" aria-hidden />
            {t.tech.label}
          </div>
          <Reveal className="mt-6">
            <h2 className="max-w-[22ch] font-display text-h2 text-white">
              {t.tech.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="max-w-[58ch] text-body-l text-steel-300">
              {t.tech.lede}
            </p>
          </Reveal>
        </div>

        {/* Mono stat row — tabular numerals, hairline dividers, no collisions */}
        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-9 border-t border-white/15 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0"
        >
          {t.tech.stats.map((s, i) => (
            <RevealItem
              as="li"
              key={`${s.value}-${s.unit}`}
              className={`min-w-0 lg:px-6 ${
                i > 0
                  ? "border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/15"
                  : ""
              }`}
            >
              <span className="mono-label block text-steel-400">{s.note}</span>
              <p className="tnum mt-3 font-mono font-medium leading-none tracking-tight text-white text-[clamp(1.5rem,2.6vw,2.125rem)]">
                {s.value}
                <span className="ml-1 align-baseline text-[0.5em] font-normal tracking-normal text-blue-300">
                  {s.unit}
                </span>
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* hairline draw accent at the base */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 h-px origin-left bg-blue-300/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      />
    </section>
  );
}
