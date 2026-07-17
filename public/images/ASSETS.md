# Image assets — drop-in manifest (v2)

All slots render a **zero-layout-shift placeholder** until the real file is added. Drop a file
with the **exact name + aspect ratio** below into `public/images/` and it replaces the
placeholder with no reflow.

There are two placeholder kinds:
- **Dark photographic** (`<PhotoFill>`) — hero + technology band. Cinematic laser photography.
- **Light** (`<Placeholder>`, `mist.100`) — equipment cards + team portraits.

**Art direction:** the site is **light-first**, but the *photographs* carry the drama and are
**dark, cinematic, cold-temperature** — laser cutting heads with sparks, the beam on sheet
metal, clean edges (precision macro), a clean facility. High contrast, rich black, crisp. The
beam glow may echo `#0D009F`. Avoid cheesy stock, warm "corporate" light, thumbs-up people,
neon, clutter, flat blue backgrounds.

**Alt text rule:** descriptive and technical. NEVER reference origin, brand, location, or the
manufacturing of the machine itself. (Alt text lives in the locale dictionaries.)

| File | Aspect | Section | Kind | Subject |
|---|---|---|---|---|
| `hero-laser.jpg` | ~21:9 (wide) | 5.1 Hero | dark photo | Laser cutting in action — head + sparks / beam on steel |
| `tech-bg.jpg` | wide | 5.4 Technology | dark photo | Machine / high-power beam, clean facility |
| `equip-sheet.jpg` | 16:10 | 5.5 Equipment | light | Sheet laser cutting |
| `equip-tube.jpg` | 16:10 | 5.5 Equipment | light | Tube & profile cutting |
| `equip-bending.jpg` | 16:10 | 5.5 Equipment | light | Press brake / bending |
| `equip-welding.jpg` | 16:10 | 5.5 Equipment | light | Laser welding |
| `equip-automation.jpg` | 16:10 | 5.5 Equipment | light | Automation & FMS |
| `team-1.jpg` | 1:1 | 5.6 Team | light | Team member portrait |
| `team-2.jpg` | 1:1 | 5.6 Team | light | Team member portrait |
| `team-3.jpg` | 1:1 | 5.6 Team | light | Team member portrait |

## Equipment catalogue page (`/echipamente`)

The catalogue hero shows an image that **swaps with the selected category tab**.
These slots are **already wired** (`heroImage` in the locale dictionaries) — just drop
the files at the exact paths below and they replace the placeholder with no reflow.
No code change needed.

| File | Aspect | Category | Kind | Subject |
|---|---|---|---|---|
| `echipamente/debitare-tabla.jpg` | 16:9 | Debitare laser tablă (2D) | light | Sheet laser cutting machine |
| `echipamente/debitare-teava.jpg` | 16:9 | Debitare țeavă & profile | light | Tube & profile laser cutter |
| `echipamente/debitare-3d.jpg` | 16:9 | Debitare laser 3D | light | 3D laser cutting cell |
| `echipamente/masini-de-indoit.jpg` | 16:9 | Mașini de îndoit | light | Press brake / bending |
| `echipamente/sudura-laser.jpg` | 16:9 | Sudură laser | light | Laser welding station |
| `echipamente/automatizare.jpg` | 16:9 | Automatizare & FMS | light | Automation & FMS line |

The per-model **cards** on the same page still use the light placeholder (labelled with the
model name); real per-model photos can be wired later the same way.

## Video (hero background loop)

The hero uses `<VideoFill>` — a moving version of the dark placeholder. Until a clip
is added it shows the exact same placeholder as before, so there is no visual change.

| File | Location | Notes |
|---|---|---|
| `hero-laser.mp4` | `public/videos/` | H.264 MP4 — always include (universal fallback) |
| `hero-laser.webm` | `public/videos/` | Smaller file, preferred where supported (optional) |
| `hero-laser.jpg` | `public/images/` | Poster still — shows before load + for reduced-motion visitors |

**Guidelines:** short (10–20s), silent, seamless loop, **≤ ~8 MB**. Next.js does **not**
compress video, so keep it small or it hurts load time. The loop is muted + inline so it
autoplays on mobile, and is skipped for visitors who prefer reduced motion (poster shows instead).

**Go live:** in `components/sections/Hero.tsx`, uncomment `poster`, `srcWebm` and `srcMp4`
on `<VideoFill>`.

## How to go live on a slot

- **Hero** — in `components/sections/Hero.tsx`, uncomment the `poster` / `srcMp4` / `srcWebm` props on `<VideoFill>` (see Video section above).
- **Technology** — in `components/sections/Technology.tsx`, uncomment `src="/images/tech-bg.jpg"`.
- **Equipment** — in `components/sections/Equipment.tsx`, set `src={`/images/equip-…jpg`}` per card
  (`sheet`, `tube`, `bending`, `welding`, `automation`).
- **Team** — in `components/sections/Team.tsx`, set `src={`/images/team-${i + 1}.jpg`}`.

## Editing copy / language

All RO + EN strings (including image alt text) live in `lib/i18n/dictionaries.ts`. Default
language is RO; the header `RO / EN` switch flips everything and is persisted per visitor.
