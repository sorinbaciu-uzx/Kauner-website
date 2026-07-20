"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Placeholder } from "@/components/ui/Placeholder";
import { easeEngineered } from "@/lib/motion";
import { useT } from "@/lib/i18n/LocaleProvider";

/**
 * Full equipment catalogue — mirrors the reference layout:
 *  1. Hero band with the active category title + an image slot that swaps
 *     whenever another category tab is selected.
 *  2. "All products" heading.
 *  3. Category tabs (pills).
 *  4. A stacked list of model cards for the active category.
 *
 * Real photography drops into the `Placeholder` slots later via `src`; until
 * then every image is a zero-layout-shift placeholder.
 */
export function EquipmentCatalog() {
  const t = useT();
  const cats = t.equipment.items;
  const [active, setActive] = useState(0);
  const cat = cats[active];

  // Open on the category named in the URL hash (e.g. arriving from the home
  // "What we offer" cards at /echipamente#debitare-teava), and follow later
  // hash changes.
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug) return;
      const idx = cats.findIndex((c) => c.slug === slug);
      if (idx >= 0) setActive(idx);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [cats]);

  return (
    <div>
      {/* ── Hero band ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-blue-900">
        {/* depth + faint engineering grid */}
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

        <div className="container-kauner relative z-10 flex flex-col items-center gap-10 pb-16 pt-40 md:flex-row md:items-center md:justify-between md:pb-24 md:pt-44">
          <div className="w-full md:max-w-[38%]">
            <motion.p
              key={`eyebrow-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeEngineered }}
              className="mono-label text-blue-300"
            >
              {t.equipment.catalogHero}
            </motion.p>
            <div className="mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${active}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: easeEngineered }}
                  className="font-display text-h1 text-white"
                >
                  {cat.name}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Category image — swaps with the active tab */}
          <div className="w-full md:w-[54%]">
            <div className="relative overflow-hidden rounded-sharp">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-img-${active}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.5, ease: easeEngineered }}
                >
                  <Placeholder
                    label={cat.label}
                    alt={cat.alt}
                    src={cat.heroImage}
                    ratio="16 / 9"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalogue ─────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-kauner">
          <h2 className="text-center font-display text-h2 text-ink">
            {t.equipment.catalogHeading}
          </h2>

          {/* Category tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {cats.map((c, i) => {
              const on = i === active;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`rounded-sharp border px-5 py-2.5 text-sm font-semibold tracking-[0.01em] transition-colors duration-300 ease-out-engineered outline-none focus-visible:border-kauner-blue ${
                    on
                      ? "border-kauner-blue bg-kauner-blue text-white"
                      : "border-mist-200 bg-white text-steel-500 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          {/* Model cards for the active category */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={`list-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easeEngineered }}
              className="mt-14 flex flex-col gap-5"
            >
              {cat.models.map((model, i) => (
                <motion.li
                  key={model.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(i * 0.05, 0.4),
                    ease: easeEngineered,
                  }}
                >
                  {/* Whole card links to the model's own page */}
                  <Link
                    href={`/echipamente/${model.slug}`}
                    className="group flex flex-col gap-6 border border-mist-200 bg-mist-100 p-5 outline-none transition-colors duration-300 hover:border-kauner-blue focus-visible:border-kauner-blue sm:flex-row sm:items-center sm:gap-8 sm:p-6"
                  >
                    <div className="w-full overflow-hidden border border-mist-200 bg-white sm:w-[46%]">
                      <Placeholder
                        label={model.name}
                        alt={`${model.name} — ${cat.name}`}
                        ratio="5 / 2"
                        zoom
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display-600 text-h4 text-ink">
                        {model.name}
                      </h3>
                      {/* Per-model blurb copied from the product sheet; falls back
                          to the category description for models without one. */}
                      <div className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-steel-700">
                        {(model.desc ?? [cat.desc]).map((line, li) => (
                          <p key={li}>{line}</p>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors group-hover:text-ink">
                        {t.equipment.learnMore}
                        <ChevronRight
                          className="h-4 w-4 text-kauner-blue transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <p className="mt-10 text-center text-sm text-steel-500">
            {t.equipment.note}
          </p>
        </div>
      </section>
    </div>
  );
}
