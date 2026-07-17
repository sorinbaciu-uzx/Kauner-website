"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/** 5.2 — Brand in brief. Light, sober. Statement H2 + two short paragraphs. */
export function BrandInBrief() {
  const t = useT();

  return (
    <section id="brand" className="section bg-white">
      <div className="container-kauner">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionLabel>{t.brand.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="max-w-[18ch] font-display text-h2 text-ink">
                {t.brand.heading}
              </h2>
            </Reveal>
          </div>

          <div className="max-w-[60ch] space-y-6 text-body-l text-steel-700">
            <Reveal>
              <p>{t.brand.p1}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>{t.brand.p2}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
