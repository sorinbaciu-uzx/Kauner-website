"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/LocaleProvider";

/** 5.7 — Contact / consultation. Light, restrained. No big blue band. */
export function Contact() {
  const t = useT();

  return (
    <section id="contact" className="section bg-white">
      <div className="container-kauner">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionLabel>{t.contact.label}</SectionLabel>
          <Reveal className="mt-6">
            <h2 className="font-display text-h2 text-ink">
              {t.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="max-w-[52ch] text-body-l text-steel-700">
              {t.contact.lede}
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <div className="flex flex-col items-center gap-6">
              <Button href={`mailto:${t.contact.email}`} variant="primary" withChevron>
                {t.contact.cta}
              </Button>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="font-mono text-sm tracking-[0.04em] text-steel-700 underline-offset-4 transition-colors hover:text-kauner-blue hover:underline"
                >
                  {t.contact.email}
                </a>
                <span className="hidden h-3 w-px bg-mist-200 sm:block" aria-hidden />
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="font-mono text-sm tracking-[0.04em] text-steel-700 underline-offset-4 transition-colors hover:text-kauner-blue hover:underline"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
