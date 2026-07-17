"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Link2, Factory, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DarkMoment } from "@/components/ui/DarkMoment";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { IntegratedChainDiagram } from "@/components/ui/IntegratedChainDiagram";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/*
 * /tehnologie per KAUNER_Technology_Page_Prompt v1.1.
 * IMPLEMENTED with final RO copy (verbatim §4): 4.1 Hero, 4.2 Teza, 4.2b De ce Han's.
 * Remaining sections (03–12) are stubs (title + MediaPlaceholder) awaiting copy.
 * Light/dark rhythm §2.3 — dark only via <DarkMoment>. Blue budget §2.1.
 * i18n: strings inline for now; the `tech.*` key tree lands with the EN pass (§7).
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

const WHY_CARDS = [
  {
    Icon: Link2,
    title: "Un singur producător pentru tot lanțul.",
    body: (
      <>
        Majoritatea utilajelor din piață combină o sursă de la un producător, un
        cap de la altul și un CNC de la al treilea. Han&apos;s dezvoltă și
        fabrică in-house sursa (Han&apos;s Photonics), capul (Han&apos;s Focus) și
        controlul (Han&apos;s SMC). Când integrăm un utilaj, răspundem pentru un
        sistem coerent, nu pentru o adunătură de componente.
      </>
    ),
  },
  {
    Icon: Factory,
    title: "Scară și cercetare pe care le poți verifica.",
    body: (
      <>
        Fondat în <Fig>1996</Fig>, peste <Fig>7.400</Fig> de brevete,{" "}
        <Fig>30.000</Fig> de utilaje instalate în peste <Fig>100</Fig> de țări,
        un centru de fabricație cu echipamente DMG, MAZAK și ZEISS. Nu e o marcă
        apărută peste noapte; e infrastructura care garantează piese de schimb și
        continuitate peste ani.
      </>
    ),
  },
  {
    Icon: TrendingUp,
    title: "Tehnologie de vârf, la un cost care are sens.",
    body: (
      <>
        Randament la priză peste <Fig>40%</Fig>, calitate a fasciculului
        selectabilă (BPP ≤ 1/2/4), capuri inteligente cu monitorizare a
        lentilelor, automatizare completă. Performanță de nivel occidental, fără
        prima de preț care face un utilaj de neatins pentru o firmă din România.
      </>
    ),
  },
  {
    Icon: ShieldCheck,
    title: "Fiabilitate gândită pentru producție continuă.",
    body: (
      <>
        Construcție integral pe fibră fără oglinzi de aliniat, capuri etanșe cu
        tehnologie anti-praf, calibrare automată la <Fig>0,01 mm</Fig>. Tehnologie
        care nu se degradează în tura a treia — exact ce ne trebuie ca să stăm în
        spatele fiecărui utilaj vândut.
      </>
    ),
  },
];

/** Subtle key-figure emphasis (weight, not blue — keeps §2.1 budget). */
function Fig({ children }: { children: ReactNode }) {
  return <span className="tnum font-medium text-ink">{children}</span>;
}

export function TechnologyPage() {
  return (
    <div className="bg-paper">
      {/* 4.1 — HERO (dark, video) — carries the single H1 ————————————————— */}
      <DarkMoment
        id="hero"
        kind="video"
        label="VIDEO · macro slow-mo front de tăiere · 16:9 · loop 6–8s"
        alt="Debitare laser cu fibră — front de tăiere în oțel"
        minH="min-h-[88vh]"
        align="end"
        overlay={0.6}
      >
        <div className="pb-4 pt-28">
          <div className="mono-label text-white/60">— TEHNOLOGIE</div>
          <h1 className="mt-6 max-w-[20ch] font-display text-display text-white">
            Debitare laser cu fibră, pe cel mai puternic lanț tehnologic din
            industrie.
          </h1>
          <p className="mt-6 max-w-[64ch] text-body-l text-white/80">
            Debitare laser cu fibră pe echipamente în care sursa, capul de tăiere
            și controlul sunt dezvoltate și fabricate de aceeași companie. De aici
            vin fiabilitatea și precizia care nu se degradează în tura a treia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="/echipamente" variant="primary" withChevron>
              Vezi echipamentele
            </Button>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white outline-none transition-colors hover:text-blue-300"
            >
              Cere o mostră de tăiere
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                strokeWidth={2.25}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </DarkMoment>

      {/* 4.2 — TEZA: lanț integrat (light) — diagram A1 build-on-scroll ——— */}
      <section id="lant-integrat" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner pt-section-sm md:pt-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">01</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — LANȚ INTEGRAT
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[20ch] font-display text-h2 text-ink">
              Un singur lanț. Un singur responsabil.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[74ch] text-body-l text-ink-soft">
              Majoritatea utilajelor laser sunt asamblate: sursa vine de la un
              producător, capul de la altul, CNC-ul de la al treilea. Când ceva
              iese din toleranță, nimeni nu deține întreg lanțul. Han&apos;s Laser
              dezvoltă și fabrică in-house fiecare verigă — de la dioda de pompaj
              și fibra optică activă, la capul de tăiere, sistemul CNC și software.
              Aceeași companie controlează fiecare componentă critică. De aici vin
              fiabilitatea, precizia repetabilă și performanța constantă în
              producție continuă.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-6">
            <p className="mono-label text-blue-600">
              IN-HOUSE: sursă · fibră · optică · cap · CNC · software · plăci de
              control · chiller · motion
            </p>
          </Reveal>
        </div>

        <IntegratedChainDiagram />

        <div className="pb-section-sm md:pb-section" />
      </section>

      {/* 4.2b — DE CE HAN'S: alegerea Kauner (light) ————————————————————— */}
      <section id="alegerea-kauner" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">02</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — ALEGEREA KAUNER
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[24ch] font-display text-h2 text-ink">
              De ce am ales să construim pe Han&apos;s Laser
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <blockquote className="max-w-[70ch] border-l-2 border-blue-600 pl-6 font-display-600 text-h4 leading-snug text-ink">
              Suntem trei ingineri cu peste 15 ani în industrie. Am văzut destule
              utilaje care arată bine pe hârtie și cedează în producție. Când am
              ales tehnologia pe care ne punem numele, am căutat un singur lucru:
              cine controlează întreg lanțul, de la fibră la software. Răspunsul a
              fost Han&apos;s Laser.
            </blockquote>
          </Reveal>

          <RevealGroup
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-2"
          >
            {WHY_CARDS.map(({ Icon, title, body }) => (
              <RevealItem as="li" key={title} className="bg-paper p-7 md:p-8">
                <Icon className="h-6 w-6 text-steel-500" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-4 font-display-600 text-h4 text-ink">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.08} className="mt-10">
            <p className="max-w-[78ch] text-body-l text-ink-soft">
              Noi, Kauner, aducem această tehnologie în România și o facem a ta:
              consultanță de proces înainte de achiziție, configurare pentru
              materialele tale reale, punere în funcțiune, instruire și mentenanță
              locală. Tehnologia e Han&apos;s; responsabilitatea față de tine e a
              noastră.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — CUM FUNCȚIONEAZĂ fibra (light) — stub ————————————————————— */}
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

      {/* 04 — SURSA LASER (light) + sub-moment ÎNTUNECAT — stub —————————— */}
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

      {/* 05 — CAPUL DE TĂIERE (light) — stub —————————————————————————————— */}
      <Chapter id="cap-de-taiere" index="05" kicker="— SUBSISTEM 02" title="Capul de tăiere">
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="STIVĂ OPTICĂ „exploded” (pinned) + variante cap"
        />
      </Chapter>

      {/* 06 — OPTICĂ, LENTILE & MENTENANȚĂ (light) — stub ——————————————— */}
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

      {/* 07 — CNC & SOFTWARE (light) — stub ————————————————————————————— */}
      <Chapter id="cnc-software" index="07" kicker="— SUBSISTEM 03" title="Sistemul CNC și software">
        <MediaPlaceholder kind="image" ratio="16 / 9" label="MOCKUP UI + DIAGRAMĂ EtherCAT" />
      </Chapter>

      {/* 08 — MATERIALE & PROCES (light) — stub ————————————————————————— */}
      <Chapter id="materiale-proces" index="08" kicker="— PROCES" title="Materiale și gaze de tăiere">
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="MACRO MUCHII + selector material → gaz"
        />
      </Chapter>

      {/* 09 — AUTOMATIZARE (dark, cinematic) — stub —————————————————————— */}
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

      {/* 10 — FABRICAȚIE & CONTROL CALITATE (light) — stub ——————————————— */}
      <Chapter id="fabricatie" index="10" kicker="— DOVADA" title="Fabricație și control de calitate">
        <MediaPlaceholder
          kind="image"
          ratio="16 / 9"
          label="FOTO fabricație + BANDĂ STATISTICI (counters)"
        />
      </Chapter>

      {/* 11 — PREZENȚĂ & SERVICE KAUNER (light) — stub ——————————————————— */}
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

      {/* 12 — STATISTICI + CTA (light) — stub ——————————————————————————— */}
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
