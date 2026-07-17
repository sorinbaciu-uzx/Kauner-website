"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/** 5.5 — Equipment overview. Light card grid, hover → thin blue border. */
export function Equipment() {
  const t = useT();

  return (
    <section id="equipment" className="section bg-white">
      <div className="container-kauner">
        <div className="max-w-3xl">
          <SectionLabel>{t.equipment.label}</SectionLabel>
          <Reveal className="mt-6">
            <h2 className="font-display text-h2 text-ink">
              {t.equipment.heading}
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.equipment.items.map((p) => (
            <RevealItem as="span" key={p.name} className="block">
              <Link
                id={p.slug}
                href={`/echipamente#${p.slug}`}
                className="group flex h-full scroll-mt-28 flex-col border border-mist-200 bg-white p-6 outline-none transition-colors duration-300 hover:border-kauner-blue focus-visible:border-kauner-blue"
              >
                <div className="relative overflow-hidden border border-mist-200">
                  <Placeholder
                    label={p.label}
                    ratio="16 / 10"
                    // src={`/images/equip-…jpg`}  ← drop the real photo here
                    alt={p.alt}
                    zoom
                  />
                </div>
                <h3 className="mt-6 font-display-600 text-h3 text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-steel-700">
                  {p.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors group-hover:text-ink">
                  {t.equipment.learnMore}
                  <ChevronRight
                    className="h-4 w-4 text-kauner-blue transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <p className="text-sm text-steel-500">{t.equipment.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
