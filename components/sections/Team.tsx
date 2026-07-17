"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/**
 * 5.6 — Team. Section prepared; real bios/photos drop in later. Three square
 * light placeholders + role. No invented names.
 */
export function Team() {
  const t = useT();

  return (
    <section id="team" className="section bg-mist-100">
      <div className="container-kauner">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionLabel>{t.team.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-display text-h2 text-ink">{t.team.heading}</h2>
            </Reveal>
          </div>
          <div className="flex max-w-[58ch] items-end">
            <Reveal>
              <p className="text-body-l text-steel-700">{t.team.lede}</p>
            </Reveal>
          </div>
        </div>

        {/* Placeholders for 3 people — real photos/bios drop in later */}
        <RevealGroup
          as="ul"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {t.team.members.map((m, i) => (
            <RevealItem as="span" key={i} className="block">
              <div className="border border-mist-200 bg-white">
                <Placeholder
                  label={m.label}
                  ratio="1 / 1"
                  // src={`/images/team-${i + 1}.jpg`}  ← drop the real photo here
                  alt={t.team.photoAlt}
                />
              </div>
              {/* Name intentionally blank until real bios are provided */}
              <p className="mt-4 h-5 font-display-600 text-base text-ink" />
              <p className="mono-label mt-1 text-steel-500">{m.role}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
