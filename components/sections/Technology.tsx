"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PhotoFill } from "@/components/ui/PhotoFill";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

type Props = {
  /** "home" = teaser (intro + link + stats). "full" = the dedicated
      /tehnologie page, with the 4 technical blocks fully described. */
  variant?: "home" | "full";
};

/**
 * 5.4 — Technology (world-class, factual). A dark *photographic* band: full-bleed
 * laser photo + scrim, white text. On the homepage it's a teaser (the vertical-
 * integration thesis + a link to the full page + the mono stat row). On
 * /tehnologie the four technical blocks (H3) are laid out in full.
 */
export function Technology({ variant = "home" }: Props) {
  const t = useT();
  const isFull = variant === "full";

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
            "linear-gradient(180deg, rgba(10,10,12,0.82) 0%, rgba(10,10,12,0.70) 45%, rgba(10,10,12,0.90) 100%)",
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
            <p className="max-w-[68ch] text-body-l text-steel-300">
              {t.tech.lede}
            </p>
          </Reveal>

          {/* Homepage: link out to the full technology page */}
          {!isFull && (
            <Reveal delay={0.12} className="mt-8">
              <Link
                href="/tehnologie"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-300 outline-none transition-colors hover:text-white focus-visible:text-white"
              >
                {t.tech.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </Link>
            </Reveal>
          )}
        </div>

        {/* Full page: the four technical blocks, laid out in full (H3 + body) */}
        {isFull && (
          <RevealGroup as="div" className="mt-16 border-t border-white/12">
            {t.tech.blocks.map((block, i) => (
              <RevealItem
                as="div"
                key={block.title}
                className="border-b border-white/12 py-9 md:py-11"
              >
                <div className="flex items-baseline gap-4">
                  <span className="tnum font-mono text-sm text-blue-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display-600 text-h4 text-white">
                    {block.title}
                  </h3>
                </div>
                <div className="mt-5 max-w-[74ch] space-y-4 text-[0.975rem] leading-relaxed text-steel-300 sm:pl-10">
                  {block.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {/* Materials & applications — one line, good for SEO */}
        <Reveal className="mt-10">
          <p className="max-w-[80ch] text-[0.95rem] leading-relaxed text-steel-400">
            {t.tech.materials}
          </p>
        </Reveal>

        {/* Mono stat row — tabular numerals, hairline dividers, no collisions */}
        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-9 border-t border-white/15 pt-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-0"
        >
          {t.tech.stats.map((s, i) => (
            <RevealItem
              as="li"
              key={s.note}
              className={`min-w-0 text-center lg:px-6 ${
                i > 0
                  ? "border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/15"
                  : ""
              }`}
            >
              <span className="mono-label flex min-h-[2.4em] items-end justify-center text-center text-steel-400">
                {s.note}
              </span>
              {s.lines.length > 0 ? (
                <div className="mt-3 space-y-1">
                  {s.lines.map((line) => (
                    <p
                      key={line}
                      className="font-display-600 text-[1.15rem] leading-tight tracking-tight text-white"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="tnum mt-3 font-display-600 leading-none tracking-tight text-white text-[clamp(1.5rem,2.4vw,2rem)]">
                  <CountUp value={s.value} />
                  {s.unit && (
                    <span className="ml-1.5 align-baseline text-[0.46em] font-sans font-normal tracking-wide text-blue-300">
                      {s.unit}
                    </span>
                  )}
                </p>
              )}
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
