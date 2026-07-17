"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Link2, Factory, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DarkMoment } from "@/components/ui/DarkMoment";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SpecTable } from "@/components/ui/SpecTable";
import { IntegratedChainDiagram } from "@/components/ui/IntegratedChainDiagram";
import { FiberSchematic } from "@/components/ui/FiberSchematic";
import { BppFocusSlider } from "@/components/ui/BppFocusSlider";
import { OpticalStackExploded } from "@/components/ui/OpticalStackExploded";
import { ThermalLensAnim } from "@/components/ui/ThermalLensAnim";
import { CoverSlideAnim } from "@/components/ui/CoverSlideAnim";
import { EtherCatDiagram } from "@/components/ui/EtherCatDiagram";
import { FmsDiagram } from "@/components/ui/FmsDiagram";
import { IntegrationWheel } from "@/components/ui/IntegrationWheel";
import { PresenceMap } from "@/components/ui/PresenceMap";
import { Tabs } from "@/components/ui/Tabs";
import { StatBand, type Stat } from "@/components/ui/StatBand";
import { CountUp } from "@/components/ui/CountUp";
import { KaunerNote } from "@/components/ui/KaunerNote";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/*
 * /tehnologie per KAUNER_Technology_Page_Prompt v1.1.
 * IMPLEMENTED with final RO copy (verbatim §4): 4.1 Hero, 4.2 Teza, 4.2b De ce Han's.
 * Remaining sections (03–12) are stubs (title + MediaPlaceholder) awaiting copy.
 * Light/dark rhythm §2.3 — dark only via <DarkMoment>. Blue budget §2.1.
 * i18n: strings inline for now; the `tech.*` key tree lands with the EN pass (§7).
 */

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

/** Discrete monitor bezel around the UI showcase (§4.7). */
function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-md border border-line bg-paper-2 p-2.5">
        <div className="mb-2 flex gap-1.5 px-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-mist-200" />
          <span className="h-2 w-2 rounded-full bg-mist-200" />
          <span className="h-2 w-2 rounded-full bg-mist-200" />
        </div>
        <div className="overflow-hidden rounded-sm">{children}</div>
      </div>
      {/* stand */}
      <div className="mx-auto h-4 w-24 bg-gradient-to-b from-line to-transparent" aria-hidden />
      <div className="mx-auto h-1 w-40 rounded-full bg-line" aria-hidden />
    </div>
  );
}

/** One material→gas tab panel (§4.8): macro edge photo + process text. */
function MaterialPanel({
  foto,
  alt,
  children,
}: {
  foto: string;
  alt?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <MediaPlaceholder kind="image" ratio="4 / 3" label={foto} alt={alt} />
      <p className="max-w-[60ch] text-body-l text-ink-soft">{children}</p>
    </div>
  );
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
      <section id="lant-integrat" className="border-t border-line bg-paper">
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

      {/* 4.3 — CUM FUNCȚIONEAZĂ fibra (light) — schema A2 —————————————————— */}
      <section id="cum-functioneaza" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">03</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — CUM FUNCȚIONEAZĂ FIBRA
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[22ch] font-display text-h2 text-ink">
              De ce fibra taie mai repede și mai eficient.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[74ch] text-body-l text-ink-soft">
              Un laser cu fibră nu are oglinzi de aliniat și nici gaz de umplut.
              Fasciculul se naște și se amplifică chiar în interiorul unei fibre
              optice.
            </p>
          </Reveal>

          <div className="mt-12 md:mt-14">
            <FiberSchematic />
          </div>

          {/* „De ce contează" — 3 mini-carduri */}
          <RevealGroup
            as="ul"
            className="mt-14 grid gap-px overflow-hidden rounded-sharp border border-line bg-line md:grid-cols-3"
          >
            {[
              {
                t: "Eficiență.",
                b: (
                  <>
                    Randament la priză peste <Fig>40%</Fig> — de câteva ori mai
                    mult decât un laser CO₂ clasic. Mai puțină energie, cost mai
                    mic pe piesă.
                  </>
                ),
              },
              {
                t: "Focalizare.",
                b: (
                  <>
                    1080 nm e de ~<Fig>10×</Fig> mai scurt decât CO₂ (10,6 µm),
                    deci se focalizează într-un spot de ~10× mai mic — densitate
                    de putere de până la <Fig>100×</Fig> mai mare la aceeași
                    putere medie.
                  </>
                ),
              },
              {
                t: "Fiabilitate.",
                b: (
                  <>
                    Construcție integral pe fibră, fără oglinzi de reglat →
                    robustețe la vibrații și contaminare, mentenanță minimă.
                  </>
                ),
              },
            ].map((c) => (
              <RevealItem as="li" key={c.t} className="bg-paper p-7">
                <h3 className="font-display-600 text-h4 text-ink">{c.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{c.b}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4.4 — SURSA LASER — Han's Photonics / HSC (light) ———————————————— */}
      <section id="sursa-laser" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">04</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — SUBSISTEM 01
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[26ch] font-display text-h2 text-ink">
              Sursa laser — fibră, dezvoltată in-house (Han&apos;s Photonics)
            </h2>
          </Reveal>

          <div className="mt-6 max-w-[74ch] space-y-5 text-body-l text-ink-soft">
            <Reveal>
              <p>
                Sursele cu fibră Han&apos;s Photonics (seria HSC) acoperă 3–30 kW
                în regim continuu, cu configurații de mașină disponibile până la
                60 kW pentru tăiere grea. Modulul optic redesenat atinge un
                randament la priză de peste 40% — mai puțină energie consumată
                pentru aceeași putere, adică un cost de operare mai mic pe fiecare
                piesă. Platforma de control se integrează plug-and-play prin
                magistrale de câmp uzuale, cu modelare a pulsului la scară de
                microsecunde și diagnoză în timp real.
              </p>
            </Reveal>
            <Reveal>
              <p>
                <strong className="font-semibold text-ink">
                  Calitatea fasciculului (BPP).
                </strong>{" "}
                Performanța de tăiere nu ține doar de kW, ci de cât de fin se
                focalizează fasciculul. BPP (beam parameter product, în mm·mrad)
                măsoară exact asta: cu cât e mai mic, cu atât spotul e mai mic și
                densitatea de putere mai mare. HSC oferă BPP ≤ 1 / 2 / 4
                selectabil pe modelele de 3–6 kW și BPP ≤ 4 pe cele de 12–30 kW.
                Practic: BPP ≤ 1 mm·mrad focalizează sub 0,1 mm — tăiere fină,
                rapidă, cu tăietură îngustă pe tablă subțire; BPP mai mare
                distribuie energia pe un spot mai larg, cu profunzime de
                focalizare mai mare — mai stabil pe tablă groasă. Fibra de ieșire
                de 100 µm (30/50/100 µm pe modelele mici) permite alegerea
                spotului potrivit procesului.
              </p>
            </Reveal>
            <Reveal>
              <p>
                <strong className="font-semibold text-ink">Reflexie inversă.</strong>{" "}
                Cuprul, alama și aluminiul reflectă o parte din fascicul înapoi pe
                traseul optic — suficient cât să degradeze lentilele sau chiar să
                deterioreze sursa. HSC are izolare puternică la reflexia inversă,
                așa că taie inclusiv materiale foarte reflectorizante fără să pună
                în pericol sursa.
              </p>
            </Reveal>
          </div>

          {/* Panou de specificații — gama HSC (§4.4, verbatim) */}
          <div className="mt-12">
            <SpecTable
              columns={["Model", "Putere", "λ", "BPP", "Fibră ieșire", "Conector", "Randament", "Răcire"]}
              rows={[
                ["HSC-3000", "3 kW", "1080 nm", "≤1/2/4", "30/50/100 µm", "QBH", ">40%", "apă"],
                ["HSC-6000", "6 kW", "1080 nm", "≤1/2/4", "34/50/100 µm", "QBH", ">40%", "apă"],
                ["HSC-12000", "12 kW", "1080 nm", "≤4", "100 µm", "Q+/HPC", ">40%", "apă"],
                ["HSC-20000", "20 kW", "1080 nm", "≤4", "100 µm", "Q+/HPC", ">40%", "apă"],
                ["HSC-30000", "30 kW", "1080 nm", "≤4", "100 µm", "Q+/HPC", ">40%", "apă"],
              ]}
              caption="Gama HSC — seria de surse cu fibră (catalog Han's)"
            />
          </div>

          {/* Vizual interactiv A3 (BPP→spot) + foto sursă */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <BppFocusSlider />
            <div className="grid gap-6">
              <MediaPlaceholder
                kind="image"
                ratio="4 / 3"
                label="FOTO · unitate-sursă HSC (cabinet)"
                alt="Sursă laser cu fibră Han's Photonics HSC pentru debitare"
              />
              <MediaPlaceholder
                kind="image"
                ratio="16 / 9"
                label="FOTO · conector QBH / capăt de fibră"
              />
            </div>
          </div>

          <KaunerNote>
            alegem puterea și calitatea fasciculului (BPP) pentru materialele și
            grosimile tale reale, punem sursa în funcțiune și o susținem cu service
            local.
          </KaunerNote>
        </div>
      </section>

      {/* Sub-moment ÎNTUNECAT — taie cupru/alamă (reflexie inversă) —————— */}
      <DarkMoment
        kind="video"
        label="VIDEO · tăiere cupru/alamă macro (reflectorizant)"
        alt="Debitare laser a metalelor reflectorizante — cupru și alamă"
        minH="min-h-[62vh]"
        align="center"
        overlay={0.58}
      >
        <div className="mono-label text-white/60">— SUB-MOMENT · REFLEXIE INVERSĂ</div>
        <p className="mt-5 max-w-[18ch] font-display text-h1 text-white">
          Taie și ce reflectă.
        </p>
        <p className="mt-4 max-w-[46ch] text-body-l text-white/80">
          Cupru, alamă, aluminiu — fără compromis pentru sursă.
        </p>
      </DarkMoment>

      {/* 4.5 — CAPUL DE TĂIERE — Han's Focus (light) — stiva A4 pinned ——— */}
      <section id="cap-de-taiere" className="border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">05</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — SUBSISTEM 02
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[26ch] font-display text-h2 text-ink">
              Capul de tăiere — 100% design propriu (Han&apos;s Focus)
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[74ch] text-body-l text-ink-soft">
              Han&apos;s Focus dezvoltă peste 30 de tipuri de capuri, cu sistem
              optic propriu și proprietate intelectuală independentă (peste 100 de
              brevete). Capul e o stivă optică de precizie: colimatorul preia
              fasciculul divergent din fibră și îl face paralel; lentila de
              focalizare îl strânge în spotul de lucru; geamul de protecție
              sacrificial apără lentila scumpă de stropi și fum; duza dirijează
              fasciculul și gazul de asistență coaxial, iar inelul ceramic ține
              duza și face parte din sistemul capacitiv de reglare a înălțimii.
            </p>
          </Reveal>

          {/* stiva optică „exploded" — A4 (pinned) */}
          <OpticalStackExploded />

          {/* variante de cap — 3 carduri cu foto (stagger) */}
          <RevealGroup as="ul" className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                model: "HC-TJ300",
                sub: "cap inteligent de tăiere",
                alt: "Cap de tăiere laser inteligent Han's Focus HC-TJ300",
                foto: "FOTO · HC-TJ300",
                body:
                  "Monitorizează în buclă închisă temperatura, presiunea din cameră și gradul de contaminare al fiecărei lentile. Are detecție de perforare și de străpungere completă. Tehnologie brevetată anti-praf, cu rezistență ridicată la contaminare.",
              },
              {
                model: "RC206",
                sub: "cap de bizotare",
                alt: "Cap de tăiere laser pentru bizou ±45° (Han's Focus RC206)",
                foto: "FOTO · RC206 (înclinat pe bizou)",
                body:
                  "Focalizare cu servomotor la 3 m/min. Etanșare ridicată împotriva contaminării. Taie bizou la orice unghi în gama ±45°.",
              },
              {
                model: "RC304",
                sub: "cap 3D pe 5 axe",
                alt: "Cap de tăiere laser 3D pe 5 axe Han's Focus RC304",
                foto: "FOTO · RC304 pe piesă 3D",
                body:
                  "Axe cu acționare directă (direct-drive), repetabilitate ≤ 0,005°. Rotație până la 120 rot/min pentru eficiență ridicată. Protecție la coliziune din orice unghi, cu revenire rapidă după impact.",
              },
            ].map((c) => (
              <RevealItem as="li" key={c.model}>
                <MediaPlaceholder kind="image" ratio="4 / 3" label={c.foto} alt={c.alt} />
                <p className="mono-label mt-4 text-blue-600">{c.model}</p>
                <h3 className="mt-1 font-display-600 text-h4 text-ink">{c.sub}</h3>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-soft">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mono-label mt-8 text-steel-500">
            Compatibil QBH universal · FW530 pentru sudură/placare cu protecție
            tri-direcțională anti-stropi
          </p>

          <KaunerNote>
            configurăm capul potrivit proceselor tale (tablă plană, bizou, piese
            3D) și ținem optica în parametri prin service programat.
          </KaunerNote>
        </div>
      </section>

      {/* 4.6 — OPTICĂ, LENTILE & MENTENANȚĂ (light) — A5 + A6 ———————————— */}
      <section id="optica-mentenanta" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">06</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — OPTICĂ & SERVICE
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[24ch] font-display text-h2 text-ink">
              Lentilele decid cât timp taie curat mașina.
            </h2>
          </Reveal>

          {/* Sub-bloc 1 — Efectul de lentilă termică (A5) */}
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <ThermalLensAnim />
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className="font-display-600 text-h4 text-ink">Efectul de lentilă termică.</h3>
              <p className="mt-3 max-w-[64ch] text-[0.975rem] leading-relaxed text-ink-soft">
                Geamul de protecție de sub lentila de focalizare e prima linie de
                apărare și consumabilul care se schimbă cel mai des. Când se depune
                praf, ulei sau stropi pe el, contaminarea absoarbe o parte din
                fascicul, se încălzește și deformează sticla — care începe să se
                comporte ca o lentilă parazită și mută punctul de focalizare cu
                până la câțiva milimetri. Mașina crede că e la înălțimea corectă,
                dar fasciculul focalizează greșit: tăietura se degradează, apar
                bavuri, iar operatorul e tentat să urce puterea — ceea ce încălzește
                și mai tare optica. La metale reflectorizante, o parte din fascicul
                revine pe traseul optic și poate degrada acoperirile lentilelor sau
                chiar sursa.
              </p>
            </Reveal>
          </div>

          {/* Sub-bloc 2 — De ce monitorizarea rezolvă problema (A6) */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal className="lg:order-2">
              <CoverSlideAnim />
            </Reveal>
            <Reveal delay={0.06} className="lg:order-1">
              <h3 className="font-display-600 text-h4 text-ink">
                De ce monitorizarea rezolvă problema.
              </h3>
              <p className="mt-3 max-w-[64ch] text-[0.975rem] leading-relaxed text-ink-soft">
                Capul HC-TJ300 nu așteaptă ca tăietura să se strice: monitorizează
                în buclă închisă temperatura, presiunea din cameră și contaminarea
                fiecărei lentile și semnalează problema înainte ca ea să afecteze
                calitatea. Etanșarea ridicată și tehnologia brevetată anti-praf țin
                optica curată mai mult timp, iar geamul de protecție sacrificial se
                schimbă rapid, printr-o ușă de acces etanșă, fără să expui restul
                opticii.
              </p>
            </Reveal>
          </div>

          {/* Sub-bloc 3 — Calibrare automată & service */}
          <div className="mt-16">
            <Reveal>
              <h3 className="font-display-600 text-h4 text-ink">Calibrare automată & service.</h3>
              <p className="mt-3 max-w-[76ch] text-[0.975rem] leading-relaxed text-ink-soft">
                Calibrarea manuală coaxială lasă o eroare de ~0,1 mm; calibrarea
                automată o duce la 0,01 mm — de zece ori mai precis, repetabil, fără
                dependență de mâna operatorului. Compartimentul de duze cu 12
                sertare permite schimbarea rapidă a duzei potrivite fiecărui proces,
                iar inspecția vizuală automată verifică alinierea. Kauner asigură
                punerea în funcțiune, instruirea și mentenanța periodică local,
                sprijinite de rețeaua globală de service Han&apos;s — peste 180 de
                birouri și echipe de aplicații care fac întreținerea de rutină și
                răspund rapid la solicitări.
              </p>
            </Reveal>
            <RevealGroup as="ul" className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { label: "FOTO · compartiment duze (12 sertare)", alt: undefined as string | undefined },
                { label: "FOTO · stație de calibrare / inspecție", alt: undefined },
                {
                  label: "FOTO · tehnician Kauner la mentenanță",
                  alt: "Tehnician Kauner la mentenanța unei mașini de debitare laser",
                },
              ].map((f) => (
                <RevealItem as="li" key={f.label}>
                  <MediaPlaceholder kind="image" ratio="4 / 3" label={f.label} alt={f.alt} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 4.7 — CNC & SOFTWARE — Han's SMC (light) ———————————————————————— */}
      <section id="cnc-software" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">07</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — SUBSISTEM 03
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[24ch] font-display text-h2 text-ink">
              Sistemul CNC & software (Han&apos;s SMC)
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[74ch] text-body-l text-ink-soft">
              Han&apos;s SMC dezvoltă sistemul de control complet: controlerul CNC
              (seria 801/901, pe platformă Windows industrial), software-ul,
              sistemele de viziune și controlul de înălțime. Arhitectura e
              deschisă, pe bază de PC, și rulează pe magistrală EtherCAT cu
              transfer digital — imunitate mai bună la interferențe decât
              semnalele analogice sau pe puls — cu un ciclu de scanare la scară de
              microsecunde, care înseamnă contururi mici tăiate curat. Pe
              platformele de mare dinamică, controlul Han&apos;s e cuplat cu
              servo-drivere și motoare Bosch Rexroth, pentru accelerații mari și
              precizie de poziționare. Sistemul suportă conectivitate IIoT și
              diagnoză la distanță prin rețea.
            </p>
          </Reveal>

          {/* showcase UI — mockup într-un cadru discret de monitor */}
          <Reveal className="mt-12">
            <MonitorFrame>
              <MediaPlaceholder
                kind="image"
                ratio="16 / 10"
                label="MOCKUP UI · interfața CNC + nesting"
              />
            </MonitorFrame>
          </Reveal>

          {/* tabs de capabilități */}
          <div className="mt-14">
            <Tabs
              ariaLabel="Capabilități CNC & software"
              tabs={[
                {
                  label: "CAM online",
                  panel: (
                    <p className="max-w-[74ch] text-body-l text-ink-soft">
                      Programezi direct pe mașină, fără să treci pe alt calculator:
                      editezi programul NC, adaugi micro-punți, ajustezi
                      intrările/ieșirile, inserezi text de marcare, faci teșiri,
                      tăiere pe muchie comună, tăiere „din zbor” (flying cut) și
                      punți de legătură.
                    </p>
                  ),
                },
                {
                  label: "Nesting & materiale",
                  panel: (
                    <p className="max-w-[74ch] text-body-l text-ink-soft">
                      Așezarea automată a pieselor optimizează consumul de tablă
                      (nesting CNCKAD/CypNest) și importă formate uzuale — DXF,
                      DWG, PLT, AI — compatibil cu ecosistemul CypCut / CypNest.
                    </p>
                  ),
                },
                {
                  label: "Planificare producție",
                  panel: (
                    <p className="max-w-[74ch] text-body-l text-ink-soft">
                      Procesare pe loturi din liste de sarcini, procesare simultană
                      a mai multor piese pe aceeași masă, cu documentație
                      standardizată pentru trasabilitate.
                    </p>
                  ),
                },
                {
                  label: "Arhitectură",
                  panel: (
                    <p className="max-w-[74ch] text-body-l text-ink-soft">
                      Terminalul FMS unifică rutarea proceselor, BOM-ul, modelarea
                      fabricii, comenzile de producție, planificarea inteligentă și
                      colectarea de date — pentru producție cu mix mare și volum
                      mic, pe echipamente multiple.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          {/* diagrama EtherCAT — A7 */}
          <div className="mt-14">
            <EtherCatDiagram />
          </div>

          <p className="mono-label mt-8 text-steel-500">
            EtherCAT · ciclu µs · Windows IoT · diagnoză la distanță prin WiFi/rețea
          </p>

          <KaunerNote>
            te instruim pe CAM online și nesting, ca operatorii tăi să programeze
            direct pe mașină din prima săptămână.
          </KaunerNote>
        </div>
      </section>

      {/* 4.8 — MATERIALE & PROCES (light) — selector material→gaz ———————— */}
      <section id="materiale-proces" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">08</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — PROCES
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[24ch] font-display text-h2 text-ink">
              De la fascicul la muchie: procesul contează.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[74ch] text-body-l text-ink-soft">
              Calitatea muchiei nu vine doar din laser, ci din gazul de asistență
              — jetul coaxial care suflă materialul topit din tăietură și decide
              atmosfera muchiei. Alegerea corectă echilibrează viteză, aspect și
              cost.
            </p>
          </Reveal>

          {/* selector material → gaz (tabs cu crossfade) */}
          <div className="mt-12">
            <Tabs
              ariaLabel="Material și gaz de asistență"
              tabs={[
                {
                  label: "Oțel carbon",
                  panel: (
                    <MaterialPanel
                      foto="FOTO macro · muchie oțel carbon (O₂)"
                      alt="Muchie de oțel carbon debitat cu laser și oxigen"
                    >
                      Cu oxigen, reacția exotermă adaugă căldură — tăiere mai
                      rapidă și grosimi mai mari, cu o muchie oxidată care de
                      obicei se curăță înainte de vopsire. Cu aer sau gaz mixt
                      (Mix-M), muchia e mult mai curată; oțelul carbon de{" "}
                      <Fig>25–35 mm</Fig> se taie curat cu aer, iar tehnologia de
                      gaz mixt împinge tăierea rapidă până spre <Fig>40 mm</Fig>.
                    </MaterialPanel>
                  ),
                },
                {
                  label: "Inox",
                  panel: (
                    <MaterialPanel
                      foto="FOTO macro · muchie inox lucioasă (N₂)"
                      alt="Muchie de inox debitat cu laser și azot, fără oxid"
                    >
                      Cu azot (inert), muchia iese lucioasă, fără oxid, gata de
                      sudură — fără curățare. Azotul de mare presiune (tipic{" "}
                      <Fig>10–20 bar</Fig> la cap) suflă topitura fără să
                      reacționeze cu metalul. Puritatea azotului decide direct
                      calitatea muchiei.
                    </MaterialPanel>
                  ),
                },
                {
                  label: "Aluminiu",
                  panel: (
                    <MaterialPanel
                      foto="FOTO macro · muchie aluminiu"
                      alt="Muchie de aluminiu debitat cu laser"
                    >
                      Azotul previne stratul dur de oxid de aluminiu (Al₂O₃),
                      problematic la sudură. Pe grosimi medii, aerul de mare
                      presiune poate da chiar o muchie mai bună și viteze mai mari
                      decât azotul pur.
                    </MaterialPanel>
                  ),
                },
                {
                  label: "Cupru/Alamă",
                  panel: (
                    <MaterialPanel
                      foto="FOTO macro · muchie cupru/alamă"
                      alt="Muchie de cupru și alamă debitate cu laser"
                    >
                      Foarte reflectorizante — aici contează izolarea la reflexie
                      inversă a sursei. Se taie cu azot pentru muchie curată;
                      procesul cere o sursă care suportă întoarcerea fasciculului
                      fără risc.
                    </MaterialPanel>
                  ),
                },
                {
                  label: "Titan",
                  panel: (
                    <MaterialPanel
                      foto="FOTO macro · muchie titan (argon)"
                      alt="Muchie de titan debitat cu laser și argon"
                    >
                      Cu argon, protecție maximă a muchiei împotriva oxidării,
                      pentru aplicații exigente.
                    </MaterialPanel>
                  ),
                },
              ]}
            />
          </div>

          {/* sub-context — ce taie Kauner */}
          <Reveal className="mt-12">
            <p className="max-w-[80ch] text-[0.95rem] leading-relaxed text-steel-500">
              Tăiem oțel carbon, inox, aluminiu, cupru, alamă și titan — tablă,
              țeavă, profile și grinzi H — pentru fabricație de metal, construcții
              metalice, auto, mobilier, utilaj greu și energie nouă.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4.9 — AUTOMATIZARE FMS·MES·HIOT (întunecat, cinematic) —————————— */}
      <DarkMoment
        id="automatizare"
        kind="video"
        label="VIDEO · linie automată lights-out (turn, roboți, cărucioare)"
        alt="Linie automată de debitare laser cu turn de depozitare și roboți"
        minH="min-h-screen"
        align="center"
        overlay={0.6}
      >
        <div className="mono-label flex items-center gap-3 text-white/60">
          <span className="tnum text-blue-300">09</span>
          <span className="block h-px w-9 bg-blue-300/50" aria-hidden />
          AUTOMATIZARE · FMS · MES · HIOT
        </div>
        <h2 className="mt-6 max-w-[18ch] font-display text-display text-white">
          Producție fără operator, în tura a treia.
        </h2>
        <p className="mt-6 max-w-[62ch] text-body-l text-white/80">
          Turn de depozitare, roboți de încărcare/descărcare, cărucioare de schimb
          și dispecerizare FMS+PLC+CNC — linia se conduce singură.
        </p>
      </DarkMoment>

      {/* revenire pe deschis — paragraf + diagramă A8 + bandă rezultate */}
      <section className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <p className="max-w-[76ch] text-body-l text-ink-soft">
              Peste utilaj, Han&apos;s integrează automatizarea completă: turn de
              depozitare tablă, roboți de încărcare/descărcare, cărucioare de
              schimb pe două niveluri și un sistem de dispecerizare FMS+PLC+CNC
              pentru producție „lights-out”. Terminalul FMS unifică rutarea
              proceselor, BOM-ul, comenzile și planificarea. Platforma MES și HIOT
              (IoT-ul industrial Han&apos;s) conectează fiecare mașină:
              monitorizare în timp real, analiză pe big data, predicție de opriri
              și notificări automate de mentenanță.
            </p>
          </Reveal>

          <div className="mt-12">
            <FmsDiagram />
          </div>

          {/* bandă rezultate — counters, cu semnul minus păstrat */}
          <RevealGroup
            as="ul"
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-10 lg:grid-cols-4 lg:gap-x-0"
          >
            {[
              { note: "CICLU DE PRODUCȚIE", value: "25" },
              { note: "REBUT", value: "18" },
              { note: "COST CU FORȚA DE MUNCĂ", value: "30" },
              { note: "STOC", value: "23" },
            ].map((r, i) => (
              <RevealItem
                as="li"
                key={r.note}
                className={`min-w-0 text-center lg:px-6 ${
                  i > 0 ? "lg:border-l lg:border-line" : ""
                }`}
              >
                <span className="mono-label flex min-h-[2.4em] items-end justify-center text-steel-500">
                  {r.note}
                </span>
                <p className="tnum mt-3 font-display-600 leading-none tracking-tight text-ink text-[clamp(1.5rem,2.4vw,2rem)]">
                  −<CountUp value={r.value} />
                  <span className="align-baseline text-[0.7em]">%</span>
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <KaunerNote>
            dimensionăm automatizarea la volumul tău real și o integrăm în fluxul
            existent, fără să-ți oprim producția.
          </KaunerNote>
        </div>
      </section>

      {/* 4.10 — FABRICAȚIE & CONTROL CALITATE (light) ———————————————————— */}
      <section id="fabricatie" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">10</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — DOVADA
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[24ch] font-display text-h2 text-ink">
              Fabricația: unde precizia devine repetabilă.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[76ch] text-body-l text-ink-soft">
              Centrul de fabricație Han&apos;s a investit aproape 60 de milioane
              USD în echipamente de producție și inspecție de înaltă precizie:
              centre de prelucrare pe 5 axe DMG (Germania), linii orizontale
              automate MAZAK și mașini de măsurat în coordonate ZEISS (Germania).
              Corpurile de mașină, componentele funcționale, sistemul optic și cel
              de control sunt fabricate intern — de aceea toleranțele se păstrează
              de la prima piesă la a mia.
            </p>
          </Reveal>

          {/* bandă statistici de fabricație — counters */}
          <div className="mt-12">
            <StatBand
              tone="light"
              columnsClass="sm:grid-cols-3"
              items={
                [
                  { note: "ECHIPAMENTE DE PRECIZIE", value: "~60", unit: "M USD" },
                  { note: "SETURI CNC DE ÎNALTĂ PRECIZIE", value: "6000" },
                  { note: "PRIMA SOLUȚIE DE PRELUCRARE LA", value: "14", unit: "m" },
                ] as Stat[]
              }
            />
          </div>

          {/* foto echipamente premium de fabricație */}
          <RevealGroup as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "FOTO · centru de prelucrare 5 axe DMG",
              "FOTO · linie orizontală automată MAZAK",
              "FOTO · mașină de măsurat în coordonate ZEISS",
            ].map((l) => (
              <RevealItem as="li" key={l}>
                <MediaPlaceholder kind="image" ratio="4 / 3" label={l} />
              </RevealItem>
            ))}
          </RevealGroup>

          {/* control calitate — counters + certificări */}
          <div className="mt-14">
            <StatBand
              tone="light"
              columnsClass="sm:grid-cols-3"
              items={
                [
                  { note: "INGINERI DE CALITATE", value: "150+" },
                  { note: "TIPURI DE INSTRUMENTE DE MĂSURĂ", value: "200+" },
                  { note: "EXPERȚI QC", value: "100+" },
                ] as Stat[]
              }
            />
            <p className="mono-label mt-8 text-steel-500">
              Certificări: ISO 9001 · ISO 14001 · CE · AEO
            </p>
          </div>
        </div>
      </section>

      {/* 4.11 — PREZENȚĂ & SERVICE KAUNER (light) ————————————————————————— */}
      <section id="prezenta-service" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">11</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — KAUNER
            </div>
          </Reveal>
          <Reveal delay={0.06} className="mt-5">
            <h2 className="max-w-[22ch] font-display text-h2 text-ink">
              Tehnologie globală, prezență locală.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-[76ch] text-body-l text-ink-soft">
              Han&apos;s Laser acoperă întreg ciclul — cercetare, proiectare,
              fabricație și service post-vânzare — cu o rețea de peste 180 de
              birouri în 100+ țări și 30.000 de utilaje instalate global. Kauner
              aduce această tehnologie în România cu o echipă de trei ingineri și
              peste 15 ani de experiență în industrie: consultanță de proces,
              punere în funcțiune, instruire și mentenanță — local, în limba ta, cu
              timp de răspuns scurt.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <IntegrationWheel />
            </Reveal>
            <div className="space-y-8">
              <Reveal delay={0.06}>
                <PresenceMap />
              </Reveal>
              <Reveal delay={0.1}>
                <MediaPlaceholder
                  kind="image"
                  ratio="16 / 9"
                  label="FOTO · echipa Kauner (3 ingineri)"
                  alt="Echipa Kauner — ingineri debitare laser în România"
                />
              </Reveal>
            </div>
          </div>

          <p className="mono-label mt-10 text-blue-600">Integrator Han&apos;s Laser în România.</p>
        </div>
      </section>

      {/* 4.12 — STATISTICI + CTA (light) —————————————————————————————————— */}
      <section id="statistici-cta" className="cv-section border-t border-line bg-paper">
        <div className="container-kauner py-section-sm md:py-section">
          <Reveal>
            <div className="mono-label flex items-center gap-3 text-steel-500">
              <span className="tnum text-blue-600">12</span>
              <span className="block h-px w-9 bg-blue-600/50" aria-hidden />
              — RECAPITULARE
            </div>
          </Reveal>

          <div className="mt-8">
            <StatBand
              tone="light"
              columnsClass="sm:grid-cols-2 lg:grid-cols-4"
              items={
                [
                  { note: "PRODUCĂTOR MONDIAL", value: "#3" },
                  { note: "PUTERE DISPONIBILĂ", value: "60", unit: "kW" },
                  { note: "VITEZĂ POZIȚIONARE", value: "~280", unit: "m/min" },
                  { note: "MAȘINI INSTALATE", value: "30.000+" },
                  { note: "REȚEA GLOBALĂ", value: "", lines: ["100+ țări", "180+ birouri"] },
                  { note: "BREVETE", value: "7.400+" },
                  { note: "CERTIFICĂRI", value: "", lines: ["ISO 9001 · 14001", "CE · AEO"] },
                ] as Stat[]
              }
            />
          </div>

          {/* CTA final */}
          <div className="mt-20 border-t border-line pt-14">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-h1 text-ink">
                Vrei să vezi ce iese?
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="mt-5">
              <p className="max-w-[56ch] text-body-l text-ink-soft">
                Trimite-ne un desen și îți tăiem o mostră reală, pe materialul tău.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-9">
              <div className="flex flex-wrap items-center gap-6">
                <Button href="/contact" variant="primary" withChevron>
                  Cere o mostră de tăiere
                </Button>
                <Link
                  href="/echipamente"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-ink outline-none transition-colors hover:text-blue-600"
                >
                  Vezi echipamentele
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
