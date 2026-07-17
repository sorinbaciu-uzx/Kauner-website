"use client";

import {
  Compass,
  Target,
  Wrench,
  GraduationCap,
  LifeBuoy,
  Workflow,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CardFlow } from "@/components/ui/CardFlow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

// Icons are presentational (not localized) — mapped by position to the copy.
// Order matches the 6 services: consulting · applications · installation ·
// training · service · integration.
const icons = [Compass, Target, Wrench, GraduationCap, LifeBuoy, Workflow];

/** Services — what we do around the machine. Light cards, hairline borders. */
export function Services() {
  const t = useT();

  return (
    <section id="services" className="section bg-white">
      <div className="container-kauner">
        <div className="max-w-3xl">
          <SectionLabel>{t.services.label}</SectionLabel>
          <Reveal className="mt-6">
            <h2 className="font-display text-h2 text-ink">
              {t.services.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="max-w-[62ch] text-body-l text-steel-700">
              {t.services.intro}
            </p>
          </Reveal>
        </div>

        <CardFlow className="mt-14">
          <RevealGroup
            as="ul"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {t.services.items.map((s, i) => {
              const Icon = icons[i] ?? Compass;
              return (
                <RevealItem as="li" key={s.name} className="block flow-card">
                  <div className="flex h-full flex-col border border-mist-200 bg-white p-7 transition-colors duration-300 hover:border-kauner-blue">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center border border-mist-200 text-kauner-blue"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display-600 text-h4 text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-steel-700">
                    {s.desc}
                  </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </CardFlow>
      </div>
    </section>
  );
}
