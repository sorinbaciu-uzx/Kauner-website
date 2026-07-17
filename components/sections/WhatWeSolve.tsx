"use client";

import { motion } from "framer-motion";
import { Unlink, Waypoints, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { easeEngineered } from "@/lib/motion";
import { useT } from "@/lib/i18n/LocaleProvider";

// Presentational, mapped by column position: the gap → the bridge → the edge.
const icons = [Unlink, Waypoints, ShieldCheck];

/**
 * 5.3 — What we solve & what we bring. The serious positioning, as a three-column
 * problem → solution → differentiators block on white, with hairline dividers.
 * A blue line draws left→right across the top to signal the "flow", and each
 * column leads with a small icon that eases in.
 */
export function WhatWeSolve() {
  const t = useT();

  return (
    <section id="solve" className="section bg-mist-100">
      <div className="container-kauner">
        <div className="max-w-3xl">
          <SectionLabel>{t.solve.label}</SectionLabel>
          <Reveal className="mt-6">
            <h2 className="max-w-[20ch] font-display text-h2 text-ink">
              {t.solve.heading}
            </h2>
          </Reveal>
        </div>

        {/* Connective flow line drawn across the top of the three columns */}
        <div className="relative mt-14 border-t border-mist-200">
          <motion.span
            className="absolute -top-px left-0 h-px w-full origin-left bg-kauner-blue"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: easeEngineered }}
            aria-hidden
          />

          <RevealGroup as="ul" className="grid grid-cols-1 md:grid-cols-3">
            {t.solve.columns.map((col, i) => {
              const Icon = icons[i] ?? Unlink;
              return (
                <RevealItem
                  as="span"
                  key={col.tag}
                  className={`flex flex-col py-8 md:py-10 ${
                    i > 0
                      ? "border-t border-mist-200 md:border-l md:border-t-0 md:pl-10"
                      : "md:pr-10"
                  } ${i === 1 ? "md:pl-10" : ""}`}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: easeEngineered,
                    }}
                    className="mb-6 inline-flex h-11 w-11 items-center justify-center border border-mist-200 bg-white text-kauner-blue"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </motion.span>

                  <span className="mono-label flex items-center gap-3 text-steel-500">
                    <span className="block h-px w-6 bg-kauner-blue" aria-hidden />
                    {col.tag}
                  </span>
                  <h3 className="mt-6 font-display-600 text-h4 text-ink">
                    {col.title}
                  </h3>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-steel-700">
                    {col.body}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
