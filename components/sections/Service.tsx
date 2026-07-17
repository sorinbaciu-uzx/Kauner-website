"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/** Service — placeholder page. Real content drops in later. */
export function Service() {
  const t = useT();

  return (
    <section className="section bg-white">
      <div className="container-kauner">
        <div className="max-w-3xl">
          <SectionLabel>{t.service.label}</SectionLabel>
          <Reveal className="mt-6">
            <h2 className="font-display text-h2 text-ink">
              {t.service.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="max-w-[52ch] text-body-l text-steel-700">
              {t.service.lede}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
