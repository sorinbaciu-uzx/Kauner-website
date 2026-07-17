"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VideoFill } from "@/components/ui/VideoFill";
import { reveal, stagger, easeEngineered } from "@/lib/motion";
import { useT } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Full-bleed laser video loop (placeholder until real assets).
          Drop the clip(s) into /public/videos and uncomment below. Keep the
          poster so the still shows instantly and for reduced-motion visitors. */}
      <VideoFill
        label={t.hero.photoLabel}
        alt={t.hero.photoAlt}
        labelPosition="top"
        poster="/images/hero-laser.jpg"
        srcWebm="/videos/hero-laser.webm"
        srcMp4="/videos/hero-laser.mp4"
        // Temper the high-key clip so the bright machine can't wash out the
        // copy as it drifts behind the headline through the loop.
        mediaClassName="brightness-[0.62] contrast-[1.04]"
      />
      {/* Legibility scrim — two stacked layers so white copy stays readable
          over the machine in every frame of the loop, while the clip still
          "breathes" on the right:
          (1) a radial wash anchored bottom-left, dark under the text column
          and fading to clear over the machine; (2) a vertical wash for the
          nav (top) and the capability strip (bottom). */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(125% 105% at 12% 82%, rgba(10,10,12,0.86) 0%, rgba(10,10,12,0.62) 34%, rgba(10,10,12,0.30) 55%, rgba(10,10,12,0.06) 74%, rgba(10,10,12,0) 88%), " +
            "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.10) 22%, rgba(10,10,12,0.10) 58%, rgba(10,10,12,0.90) 100%)",
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

      {/* Trust bar — a static band of its own at the foot of the hero (no
          overlap with the copy): mono chips separated by "·", on a
          semi-transparent surface. On mobile it scrolls horizontally. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeEngineered }}
        className="relative z-10 border-t border-white/15 bg-ink/40 backdrop-blur-sm"
      >
        <div className="container-kauner">
          <ul className="flex items-center gap-x-4 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-x-6 [&::-webkit-scrollbar]:hidden">
            {t.hero.trust.map((item, i) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-x-4 md:gap-x-6"
              >
                {i > 0 && (
                  <span aria-hidden className="text-white/25">
                    ·
                  </span>
                )}
                <span className="mono-label whitespace-nowrap text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
