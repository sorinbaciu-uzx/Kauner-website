# KAUNER — istoric de lucru & stare proiect

> Jurnal pentru continuitate: ce am construit, cum e organizat proiectul și ce urmează.
> Ultima actualizare: **17 iulie 2026**.

---

## 1. Ce este proiectul

Site KAUNER — integrator de sisteme laser (debitare, îndoire, sudură, automatizare) în România,
pe platforma Han's Laser. Site premium, „engineered", light-first, accent albastru `#0D009F` folosit rar.

**Stack:**
- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS** (config în `tailwind.config.ts`, utilitare în `app/globals.css`)
- **Framer Motion** (animații) — helperi în `lib/motion.ts`
- **Bilingv RO/EN** client-side prin `lib/i18n/LocaleProvider.tsx` (RO default, comutare persistată în localStorage)
- Fonturi: **Archivo** (display/body) + **Spline Sans Mono** (mono/etichete)

**Sursa unică de adevăr pentru texte:** `lib/i18n/dictionaries.ts` (`ro` + `en`, EN verificat structural cu `satisfies typeof ro`).

**Remote git:** `github.com/sorinbaciu-uzx/Kauner-website` (branch `main`).
Autentificare setată **local pentru acest repo** ca `sorinbaciu-uzx` (`credential.useHttpPath=true` + user în URL-ul remote).

---

## 2. Structura proiectului

### Rute (`app/`)
| Rută | Fișier | Stare |
|---|---|---|
| `/` | `app/page.tsx` | Home — complet, cu copy RO final |
| `/echipamente` | `app/echipamente/page.tsx` | Catalog cu tab-uri pe categorii — funcțional |
| `/echipamente/[model]` | `app/echipamente/[model]/page.tsx` | 35 pagini de model (SSG) — **schelet**, fără copy real |
| `/tehnologie` | `app/tehnologie/page.tsx` | Complet (cele 4 blocuri tehnice) |
| `/service` | `app/service/page.tsx` | **Placeholder** („pagină în lucru") |
| `/echipa` | `app/echipa/page.tsx` | De verificat / placeholder |
| `/contact` | `app/contact/page.tsx` | Complet |

### Secțiuni home (`components/sections/`), în ordine
`Hero` → `BrandInBrief` („Nu vindem cutii") → `WhatWeSolve` („Ce rezolvăm") → `Equipment` („Ce oferim") →
`Technology` (teaser) → `Services` („Mai mult decât o mașină") → `Team` → `Contact`.

Alte secțiuni: `EquipmentCatalog` (pagina /echipamente), `ModelDetail` (pagina de model), `Service` (placeholder).

### Componente UI (`components/ui/`)
- `Button`, `Placeholder` (slot imagine zero-layout-shift, light), `PhotoFill` / `VideoFill` (media dark)
- `Reveal` / `RevealGroup` / `RevealItem` (intrări animate), `SectionLabel`, `Logo`, `LanguageSwitch`
- **Animații noi (fără assets):**
  - `CardFlow` — rețea de pulsuri interconectate între carduri (folosit la **Servicii**)
  - `LaserScan` — fascicul laser care scanează imaginea (folosit la **Echipamente**)
  - `CountUp` — cifre care urcă la scroll (folosit la statisticile **Tehnologie**)
  - `CapabilityMarquee` — **NEFOLOSIT** momentan (rămas din varianta veche de hero; se poate șterge)

### Brand kit (`brand-kit/`)
- `KAUNER_Brand_Guidelines.md`, `KAUNER_Brand_Story_and_Positioning.md`, `KAUNER_Homepage_Prompt_for_ClaudeCode.md`
- `copy/KAUNER_Acasa_Copy_SEO_v1.md` — **copy-ul RO final + SEO** pentru Home (sursa textelor aplicate)

---

## 3. Ce am lucrat pe 17 iulie 2026

### Echipamente (catalog + modele)
- Adăugat categoria lipsă **Debitare laser 3D**; redenumit „Abkant" → **„Mașini de îndoit"**.
- Adăugat modelele pe toate categoriile (din screenshot-uri Han's Laser): debitare țeavă (6), 3D (Seria WD),
  mașini de îndoit (5), sudură (3), automatizare (3). Debitare tablă avea deja 17.
- Modele restructurate în `{slug, name}` cu **slug independent de limbă** (o singură sursă per categorie).
- **Pagina catalog `/echipamente`** (`EquipmentCatalog`): bandă hero cu titlu + imagine care se schimbă pe
  categorie, titlu „Toate produsele", tab-uri de categorii, listă de carduri per model.
- **Pagini per model** `/echipamente/[model]` (`ModelDetail`): hero + sub-nav + Overview + Capacitate de
  debitare + Date tehnice + Produse recomandate + CTA. **Conținut placeholder** (fără copy real încă).
- `heroImage` per categorie (căi în `public/images/echipamente/…`, documentate în `public/images/ASSETS.md`).
- Cardurile „Ce oferim" de pe Home duc la categoria corectă din catalog (prin hash `#slug`).

### Copy RO Home (din `brand-kit/copy/KAUNER_Acasa_Copy_SEO_v1.md`)
- Hero: subtitlu nou + **bară de trust statică** (Putere 60 kW · Instalare & training · Service 24/7 · Piese pe stoc · Garanție extinsă).
- „Nu vindem cutii", „Ce rezolvăm" (3 coloane), Servicii (**6 carduri** — adăugat „Aplicații & optimizare proces"), Echipa, Contact.
- **EN:** doar paritate structurală — chei noi marcate `TODO(EN)` (nu s-a tradus; EN vine separat).

### Tehnologie
- Rescris cu teza integrării verticale + **4 blocuri tehnice** (Sursa laser / Cap de tăiere / CNC / Automatizare) + linia materiale & aplicații.
- **Home = teaser** (intro + link „Vezi tehnologia completă" + statistici); **`/tehnologie` = complet** (cele 4 blocuri expandate). Prop `variant="home" | "full"`.
- Banda de statistici redesenată: font display, **centrat**, cifre aliniate, certificări pe 2 rânduri (`ISO 9001 · 14001` / `CE · AEO`), etichete scurtate.

### Animații (fără assets, toate respectă `prefers-reduced-motion`)
- `CardFlow` la Servicii, `LaserScan` la Echipamente, `CountUp` la statistici Tehnologie, iconițe + linie conectivă la „Ce rezolvăm".

### UI/UX
- Micșorat titlurile de card (`text-h3` → `text-h4`) pentru ierarhie mai bună.
- **Experiment full-page scroll-snap** (pagină cu pagină) — **anulat complet** la cererea userului (inclusiv snap-ul „proximity"). Home are scroll normal acum.

### Assets & git
- Poză preview pe cardul „Debitare laser tablă": `public/images/equip-sheet.png` (**~19 MB — DE OPTIMIZAT**).
- Video hero: `public/videos/hero-laser.mp4` (4.3MB) + `.webm` (3.3MB) + poster `public/images/hero-laser.jpg`.
- **Commit + push** pe `main` (`ddc102b`).

---

## 4. Stare curentă — ce e gata vs. placeholder

**Gata:** structura site-ului, navigația + mega-meniu, copy RO Home, catalog echipamente, secțiunea Tehnologie, animațiile, SEO metadata (home, tehnologie, model).

**Placeholder / de completat:**
- **Imagini/video reale** — aproape tot e `Placeholder`. Sloturi pregătite (se activează prin `src`): hero video, imagini catalog per categorie, imagini pe cardurile Home, imagini pagini de model, poze echipă, background Tehnologie.
- **Pagini de model** — doar schelet; lipsesc copy, specificații, poze per model.
- **Traduceri EN** — multe `TODO(EN)` (bara de trust, intro servicii + cardul 6, descrieri echipă, blocurile Tehnologie, materiale). Necesită pas dedicat EN.
- **Pagini `/service` și `/echipa`** — de verificat / de construit.

---

## 5. Data viitoare — de unde continuăm (idei)

1. **Optimizează `equip-sheet.png`** (19MB → WebP/JPEG ~200–300KB, ~1600px) și decide dacă punem poze pe toate cardurile (atunci: câmp `cardImage` per echipament în dicționar, ca la `heroImage`).
2. **Poze/video reale** — pe măsură ce vin, activăm sloturile (`src`) în Hero / Technology / Equipment / Team / catalog / model.
3. **Conținut pagini de model** — copy + specs + poze per model (structură per model în dicționar).
4. **Pas EN** — traducere 1:1 a tuturor `TODO(EN)`.
5. **`/service` și `/echipa`** — conținut real.
6. Curățenie: șterge `CapabilityMarquee.tsx` dacă rămâne nefolosit.

---

## 6. Comenzi utile
```bash
npm run dev            # server local
npx tsc --noEmit       # verificare tipuri
npx next build         # build de producție (verifică și SSG-ul paginilor de model)
```
