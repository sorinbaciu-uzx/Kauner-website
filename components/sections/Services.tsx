"use client";

import { Compass, Wrench, GraduationCap, LifeBuoy, Workflow } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

// Icons are presentational (not localized) — mapped by position to the copy.
const icons = [Compass, Wrench, GraduationCap, LifeBuoy, Workflow];

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
        </div>

        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((s, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <RevealItem as="li" key={s.name} className="block">
                <div className="flex h-full flex-col border border-mist-200 bg-white p-7 transition-colors duration-300 hover:border-kauner-blue">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center border border-mist-200 text-kauner-blue"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display-600 text-h3 text-ink">
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
      </div>
    </section>
  );
}
