"use client";

import type { ReactNode } from "react";
import { DarkMoment } from "@/components/ui/DarkMoment";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

/*
 * PHASE 0 — SKELETON of /tehnologie per KAUNER_Technology_Page_Prompt v1.1.
 * All sections from the §3 architecture table, in order, each as a STUB:
 * semantic title + a single <MediaPlaceholder> describing the intended media /
 * interaction. Light/dark rhythm per §2.3 — dark moments only ever via
 * <DarkMoment> (real photo/video under an --ink overlay), never flat black.
 * No final copy, no filled spec tables/stat bands yet — those land per phase.
 */

/** A light "chapter": mono blue index + rule (§2.4), then the semantic H2. */
function Chapter({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id?: string;
  index: string;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="cv-section border-t border-line bg-paper">
      <div className="container-kauner py-section-sm md:py-section">
        <Reveal>
          <div className="mono-label flex items-center gap-3 text-steel-500">
            <span className="tnum text-blue-600">{index}</span>
            <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
            {kicker}
          </div>
        </Reveal>
        <Reveal delay={0.06} className="mt-5">
          <h2 className="max-w-[26ch] font-display text-h2 text-ink">{title}</h2>
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

export function TechnologyPage() {
  return (
    <div className="bg-paper">
      {/* HERO — dark, video — carries the single H1 ————————————————————— */}
      <DarkMoment
        id="hero"
        kind="video"
        label="VIDEO · macro front de tăiere · 16:9 · slow-mo"
        alt="Debitare laser cu fibră — front de tăiere în oțel"
        minH="min-h-[88vh]"
        align="end"
        overlay={0.6}
      >
        <div className="pb-4 pt-28">
          <div className="mono-label text-white/60">— TEHNOLOGIE</div>
          <h1 className="mt-6 max-w-[18ch] font-display text-display text-white">
            Debitare laser cu fibră
          </h1>
        </div>
      </DarkMoment>

      {/* 01 — TEZA: lanț integrat (light) ——————————————————————————————— */}
      <Chapter
        id="lant-integrat"
        index="01"
        kicker="— LANȚ INTEGRAT"
        title="Sursă laser, cap de tăiere și CNC — de la același producător"
      >
        <MediaPlaceholder
          kind="image"
          ratio="21 / 9"
          label="DIAGRAMĂ SVG · lanțul integrat (build-on-scroll)"
        />
      </Chapter>

      {/* 02 — DE CE HAN'S: alegerea Kauner (light) —————————————————————— */}
      <Chapter
        id="alegerea-kauner"
        index="02"
        kicker="— ALEGEREA KAUNER"
        title="De ce am ales această tehnologie"
      >
        <MediaPlaceholder
          kind="image"
          ratio="21 / 9"
          label="CITAT KAUNER + 4 CARDURI „DE CE”"
        />
      </Chapter>

      {/* 03 — CUM FUNCȚIONEAZĂ fibra (light) ———————————————————————————— */}
      <Chapter
        id="cum-functioneaza"
        index="03"
        kicker="— FIZICA"
        title="Cum funcționează un laser cu fibră"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="SCHEMĂ SVG · pompaj → fibră → FBG → ieșire (animată)"
        />
      </Chapter>

      {/* 04 — SURSA LASER (light) + sub-moment ÎNTUNECAT ————————————————— */}
      <Chapter
        id="sursa-laser"
        index="04"
        kicker="— SUBSISTEM 01"
        title="Sursa laser cu fibră"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="PANOU SPEC + VIDEO SURSĂ · slider BPP → spot"
        />
      </Chapter>

      <DarkMoment
        kind="video"
        label="VIDEO · tăiere cupru/alamă macro (reflectorizant)"
        alt="Debitare laser a metalelor reflectorizante — cupru și alamă"
        minH="min-h-[60vh]"
        align="center"
        overlay={0.58}
      >
        <div className="mono-label text-white/60">— SUB-MOMENT · REFLEXIE INVERSĂ</div>
      </DarkMoment>

      {/* 05 — CAPUL DE TĂIERE (light) ——————————————————————————————————— */}
      <Chapter
        id="cap-de-taiere"
        index="05"
        kicker="— SUBSISTEM 02"
        title="Capul de tăiere"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="STIVĂ OPTICĂ „exploded” (pinned) + variante cap"
        />
      </Chapter>

      {/* 06 — OPTICĂ, LENTILE & MENTENANȚĂ (light) —————————————————————— */}
      <Chapter
        id="optica-mentenanta"
        index="06"
        kicker="— OPTICĂ & SERVICE"
        title="Optică, lentile și mentenanță"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="ANIMAȚIE SVG · cover-slide + lentilă termică"
        />
      </Chapter>

      {/* 07 — CNC & SOFTWARE (light) ———————————————————————————————————— */}
      <Chapter
        id="cnc-software"
        index="07"
        kicker="— SUBSISTEM 03"
        title="Sistemul CNC și software"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="MOCKUP UI + DIAGRAMĂ EtherCAT"
        />
      </Chapter>

      {/* 08 — MATERIALE & PROCES (light) ———————————————————————————————— */}
      <Chapter
        id="materiale-proces"
        index="08"
        kicker="— PROCES"
        title="Materiale și gaze de tăiere"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="MACRO MUCHII + selector material → gaz"
        />
      </Chapter>

      {/* 09 — AUTOMATIZARE (dark, cinematic) ———————————————————————————— */}
      <DarkMoment
        id="automatizare"
        kind="video"
        label="VIDEO · linie automată lights-out (turn, roboți, cărucioare)"
        alt="Linie automată de debitare laser cu turn de depozitare și roboți"
        minH="min-h-[80vh]"
        align="center"
        overlay={0.6}
      >
        <div className="mono-label flex items-center gap-3 text-white/60">
          <span className="tnum text-blue-300">09</span>
          <span className="block h-px w-9 bg-blue-300/50" aria-hidden />
          AUTOMATIZARE · FMS · MES · HIOT
        </div>
        <h2 className="mt-5 max-w-[20ch] font-display text-display text-white">
          Automatizare & fabrică inteligentă
        </h2>
      </DarkMoment>

      {/* 10 — FABRICAȚIE & CONTROL CALITATE (light) ————————————————————— */}
      <Chapter
        id="fabricatie"
        index="10"
        kicker="— DOVADA"
        title="Fabricație și control de calitate"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="FOTO fabricație + BANDĂ STATISTICI (counters)"
        />
      </Chapter>

      {/* 11 — PREZENȚĂ & SERVICE KAUNER (light) ————————————————————————— */}
      <Chapter
        id="prezenta-service"
        index="11"
        kicker="— KAUNER"
        title="Prezență globală, service în România"
      >
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="HARTĂ + roata integrării + FOTO echipa Kauner"
        />
      </Chapter>

      {/* 12 — STATISTICI + CTA (light) —————————————————————————————————— */}
      <Chapter
        id="statistici-cta"
        index="12"
        kicker="— RECAPITULARE"
        title="Statistici & cerere de mostră"
      >
        <MediaPlaceholder
          kind="image"
          ratio="21 / 9"
          label="BANDĂ CIFRE (counters) + CTA final"
        />
      </Chapter>
    </div>
  );
}
