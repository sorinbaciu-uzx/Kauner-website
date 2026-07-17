"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { easeEngineered } from "@/lib/motion";
import { useT } from "@/lib/i18n/LocaleProvider";

type Props = { slug: string };

/**
 * Per-model detail page template. Mirrors the reference layout — hero, in-page
 * sub-nav, overview, cutting capacity, technical data, recommended products and
 * a contact CTA — but ships as SCAFFOLDING: real copy, specs, charts and photos
 * drop in later. Text slots show a neutral "coming soon" line meanwhile; image
 * slots show the zero-layout-shift placeholder.
 */
export function ModelDetail({ slug }: Props) {
  const t = useT();
  const m = t.modelPage;

  // Resolve the model + its category from the active locale's dictionary.
  const cat = t.equipment.items.find((c) =>
    c.models.some((mm) => mm.slug === slug),
  );
  const model = cat?.models.find((mm) => mm.slug === slug);

  if (!cat || !model) return null;

  // Recommended = other models in the same category; if too few, top up from
  // the rest of the catalogue so the row is never empty.
  const sameCat = cat.models.filter((mm) => mm.slug !== slug);
  const others = t.equipment.items
    .filter((c) => c.slug !== cat.slug)
    .flatMap((c) => c.models.map((mm) => ({ ...mm, catName: c.name })));
  const related = [
    ...sameCat.map((mm) => ({ ...mm, catName: cat.name })),
    ...others,
  ].slice(0, 3);

  const tabs = [
    { href: "#overview", label: m.overview },
    { href: "#date-tehnice", label: m.technicalData },
    { href: "#recomandate", label: m.recommended },
  ];

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-blue-900">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(120% 120% at 80% 0%, rgba(27,15,209,0.55) 0%, rgba(6,0,74,0) 60%), " +
              "linear-gradient(180deg, rgba(6,0,74,0.2) 0%, rgba(6,0,74,0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 tech-grid-dark opacity-70" aria-hidden />

        <div className="container-kauner relative z-10 flex flex-col items-start gap-10 pb-16 pt-40 md:flex-row md:items-center md:justify-between md:pb-24 md:pt-44">
          <div className="w-full md:max-w-[42%]">
            <Link
              href="/echipamente"
              className="mono-label inline-flex items-center gap-2 text-blue-300 outline-none transition-colors hover:text-white focus-visible:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              {m.backToCatalog}
            </Link>
            <p className="mono-label mt-6 text-blue-300">{cat.name}</p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeEngineered }}
              className="mt-3 font-display text-h1 text-white"
            >
              {model.name}
            </motion.h1>
          </div>

          <div className="w-full md:w-[52%]">
            <div className="overflow-hidden rounded-sharp">
              <Placeholder
                label={model.name}
                alt={`${model.name} — ${cat.name}`}
                ratio="16 / 9"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky in-page sub-nav ────────────────────────────────── */}
      <nav className="sticky top-[72px] z-30 border-b border-mist-200 bg-white/90 backdrop-blur-md">
        <div className="container-kauner flex items-center gap-6 overflow-x-auto py-4">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="whitespace-nowrap text-sm font-semibold text-steel-500 outline-none transition-colors hover:text-ink focus-visible:text-ink"
            >
              {tab.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="ml-auto hidden whitespace-nowrap text-sm font-semibold text-kauner-blue outline-none transition-colors hover:text-ink focus-visible:text-ink sm:inline"
          >
            {m.ctaButton}
          </Link>
        </div>
      </nav>

      {/* ── Overview ──────────────────────────────────────────────── */}
      <section id="overview" className="section scroll-mt-32 bg-white">
        <div className="container-kauner">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-h2 text-ink">{m.overview}</h2>
            <p className="mt-5 text-body-l text-steel-500">{m.comingSoon}</p>
          </div>

          {/* Feature imagery gallery — real photos + copy land here later */}
          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="overflow-hidden border border-mist-200 bg-white"
              >
                <Placeholder
                  label={`${model.name} — ${i + 1}`}
                  alt={`${model.name} — ${cat.name}`}
                  ratio="4 / 3"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cutting capacity ──────────────────────────────────────── */}
      <section className="section bg-mist-100 pt-0 md:pt-0">
        <div className="container-kauner pt-20 md:pt-28">
          <h2 className="text-center font-display text-h2 text-ink">
            {m.cuttingCapacity}
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <li
                key={i}
                className="overflow-hidden border border-mist-200 bg-white"
              >
                <Placeholder
                  label={`${m.cuttingCapacity} — ${i + 1}`}
                  ratio="1 / 1"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Technical data ────────────────────────────────────────── */}
      <section id="date-tehnice" className="section scroll-mt-32 bg-white">
        <div className="container-kauner">
          <h2 className="text-center font-display text-h2 text-ink">
            {m.technicalData}
          </h2>
          <div className="mt-12 flex min-h-[220px] items-center justify-center border border-dashed border-mist-200 bg-mist-100">
            <p className="mono-label text-steel-400">{m.comingSoon}</p>
          </div>
        </div>
      </section>

      {/* ── Recommended products ──────────────────────────────────── */}
      <section id="recomandate" className="section scroll-mt-32 bg-mist-100">
        <div className="container-kauner">
          <h2 className="text-center font-display text-h2 text-ink">
            {m.recommended}
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/echipamente/${r.slug}`}
                  className="group flex h-full flex-col border border-mist-200 bg-white p-5 outline-none transition-colors duration-300 hover:border-kauner-blue focus-visible:border-kauner-blue"
                >
                  <div className="overflow-hidden border border-mist-200">
                    <Placeholder label={r.name} alt={r.name} ratio="16 / 10" zoom />
                  </div>
                  <h3 className="mt-5 font-display-600 text-h4 text-ink">
                    {r.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors group-hover:text-ink">
                    {t.equipment.learnMore}
                    <ChevronRight
                      className="h-4 w-4 text-kauner-blue transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-blue-900">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(120% 120% at 20% 0%, rgba(27,15,209,0.5) 0%, rgba(6,0,74,0) 60%)",
          }}
        />
        <div className="container-kauner relative z-10 flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <h2 className="font-display text-h2 text-white">{m.ctaTitle}</h2>
          <p className="max-w-xl text-body-l text-steel-300">{m.ctaBody}</p>
          <Button href="/contact" variant="ghost-light" withChevron>
            {m.ctaButton}
          </Button>
        </div>
      </section>
    </div>
  );
}
