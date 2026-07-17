"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/**
 * 5.3 — What we solve & what we bring. The serious positioning, as a three-column
 * problem → solution → differentiators block on white, with hairline dividers.
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

        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-1 border-t border-mist-200 md:grid-cols-3"
        >
          {t.solve.columns.map((col, i) => (
            <RevealItem
              as="span"
              key={col.tag}
              className={`flex flex-col py-8 md:py-10 ${
                i > 0
                  ? "border-t border-mist-200 md:border-l md:border-t-0 md:pl-10"
                  : "md:pr-10"
              } ${i === 1 ? "md:pl-10" : ""}`}
            >
              <span className="mono-label flex items-center gap-3 text-steel-500">
                <span className="block h-px w-6 bg-kauner-blue" aria-hidden />
                {col.tag}
              </span>
              <h3 className="mt-6 font-display-600 text-h3 text-ink">
                {col.title}
              </h3>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-steel-700">
                {col.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
