# KAUNER — Homepage Build Brief (for Claude Code) — v2

> Build the **homepage only**, from scratch, to this spec. Premium, sober, **light‑first with strong laser photography**. Bilingual **RO/EN**. Match the polish of trumpf.com / bystronic.com / salvagninigroup.com — but lighter and more editorial.

---

## 0. Use the frontend-design skill (always)

Invoke the **`frontend-design`** skill before any UI and keep applying it through every section (atmosphere, depth, composition, motion, anti‑"AI‑slop" refinement).

**Precedence:** the brand tokens here are authoritative — colors (`#0D009F` / `#0A0A0C` / `#FFFFFF`), fonts (**Archivo Expanded / Archivo / Spline Sans Mono**), the logo, and the voice are fixed and must NOT be swapped. The skill governs *craft*; this brief governs *identity*. The brief wins.

## 1. Positioning & content rules

**Brand:** KAUNER — *Engineered for Precision.* Kauner brings **world‑class laser technology to Romania and raises it to its own standard** — integrating and supporting laser **cutting, bending and automation**, backed by a senior engineering team (15+ years).

**Voice:** sober and bold. Short, direct statements. Technical but human. No empty superlatives, no exclamation marks.

**Hard rules:**
- Kauner is presented as an **integrator**. Reference the underlying technology (**Han's Laser**) only as **factual** context — never "partner / authorized distributor / powered by", and never deny such status. Use the Han's name sparingly and factually; do **not** place a Han's logo lockup next to Kauner's.
- **Bilingual RO/EN** with a language switch. RO is primary (local market); EN secondary. All copy below is given in both.
- Full positioning & long‑form story: see `KAUNER_Brand_Story_and_Positioning.md`.

## 2. Tech stack

- **Next.js (App Router, TypeScript) + Tailwind CSS**
- **framer-motion** (restrained motion), **lucide-react** (icons)
- Fonts via `next/font/google`: **Archivo** (variable — weight + width axes; `wdth 125` for expanded display, `wdth 100` body) + **Spline Sans Mono**
- **i18n RO/EN**: use `next-intl` (or a simple two‑dictionary approach) with a header language switch (`RO` / `EN`). Default `RO`. Keep all strings in locale dictionaries.
- Responsive, mobile‑first. Lighthouse ≥ 95. Honor `prefers-reduced-motion`.

## 3. Design tokens

```
kauner.blue #0D009F   ink #0A0A0C   white #FFFFFF
blue: 900 #06004A · 700 #0A0078 · 600 #0D009F · 500 #1B0FD1 (hover) · 300 #6B5CFF · 100 #ECEAFF
steel: 800 #1E1E24 · 700 #2C2C34 · 500 #5C5C66 · 400 #8A8A94 · 300 #B7B7C0 · mist.200 #E7E7EC · mist.100 #F3F3F6
```
**Usage:** white/mist dominate (~75–80%); ink for text; **blue only as accent (~3–5%)** — eyebrows, one emphasized word, the K mark, hairlines, key numerals, button hover. Dark moments are **photographic** (laser images), not flat black fields. Buttons are solid **ink** (hover → blue), never blue‑filled.

**Type:** Archivo Expanded (display, `wdth 125`, 600–800, tracking −0.015em) · Archivo (body, 400–600) · Spline Sans Mono (eyebrows/specs, 500, UPPERCASE, +0.14em, `tabular-nums`). 8px grid; section padding 140/80px; max width 1320px.

**Motion:** reveal on scroll (fade + 16px rise, 500ms, 80ms stagger); image hover scale 1.0→1.04; hairline draw‑in. Disable under reduced‑motion.

## 4. Global components

- **`<Button>`** — `primary`: solid ink, white text, sharp corners, hover → `kauner.blue`. `ghost`: 1px border (ink on light / white over photos).
- **`<SectionLabel>`** — mono uppercase eyebrow + short leading hairline in blue.
- **`<LanguageSwitch>`** — `RO / EN` toggle in the nav.
- **`<Nav>`** — fixed top, **adaptive**: transparent over the hero photo with **white** logo + white links; on scroll → solid white bar, hairline border, **ink** logo + ink links. Logo = K mark + wordmark (white over hero via `logo_K_alb.svg` + `Logo_Kauner_alb.svg`; ink on white via `logo_K.svg` + `Logo_Kauner_negru.svg`). Links: **Acasă/Home · Echipamente/Equipment · Tehnologie/Technology · Contact** + LanguageSwitch + a `ghost` "Contact" button. Mobile: full‑screen overlay. Only the homepage exists now — other links route to `#`.
- **`<Footer>`** — light (`mist.100`), top hairline. Columns: Echipamente / Companie / Contact. Cert marks (ISO · CE) monochrome. Logo `Logo_Kauner_cu_K.svg` (ink). Copyright, language, minimal legal.
- **Logo** — supplied transparent SVGs in `/public/brand/`. Never typeset the wordmark.

## 5. Homepage sections (build in this order)

> Copy is given **RO (primary) / EN**. Keep both in locale dictionaries.

### 5.1 Hero — full‑bleed laser photography
- Full‑viewport background: **laser photography** (machine cutting, sparks / beam on sheet metal). Placeholder until real images: a dark `ink` block labeled `HERO — LASER CUTTING (photo)` with a faint K watermark. Add a subtle dark scrim (left→right or bottom gradient) for text legibility. White logo + white nav over it.
- Eyebrow (mono, blue or white): RO `— TEHNOLOGIE LASER` / EN `— LASER TECHNOLOGY`
- Headline (display XL, white): RO **"Tehnologie laser de nivel mondial. Ridicată la standardul nostru."** / EN **"World‑class laser technology. Raised to our standard."** (one word may be blue, e.g. "standardul/standard")
- Subhead (white/steel.300): RO *"Kauner integrează și susține în România sisteme de debitare, îndoire și automatizare — cu o echipă de ingineri cu peste 15 ani de experiență."* / EN *"Kauner integrates and supports laser cutting, bending and automation systems in Romania — backed by a senior engineering team with 15+ years."*
- CTAs: `primary` (white‑on‑ink or solid) RO **"Vezi echipamentele"** / EN **"See the equipment"** + `ghost` (white) RO **"Discută cu noi"** / EN **"Talk to us"**.
- Bottom strip (mono, hairline dividers): RO `DEBITARE TABLĂ · DEBITARE ȚEAVĂ · ABKANT · SUDURĂ LASER · AUTOMATIZARE` / EN `SHEET CUTTING · TUBE CUTTING · BENDING · LASER WELDING · AUTOMATION`.

### 5.2 Brand in brief — light
- `<SectionLabel>` RO `— KAUNER` / EN `— KAUNER`. H2 (ink): RO **"Nu vindem cutii. Construim sisteme și stăm în spatele lor."** / EN **"We don't sell boxes. We build systems and stand behind them."**
- 2 short paragraphs (Body, steel.700, ~60ch), sober/bold: RO *"Fabricanții din România au avut mult timp două opțiuni proaste: să plătească prețul și termenele unui brand occidental, sau să cumpere ieftin și să rămână singuri. Am construit Kauner ca să ștergem acest compromis. Pornim de la cea mai puternică tehnologie din industrie și o ridicăm la propriul standard: precizie, integrare făcută de ingineri, suport care răspunde când suni."* / EN equivalent.

### 5.3 What we solve & what we bring — the serious positioning
- `<SectionLabel>` RO `— CE REZOLVĂM` / EN `— WHAT WE SOLVE`. H2: RO **"Mijlocul care lipsea: tehnologie de top, suport de elită."** / EN **"The missing middle: top technology, elite support."**
- Three‑column (or problem→solution) block on white, hairline dividers:
  - **Problema / The problem:** RO *"Tehnologia de top vine scumpă și cu termene lungi. Alternativa ieftină vine fără expertiză — mașina ajunge, dar nimeni nu o pune să producă."* / EN equivalent.
  - **Ce rezolvăm / What we solve:** RO *"Acces la tehnologie de nivel mondial, fără bariera de preț și termen. Integrare făcută de ingineri. Suport local, rapid, pe termen lung."* / EN equivalent.
  - **Ce aducem în plus / What we bring:** RO *"Standardul nostru de precizie. Ingineri cu 15+ ani, nu vânzători. Consultanță — soluția potrivită fluxului tău. Parteneriat pe viață."* / EN equivalent.

### 5.4 Technology — world‑class (factual) — can use a laser‑photo background band
- `<SectionLabel>` RO `— TEHNOLOGIE` / EN `— TECHNOLOGY`. H2: RO **"Construit pe cea mai puternică tehnologie din industrie."** / EN **"Built on the most powerful technology in the industry."**
- Short line (factual, integrator — name Han's once, factually): RO *"Integrăm tehnologia Han's Laser — al treilea cel mai mare producător de echipamente laser din lume."* / EN *"We integrate Han's Laser technology — the world's third‑largest laser equipment manufacturer."*
- Mono stat row (tabular, hairline dividers; big numerals): `#3 GLOBAL` · RO `PÂNĂ LA 40 kW`/EN `UP TO 40 kW` · `~160 m/min` · RO `180+ BIROURI / 100+ ȚĂRI`/EN `180+ OFFICES / 100+ COUNTRIES` · `ISO · CE`.
- This band may sit on a full‑bleed laser photo (white text + scrim). No partner language; no Han's logo.

### 5.5 Equipment overview — light
- `<SectionLabel>` RO `— ECHIPAMENTE` / EN `— EQUIPMENT`. H2: RO **"Ce oferim."** / EN **"What we offer."**
- Light card grid (3‑up desktop / 1‑up mobile). Each: machine image placeholder (light, 16:10, hairline, hover‑zoom), name (H3 ink), one‑line descriptor (muted), quiet `Detalii → / Learn more →` (route `#` for now). White cards, hairline borders, hover → thin blue border. No heavy fills.
  1. RO **Debitare laser tablă** / EN **Sheet laser cutting** → RO *"Debitare 2D de mare putere, viteză și calitate a muchiei."* / EN *"High‑power 2D cutting — speed and edge quality."*
  2. RO **Debitare țeavă & profile** / EN **Tube & profile cutting** → RO *"Lasere fiber pentru țevi, cu încărcare automată."* / EN *"Fiber tube lasers with automated loading."*
  3. RO **Abkant (îndoire)** / EN **Press brakes (bending)** → RO *"Îndoire precisă, de la serii mici la piese complexe."* / EN *"Precise bending, from small runs to complex parts."*
  4. RO **Sudură laser** / EN **Laser welding** → RO *"Sudură rapidă, curată, cu distorsiune minimă."* / EN *"Fast, clean welding with minimal distortion."*
  5. RO **Automatizare & FMS** / EN **Automation & FMS** → RO *"Turnuri, roboți de încărcare, producție fără oprire."* / EN *"Towers, loading robots, lights‑out production."*
- Muted line: RO *"Specificațiile complete vin pe paginile de produs."* / EN *"Full specifications live on each product page."*

### 5.6 Team — section prepared, content later
- `<SectionLabel>` RO `— ECHIPA` / EN `— THE TEAM`. H2: RO **"Ingineri, nu vânzători."** / EN **"Engineers, not salespeople."**
- One line: RO *"Punem mâna pe fiecare instalare, calibrăm fiecare mașină, instruim fiecare operator."* / EN equivalent.
- **Placeholder for 3 people** (square photo + name + role), clearly built so real bios/photos drop in later. Light `mist.100` placeholders for now. (No invented names.)

### 5.7 Contact / consultation — light
- `<SectionLabel>` RO `— CONTACT`. H2 (ink): RO **"Hai să vorbim despre producția ta."** / EN **"Let's talk about your production."**
- One line + `primary` button RO **"Discută cu noi"** / EN **"Talk to us"** + quiet email/phone text link. No big blue band.

### 5.8 Footer — light (per §4).

## 6. Images (placeholders now)

`/public/images/` + an `ASSETS.md`. Placeholders until real assets: hero & technology = **dark photographic placeholders** (`ink` block + mono label `… (photo)` + faint K); equipment & team = **light** `mist.100` blocks with hairline + mono label. Correct aspect ratios; zero layout shift on swap. Needed: `hero-laser.jpg` (cutting + sparks, ~21:9), `tech-bg.jpg` (machine/beam, wide), `equip-{sheet,tube,bending,welding,automation}.jpg` (16:10), `team-1..3.jpg` (square). Alt text descriptive/technical.

## 7. Quality bar

Premium = restraint + whitespace; sharp corners; hairlines; blue like a scalpel. Cinematic laser photography carries the drama; the rest is calm and light. Strict 8px grid. Understated motion. Semantic HTML, keyboard nav, visible focus, AA contrast (ink on white; white on photos over a scrim; blue `#0D009F` on white is fine for accents). Mobile: nav overlay, single‑column, no horizontal scroll.

## 8. Deliverable

Build from scratch (fresh Next.js app, or rebuild the homepage cleanly if a project exists). Runnable with `npm run dev`. Component‑per‑section. After building: print the local URL, list the section components, and say where to drop real logo/photos and how to edit RO/EN strings.

---

*Reference for calibration only: trumpf.com · bystronic.com · salvagninigroup.com · amada.eu. Lighter and more editorial. Never copy layouts or copy.*
