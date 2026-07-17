"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PhotoFill } from "@/components/ui/PhotoFill";
import { reveal, stagger, easeEngineered } from "@/lib/motion";
import { useT } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Full-bleed laser photography (placeholder until real asset) */}
      <PhotoFill
        label={t.hero.photoLabel}
        alt={t.hero.photoAlt}
        priority
        labelPosition="top"
        // src="/images/hero-laser.jpg"  ← drop the real photo here
      />
      {/* Legibility scrim: darker top (nav) and bottom (copy) */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.15) 30%, rgba(10,10,12,0.10) 52%, rgba(10,10,12,0.84) 100%)",
        }}
      />

      {/* Content — anchored to the lower band */}
      <div className="container-kauner relative z-10 flex flex-1 flex-col justify-end pb-16 pt-32 md:pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[62rem]"
        >
          <motion.p variants={reveal} className="mono-label text-blue-300">
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-6 font-display text-display text-white"
          >
            {t.hero.headlinePre}
            <span className="text-blue-300">{t.hero.headlineEm}</span>
            {t.hero.headlinePost}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-body-l text-steel-300"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/echipamente" variant="primary" withChevron>
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/contact" variant="ghost-light">
              {t.hero.ctaGhost}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom capability strip — mono, hairline dividers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeEngineered }}
        className="relative z-10 border-t border-white/15"
      >
        <div className="container-kauner">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5 md:gap-x-0">
            {t.hero.strip.map((item, i) => (
              <li
                key={item}
                className={`mono-label text-white/55 md:flex-1 md:px-6 md:text-center ${
                  i > 0 ? "md:border-l md:border-white/15" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
