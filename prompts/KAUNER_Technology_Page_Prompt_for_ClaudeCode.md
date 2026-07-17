# KAUNER — Pagina TEHNOLOGIE
### Prompt de construcție pentru Claude Code · v1.1

> **Ce este acest document.** Specificația completă a paginii `/tehnologie` (RO primară): arhitectură, copy final, direcție vizuală, mișcare și brief media. Este scris ca să fie executat de Claude Code în proiectul existent (Next.js App Router · TypeScript · Tailwind · Framer Motion). Copy-ul EN se livrează într-o a doua trecere — vezi §7.
>
> **Principiu de bază.** Nu rescriem site-ul. Evoluăm pagina existentă păstrând poziționarea de *integrator* (Han's Laser referențiat strict factual, fără pretenții de distribuție autorizată) și sistemul de brand *light-first premium*. Vocea: **inginer orientat comercial** — precis, tehnic, dar lizibil; zero limbaj de broșură.
>
> **v1.1 (adăugiri).** (1) Vocea Kauner țesută prin pagină: secțiunea „De ce Han's: alegerea Kauner" (§4.2b) + micro-concluzii „Pentru tine, prin Kauner" pe piloni. (2) Strat SEO on-page complet (§5B): hartă de cuvinte-cheie RO, titluri optimizate natural, meta, alt-text, linkuri interne, schema.org. Cadru pentru Kauner↔Han's: **alegere de inginerie, nu parteneriat formal** — consistent cu poziționarea de integrator.

---

## 0. Rezumat executiv — deciziile pe care le-ai cerut

Cele 7 puncte din brief, rezolvate pe scurt (detaliile sunt în secțiunile următoare):

1. **Scroll & structură** → **fluid, cu „capitole", nu slab-uri rigide.** Un flux continuu de citit pe fundal deschis (lizibilitate pentru text dens), punctat de 2–3 **momente foto/video întunecate full-bleed** care dau dramatism și lasă ochiul să respire. Fără scrolljack pe toată pagina (un inginer vrea să scaneze); doar 2 momente *pinned* pentru explicativele-cheie (traseul fasciculului, stiva optică a capului).
2. **Culori & treceri** → alb ~78%, cerneală (near-black) pentru text și pentru momentele foto, **albastru `#0D009F` ca accent rar (~3–5%)**: numere de index, o linie/accent per capitol, highlight pe cifra-cheie, stări hover. Trecerile deschis→întunecat se fac prin momentele foto (palate-cleanser), nu prin blocuri de culoare plată. **Reparăm greșeala paginii actuale: negru plat pe tot** → încalcă regula „dark doar fotografic".
3. **Descriere tehnică hardware→software** → 4 piloni (Sursă / Cap / CNC & software / Automatizare) extinși în secțiuni proprii, plus un explicativ „cum funcționează un laser cu fibră", o secțiune de **optică/lentile/mentenanță** (ai cerut-o explicit) și o secțiune de **materiale & proces (gaze)**.
4. **Surse / capuri / CNC / automatizări** → fiecare cu specificații verificate din catalogul Han's + fundamente științifice, și fiecare cu media dedicată (video, foto, animație) — vezi §4.
5. **Research** → făcut. Surse: catalogul Han's Overseas 2025, site-urile oficiale Han's (hansme.net, hanslaser.net, hansfocus.com), dealeri tehnici, plus articole/lucrări (Springer — gaz mixt oțel inox gros; RP-Photonics — lasere cu fibră; brevete USPTO — pompaj Yb 976 nm; science.gov — BPP/M²). Toate cifrele din copy sunt verificabile.
6. **Documentat, dar fără balast** → fiecare paragraf spune ceva măsurabil (µm, mm·mrad, bar, kW, °, %, ms). Nimic „cel mai bun din lume" fără cifră în spate.
7. **Idei media** → brief complet, consolidat în §5 (listă de filmări + fotografii + animații, cu prioritate și cu ce punem *acum* ca placeholder vs. ce filmăm *ulterior*).

**Plus, în v1.1 (cerute ulterior):**

8. **Kauner, țesut prin pagină** → secțiunea dedicată „De ce Han's: alegerea Kauner" (§4.2b) explică raționamentul de inginerie din spatele alegerii (de ce am ales cea mai bună tehnologie), iar fiecare pilon tehnic se închide cu o micro-concluzie „Pentru tine, prin Kauner". Fără ea, pagina ar părea o pagină Han's; cu ea, e Kauner. Cadru: **alegere de inginerie**, nu parteneriat formal.
9. **SEO on-page** → strat complet în §5B: hartă de cuvinte-cheie RO (bazată pe ce caută efectiv piața: „debitare laser fibră", „mașină de debitat cu laser", „cap de tăiere laser" etc.), titluri H1/H2 optimizate natural, meta title/description, alt-text, linkuri interne spre paginile de echipamente, schema.org. **Fără keyword stuffing** — cuvintele intră în vocea de inginer, nu peste ea.

---

## 1. Filozofia paginii

**Ce comunicăm, în ordine:** integrare verticală → fizica din spate → cele patru subsisteme → proces & materiale → automatizare → dovada industrială (fabricație, calitate, prezență). Argumentul central rămâne cel din pagina actuală și e cel mai puternic din piață: *majoritatea utilajelor laser sunt asamblate din surse, capuri și CNC de la producători diferiți; Han's Laser dezvoltă și fabrică in-house întregul lanț optic–mecanic–de control — aceeași companie controlează fiecare componentă critică.*

**Vocea — inginer orientat comercial.**
- ✅ „Randamentul la priză depășește 40% — mai puțină energie pentru aceeași putere, deci cost mai mic pe piesă."
- ✅ „BPP ≤ 1 mm·mrad focalizează fasciculul într-un spot sub 0,1 mm; asta e densitatea de putere care taie curat inox subțire la viteză mare."
- ❌ „Soluții revoluționare de ultimă generație pentru clienți exigenți." (gol → interzis)
- ❌ Superlative fără cifră, adjective în lanț, „lider incontestabil".

**Reguli redacționale.**
- Cifrele sunt eroii. Adjectivele sunt rare.
- Termenii tehnici se folosesc corect și, prima dată, se explică într-o propoziție (ex. „reflexia inversă — lumina reflectată de metale lucioase care revine pe traseul optic").
- Han's se numește factual: „sistemele Han's Laser", „sursele Han's Photonics", „capurile Han's Focus", „controlul Han's SMC". Niciodată „partenerul nostru oficial" sau „distribuitor autorizat".
- Unde Han's combină componente terțe de top (ex. servo Bosch Rexroth pe platformele de mare dinamică), o spunem — întărește credibilitatea, nu o slăbește.

---

## 2. Sistemul vizual al paginii

### 2.1 Tokens (aliniate la brand kit-ul existent)
```
--ink:        #0B0B0C   /* text principal, fundaluri foto întunecate */
--ink-soft:   #26262B   /* text secundar pe deschis */
--paper:      #FFFFFF   /* fundal dominant */
--paper-2:    #F5F5F4   /* benzi/carduri, contrast subtil */
--line:       #E4E4E2   /* rule/borders 1px pe deschis */
--line-dark:  rgba(255,255,255,0.14) /* rule pe întunecat */
--blue:       #0D009F   /* ACCENT RAR — vezi bugetul de mai jos */
--blue-tint:  rgba(13,0,159,0.06)    /* wash foarte discret sub un highlight */
```
**Buget de albastru (strict).** Per capitol, albastrul apare în cel mult: (1) numărul de index al secțiunii, (2) o singură linie/underline de accent, (3) cifra-cheie a unei statistici, (4) hover pe linkuri/butoane. Butoanele rămân **cerneală plină cu hover albastru**, niciodată umplute cu albastru în repaus.

### 2.2 Tipografie (existentă)
- **Archivo Expanded** (`wdth 125`) — titluri de capitol și cifre mari de spec.
- **Archivo** — body, paragrafe tehnice.
- **Spline Sans Mono** — etichete, unități, coduri de model (`HSC-30000`, `RC304`, `EtherCAT`), numere de index. Monospace = semnal de „dată tehnică".

### 2.3 Ritmul deschis/întunecat (harta paginii)
Fundalul deschis domină. Momentele întunecate sunt **exclusiv fotografice/video** (imagine reală full-bleed sub un strat de întunecare), niciodată un dreptunghi negru plat.

```
HERO ................... ÎNTUNECAT  (video macro front de tăiere)
Teza: lanț integrat .... DESCHIS    (diagramă construită la scroll)
Cum funcționează ....... DESCHIS    (schemă animată)
Sursa laser ............ DESCHIS    (+ sub-moment ÎNTUNECAT: tăiere cupru/alamă)
Capul de tăiere ........ DESCHIS    (stivă optică „exploded", pinned)
Optică / lentile / ment. DESCHIS
CNC & software ......... DESCHIS    (showcase UI + arhitectură EtherCAT)
Materiale & proces ..... DESCHIS    (selector interactiv material→gaz)
Automatizare (FMS) ..... ÎNTUNECAT  (video linie lights-out)
Fabricație & calitate .. DESCHIS
Prezență & service ..... DESCHIS    (hartă + roata integrării + echipa Kauner)
Statistici + CTA ....... DESCHIS
```

### 2.4 Treceri între capitole
- Deschis → întunecat: fundalul foto **intră full-bleed** și textul de deasupra apare cu un `y: 24 → 0`, `opacity 0 → 1`. Momentul întunecat ține 100vh sau mai puțin; la ieșire, revine pe alb.
- Deschis → deschis: separator prin **spațiu generos** (min. 120px desktop / 72px mobil) + o **rule subțire de 1px `--line`** cu, opțional, un mic index mono (`02 — TEHNOLOGIE`) în albastru. Fără linii groase, fără schimbări bruște de fundal.
- Regula de aur: nicio trecere nu folosește un bloc de culoare plină ca separator. Dramatismul vine din foto, nu din vopsea.

### 2.5 Primitive de mișcare (Framer Motion)
Discret, „premium", nu jucăuș. Respectă `prefers-reduced-motion`.
```tsx
// Reveal standard la intrarea în viewport
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Stagger pentru liste de spec / carduri
const stagger = { whileInView: { transition: { staggerChildren: 0.08 } } };

// Cifre care „numără" la intrare (statistici) — hook simplu cu useInView + requestAnimationFrame
```
- **Momente pinned (2 max):** traseul fasciculului (§4.2/4.3) și stiva optică a capului (§4.5) folosesc `position: sticky` + `useScroll`/`useTransform` ca desenul să se construiască pe măsură ce derulezi. Durată scurtă (≈1.2–1.5 ecrane fiecare), apoi eliberează scroll-ul.
- **Ambient b-roll:** video `muted autoplay loop playsInline`, pornit doar la `whileInView`, oprit când iese (economie CPU/baterie).
- **Parallax:** foarte subtil (≤8% deplasare) doar pe momentele foto întunecate.

### 2.6 Reguli tehnice media (pentru Claude Code)
- Extinde **sistemul de placeholder de imagine existent** cu un `<MediaPlaceholder>` care acceptă `kind="image|video"`, `ratio`, `label`, `caption`. Acum randează un bloc cu aspect-ratio corect, textură discretă și eticheta filmării dorite (ex. „VIDEO · macro front tăiere · 16:9 · slow-mo"). Ulterior înlocuim `src`.
- Video: `<video>` cu `poster` (placeholder), `preload="none"`, `muted loop playsInline autoPlay` doar în viewport. Format `.webm` + fallback `.mp4`, țintă ≤ 6–8 MB pentru clipurile ambientale (5–8s), loop curat.
- Imagini: `next/image`, `sizes` corecte, `loading="lazy"` sub fold, dimensiuni exportate la 1x/2x.
- Diagramele animate: **SVG inline** animat cu Framer (nu GIF, nu video) — se scalează, e crisp, e ușor.
- Performanță: momentele grele (video) lazy; niciun autoplay simultan a două video-uri; `content-visibility: auto` pe secțiunile lungi.
- Accesibilitate: fiecare video ambiental are `aria-hidden` + un `figcaption` text; contrast text pe foto ≥ 4.5:1 (folosește overlay `--ink` la 55–70%).

---

## 3. Arhitectura paginii — hartă rapidă

| # | Secțiune | Fundal | Media principală | Interacțiune |
|---|----------|--------|------------------|--------------|
| 1 | Hero | întunecat | video macro tăiere | — |
| 2 | Teza: lanț integrat | deschis | diagramă SVG build-on-scroll | pinned scurt |
| 2b | De ce Han's: alegerea Kauner | deschis | citat Kauner + 4 motive (carduri) | reveal |
| 3 | Cum funcționează fibra | deschis | schemă SVG animată | hover pe etape |
| 4 | Sursa laser (Han's Photonics) | deschis | panou spec + video sursă; sub-moment cupru | slider BPP→spot |
| 5 | Capul de tăiere (Han's Focus) | deschis | stivă optică „exploded" + variante cap | pinned scurt |
| 6 | Optică, lentile & mentenanță | deschis | animație cover-slide + lentilă termică | — |
| 7 | CNC & software (Han's SMC) | deschis | mockup UI + diagramă EtherCAT | tabs |
| 8 | Materiale & proces | deschis | macro muchii + selector | tabs material→gaz |
| 9 | Automatizare (FMS·MES·HIOT) | întunecat | video linie lights-out | — |
| 10 | Fabricație & control calitate | deschis | foto DMG/MAZAK/ZEISS + bandă stat | counters |
| 11 | Prezență & service Kauner | deschis | hartă + roata integrării + echipa | — |
| 12 | Statistici + CTA | deschis | bandă cifre | counters |

---

## 4. Secțiune cu secțiune

> Pentru fiecare: **Scop · Layout · Copy RO · Media · Mișcare · Note.** Copy-ul e final; poate fi turnat direct.

---

### 4.1 HERO — întunecat, video

**Scop.** Un singur cadru care spune „aici e tehnologie serioasă". Fără explicații — imaginea și titlul.

**Layout.** Video full-bleed 100vh (sau 88vh desktop), overlay `--ink` 60%, titlu jos-stânga aliniat la grila site-ului, eyebrow mono deasupra. Un buton cerneală „Vezi echipamentele" + un link text „Cere o mostră de tăiere".

**Copy RO.**
- Eyebrow (mono): `— TEHNOLOGIE`
- Titlu (Archivo Expanded) — **acesta e H1-ul paginii**: **Debitare laser cu fibră, pe cel mai puternic lanț tehnologic din industrie.**
- Subtitlu (1 rând): Debitare laser cu fibră pe echipamente în care sursa, capul de tăiere și controlul sunt dezvoltate și fabricate de aceeași companie. De aici vin fiabilitatea și precizia care nu se degradează în tura a treia.
- CTA: `Vezi echipamentele` (buton cerneală) · `Cere o mostră de tăiere` (link)

**Media.** `VIDEO · macro slow-motion al frontului de tăiere` (scântei care curg, muchia incandescentă, mișcarea capului). 16:9, loop 6–8s, gradat spre întunecat pe margini pentru lizibilitatea textului. *Alternativă foto* dacă nu avem video: macro al muchiei incandescente.

**Mișcare.** Titlu `y:24→0` la mount; overlay ușor pulsat (nu vizibil agresiv); scroll-cue jos.

**Note.** Poster placeholder obligatoriu (hero nu așteaptă niciodată video). Nu autoplay cu sunet.

---

### 4.2 TEZA — lanț integrat (deschis, diagramă construită la scroll)

**Scop.** Demonstrăm vizual afirmația centrală: un singur furnizor pentru tot lanțul.

**Layout.** Titlu + paragraf scurt sus; sub el, o **diagramă orizontală SVG** care se desenează pe scroll: `diodă de pompaj → fibră dopată (sursă) → fascicul → colimator → focalizare → duză (cap) → CNC → mașină → automatizare`. Fiecare nod are o etichetă mono; sub diagramă, o linie: „Toate — dezvoltate și fabricate in-house de Han's Laser."

**Copy RO.**
- Titlu: **Un singur lanț. Un singur responsabil.**
- Paragraf: Majoritatea utilajelor laser sunt asamblate: sursa vine de la un producător, capul de la altul, CNC-ul de la al treilea. Când ceva iese din toleranță, nimeni nu deține întreg lanțul. Han's Laser dezvoltă și fabrică in-house fiecare verigă — de la dioda de pompaj și fibra optică activă, la capul de tăiere, sistemul CNC și software. Aceeași companie controlează fiecare componentă critică. De aici vin fiabilitatea, precizia repetabilă și performanța constantă în producție continuă.
- Sub-linie (mono, albastru): `IN-HOUSE: sursă · fibră · optică · cap · CNC · software · plăci de control · chiller · motion`

**Media.** Diagramă SVG animată (fără foto). Nodurile se aprind secvențial la derulare; linia dintre ele se „trage" ca un fascicul.

**Mișcare.** *Pinned scurt* (≈1.2 ecrane): `useScroll` mapează progresul la lungimea liniei desenate și la aprinderea nodurilor. Reduced-motion: diagrama apare statică, completă.

**Note.** E o afirmație de brand puternică și adevărată — o susținem cu lista de componente pe care Han's chiar le face intern (documentat: motion & CNC, ghidaje/șuruburi cu bile, viziune & CNC, cap laser, placă de control, chiller, sursă).

---

### 4.2b DE CE HAN'S: ALEGEREA KAUNER (deschis) — vocea Kauner

**Scop.** Puntea dintre „ce e tehnologia" și „de ce o alege Kauner". Aici răspundem direct la întrebarea cumpărătorului: *de ce construiți pe Han's și nu pe altceva?* Răspunsul, spus ca ingineri: pentru că, atunci când evaluezi piața onest, Han's e platforma care dă cel mai mult control pe tot lanțul. Cadru: **alegere de inginerie**, nu parteneriat formal — spunem de ce am ales această tehnologie, nu că am semnat cu cineva.

**Layout.** Titlu + un citat scurt al Kauner (echipa, ca voce), apoi **4 carduri „De ce"** (fiecare cu o cifră/faptă în spate) și o linie de închidere despre rolul Kauner. Ton personal, la persoana întâi plural („noi, Kauner").

**Copy RO.**
- Titlu: **De ce am ales să construim pe Han's Laser**
- Citat (Kauner, evidențiat): Suntem trei ingineri cu peste 15 ani în industrie. Am văzut destule utilaje care arată bine pe hârtie și cedează în producție. Când am ales tehnologia pe care ne punem numele, am căutat un singur lucru: cine controlează întreg lanțul, de la fibră la software. Răspunsul a fost Han's Laser.
- Card 1 — **Un singur producător pentru tot lanțul.** Majoritatea utilajelor din piață combină o sursă de la un producător, un cap de la altul și un CNC de la al treilea. Han's dezvoltă și fabrică in-house sursa (Han's Photonics), capul (Han's Focus) și controlul (Han's SMC). Când integrăm un utilaj, răspundem pentru un sistem coerent, nu pentru o adunătură de componente.
- Card 2 — **Scară și cercetare pe care le poți verifica.** Fondat în 1996, peste 7.400 de brevete, 30.000 de utilaje instalate în peste 100 de țări, un centru de fabricație cu echipamente DMG, MAZAK și ZEISS. Nu e o marcă apărută peste noapte; e infrastructura care garantează piese de schimb și continuitate peste ani.
- Card 3 — **Tehnologie de vârf, la un cost care are sens.** Randament la priză peste 40%, calitate a fasciculului selectabilă (BPP ≤ 1/2/4), capuri inteligente cu monitorizare a lentilelor, automatizare completă. Performanță de nivel occidental, fără prima de preț care face un utilaj de neatins pentru o firmă din România.
- Card 4 — **Fiabilitate gândită pentru producție continuă.** Construcție integral pe fibră fără oglinzi de aliniat, capuri etanșe cu tehnologie anti-praf, calibrare automată la 0,01 mm. Tehnologie care nu se degradează în tura a treia — exact ce ne trebuie ca să stăm în spatele fiecărui utilaj vândut.
- Închidere: Noi, Kauner, aducem această tehnologie în România și o facem a ta: consultanță de proces înainte de achiziție, configurare pentru materialele tale reale, punere în funcțiune, instruire și mentenanță locală. Tehnologia e Han's; responsabilitatea față de tine e a noastră.

**Media.** Fără foto grea aici (secțiunea e despre argument, nu spectacol). Cardurile pot avea câte o pictogramă-linie discretă (lanț, fabrică, grafic, scut). Opțional `FOTO · echipa Kauner` mic, lângă citat — dar poate rămâne și în §4.11 ca să nu dublăm.

**Mișcare.** Citatul intră cu reveal; cardurile cu stagger. Cifrele din carduri (7.400, 30.000, 40%, 0,01) pot avea un mic accent la intrare.

**Note.** Aceasta e secțiunea care personalizează pagina fără să încalce poziționarea. Verbul-cheie e „am ales" / „construim pe", niciodată „partenerul/distribuitorul nostru". Fiecare card are o faptă verificabilă — nimic din „cei mai buni din lume" fără cifră.

---



**Scop.** Explicativul care ridică nivelul paginii de la „specificații" la „înțelegem fizica". Face pagina credibilă în fața unui inginer și educativă pentru un cumpărător.

**Layout.** Două coloane: stânga schema SVG animată a sursei; dreapta, text pe 3–4 pași scurți numerotați. Sub ele, comparația fibră vs. CO₂ într-un rând de „de ce contează".

**Copy RO.**
- Titlu: **De ce fibra taie mai repede și mai eficient.**
- Intro (1 rând): Un laser cu fibră nu are oglinzi de aliniat și nici gaz de umplut. Fasciculul se naște și se amplifică chiar în interiorul unei fibre optice.
- Pas 1 — **Pompaj.** Diode semiconductoare injectează lumină la ~976 nm în fibră. Sunt eficiente și au durată lungă de viață.
- Pas 2 — **Amplificare.** Miezul fibrei e dopat cu iterbiu (Yb³⁺). Lumina de pompaj excită ionii, iar aceștia eliberează energie la 1080 nm — lungimea de undă de lucru.
- Pas 3 — **Rezonator.** Rețele Bragg înscrise în fibră (FBG) joacă rolul oglinzilor și formează cavitatea. Totul e sudat optic, monolitic — fără traseu de lumină deschis.
- Pas 4 — **Livrare.** Fasciculul iese printr-o fibră de transport (conector QBH) direct în capul de tăiere.
- „De ce contează" (3 mini-carduri):
  1. **Eficiență.** Randament la priză peste 40% — de câteva ori mai mult decât un laser CO₂ clasic. Mai puțină energie, cost mai mic pe piesă.
  2. **Focalizare.** 1080 nm e de ~10× mai scurt decât CO₂ (10,6 µm), deci se focalizează într-un spot de ~10× mai mic — densitate de putere de până la 100× mai mare la aceeași putere medie.
  3. **Fiabilitate.** Construcție integral pe fibră, fără oglinzi de reglat → robustețe la vibrații și contaminare, mentenanță minimă.

**Media.** Schemă SVG: diodă → fibră spiralată dopată → FBG la capete → fascicul de ieșire. `FOTO · unitatea-sursă HSC reală` alături (placeholder acum).

**Mișcare.** La hover pe fiecare pas, se evidențiază segmentul din schemă. La intrare, fasciculul „curge" prin fibră.

**Note.** Corect științific și verificat (Yb-doped, pompaj 976 nm, FBG, monolitic). Ține limbajul simplu — un pas = o propoziție.

---

### 4.4 SURSA LASER — Han's Photonics / seria HSC (deschis + sub-moment întunecat)

**Scop.** Prima verigă. Aici punem specificațiile grele și explicăm calitatea fasciculului (BPP) — diferențiatorul tehnic real.

**Layout.**
- Titlu + 2 paragrafe.
- **Panou de specificații** (grilă mono) cu gama HSC.
- **Vizual interactiv BPP → spot** (slider): utilizatorul trece BPP de la ≤1 la ≤4 și vede spotul focalizat crescând și densitatea de putere scăzând, cu o etichetă „bun pentru: tablă subțire / uz general / tablă groasă".
- **Sub-moment întunecat full-bleed:** tăierea metalelor reflectorizante (cupru/alamă), cu povestea anti-reflexie.

**Copy RO.**
- Titlu: **Sursa laser — fibră, dezvoltată in-house (Han's Photonics)**
- Paragraf 1: Sursele cu fibră Han's Photonics (seria HSC) acoperă 3–30 kW în regim continuu, cu configurații de mașină disponibile până la 60 kW pentru tăiere grea. Modulul optic redesenat atinge un randament la priză de peste 40% — mai puțină energie consumată pentru aceeași putere, adică un cost de operare mai mic pe fiecare piesă. Platforma de control se integrează plug-and-play prin magistrale de câmp uzuale, cu modelare a pulsului la scară de microsecunde și diagnoză în timp real.
- Paragraf 2 — **Calitatea fasciculului (BPP).** Performanța de tăiere nu ține doar de kW, ci de cât de fin se focalizează fasciculul. BPP (beam parameter product, în mm·mrad) măsoară exact asta: cu cât e mai mic, cu atât spotul e mai mic și densitatea de putere mai mare. HSC oferă BPP ≤ 1 / 2 / 4 selectabil pe modelele de 3–6 kW și BPP ≤ 4 pe cele de 12–30 kW. Practic: BPP ≤ 1 mm·mrad focalizează sub 0,1 mm — tăiere fină, rapidă, cu tăietură îngustă pe tablă subțire; BPP mai mare distribuie energia pe un spot mai larg, cu profunzime de focalizare mai mare — mai stabil pe tablă groasă. Fibra de ieșire de 100 µm (30/50/100 µm pe modelele mici) permite alegerea spotului potrivit procesului.
- Paragraf 3 — **Reflexie inversă.** Cuprul, alama și aluminiul reflectă o parte din fascicul înapoi pe traseul optic — suficient cât să degradeze lentilele sau chiar să deterioreze sursa. HSC are izolare puternică la reflexia inversă, așa că taie inclusiv materiale foarte reflectorizante fără să pună în pericol sursa.
- Panou spec (mono, din catalog):

| Model | Putere | λ | BPP | Fibră ieșire | Conector | Randament | Răcire |
|-------|--------|---|-----|--------------|----------|-----------|--------|
| HSC-3000 | 3 kW | 1080 nm | ≤1/2/4 | 30/50/100 µm | QBH | >40% | apă |
| HSC-6000 | 6 kW | 1080 nm | ≤1/2/4 | 34/50/100 µm | QBH | >40% | apă |
| HSC-12000 | 12 kW | 1080 nm | ≤4 | 100 µm | Q+/HPC | >40% | apă |
| HSC-20000 | 20 kW | 1080 nm | ≤4 | 100 µm | Q+/HPC | >40% | apă |
| HSC-30000 | 30 kW | 1080 nm | ≤4 | 100 µm | Q+/HPC | >40% | apă |

- Sub-moment (peste video cupru): **Taie și ce reflectă.** Cupru, alamă, aluminiu — fără compromis pentru sursă.
- **Pentru tine, prin Kauner:** alegem puterea și calitatea fasciculului (BPP) pentru materialele și grosimile tale reale, punem sursa în funcțiune și o susținem cu service local.

**Media.**
- `FOTO · unitate-sursă HSC (cabinet)` + `FOTO · conector QBH / capăt de fibră` (detaliu).
- Vizual interactiv **BPP→spot** (SVG + slider) — construit, nu placeholder.
- `VIDEO · tăiere cupru/alamă macro` (sub-momentul întunecat), muchie lucioasă, scântei fine.

**Mișcare.** Panoul spec intră cu stagger pe rânduri; sliderul BPP animă spotul în timp real; sub-momentul întunecat intră full-bleed cu overlay.

**Note.** Toate cifrele = catalog Han's. Vizualul BPP e piesa-vedetă a acestei secțiuni: transformă un concept abstract în ceva ce se vede.

---

### 4.5 CAPUL DE TĂIERE — Han's Focus (deschis, stivă optică „exploded", pinned)

**Scop.** A doua verigă. Explicăm ce e într-un cap și de ce capurile Han's Focus (100% design propriu, IP independentă, 100+ brevete) sunt inteligente.

**Layout.**
- Titlu + paragraf.
- **Stivă optică „exploded" (pinned scurt):** pe măsură ce derulezi, capul se desface pe verticală și fiecare component se etichetează: `fibră de transport → colimator → lentilă de focalizare → geam de protecție (sacrificial) → duză + inel ceramic → piesă`. Lângă fiecare, un rând ce face.
- **Variante de cap** (3 carduri cu foto + spec): HC-TJ300 (inteligent), RC206 (bizou), RC304 (3D 5 axe). Menționăm și capul de sudură FW530.

**Copy RO.**
- Titlu: **Capul de tăiere — 100% design propriu (Han's Focus)**
- Paragraf: Han's Focus dezvoltă peste 30 de tipuri de capuri, cu sistem optic propriu și proprietate intelectuală independentă (peste 100 de brevete). Capul e o stivă optică de precizie: colimatorul preia fasciculul divergent din fibră și îl face paralel; lentila de focalizare îl strânge în spotul de lucru; geamul de protecție sacrificial apără lentila scumpă de stropi și fum; duza dirijează fasciculul și gazul de asistență coaxial, iar inelul ceramic ține duza și face parte din sistemul capacitiv de reglare a înălțimii.
- Card **HC-TJ300 — cap inteligent de tăiere:** Monitorizează în buclă închisă temperatura, presiunea din cameră și gradul de contaminare al fiecărei lentile. Are detecție de perforare și de străpungere completă. Tehnologie brevetată anti-praf, cu rezistență ridicată la contaminare.
- Card **RC206 — cap de bizotare:** Focalizare cu servomotor la 3 m/min. Etanșare ridicată împotriva contaminării. Taie bizou la orice unghi în gama ±45°.
- Card **RC304 — cap 3D pe 5 axe:** Axe cu acționare directă (direct-drive), repetabilitate ≤ 0,005°. Rotație până la 120 rot/min pentru eficiență ridicată. Protecție la coliziune din orice unghi, cu revenire rapidă după impact.
- Notă (mono): `Compatibil QBH universal · FW530 pentru sudură/placare cu protecție tri-direcțională anti-stropi`
- **Pentru tine, prin Kauner:** configurăm capul potrivit proceselor tale (tablă plană, bizou, piese 3D) și ținem optica în parametri prin service programat.

**Media.**
- Stivă optică **SVG „exploded"** (construit).
- `FOTO · HC-TJ300`, `FOTO · RC206 (înclinat pe bizou)`, `FOTO · RC304 pe piesă 3D` — placeholdere acum.
- `VIDEO · capul 3D rotind pe o piesă curbată` (opțional, momentul „wow" al secțiunii).

**Mișcare.** Explozia stivei = *pinned* pe `useScroll`; la ieșire, capul se reasamblează. Cardurile cu stagger.

**Note.** Cifrele = catalog + confirmate de Han's Focus. Aici e locul unde „inginer orientat comercial" strălucește: fiecare feature are un „de ce".

---

### 4.6 OPTICĂ, LENTILE & MENTENANȚĂ (deschis)

**Scop.** Ai cerut explicit lentile + mentenanța Han's. Aici legăm fizica optică de costul de operare și de modelul de service — un argument de vânzare puternic pentru un cumpărător B2B care se teme de downtime.

**Layout.** Trei sub-blocuri:
1. **Lentila termică** — mini-animație: o pată pe geamul de protecție → absoarbe energie → se încălzește → deformează → mută punctul de focalizare fără ca mașina să „știe".
2. **De ce monitorizarea contează** — cum previne Han's asta (HC-TJ300).
3. **Mentenanța & service** — calibrare automată, consumabile, modelul de suport Kauner + Han's.

**Copy RO.**
- Titlu: **Lentilele decid cât timp taie curat mașina.**
- Sub-bloc 1 — **Efectul de lentilă termică.** Geamul de protecție de sub lentila de focalizare e prima linie de apărare și consumabilul care se schimbă cel mai des. Când se depune praf, ulei sau stropi pe el, contaminarea absoarbe o parte din fascicul, se încălzește și deformează sticla — care începe să se comporte ca o lentilă parazită și mută punctul de focalizare cu până la câțiva milimetri. Mașina crede că e la înălțimea corectă, dar fasciculul focalizează greșit: tăietura se degradează, apar bavuri, iar operatorul e tentat să urce puterea — ceea ce încălzește și mai tare optica. La metale reflectorizante, o parte din fascicul revine pe traseul optic și poate degrada acoperirile lentilelor sau chiar sursa.
- Sub-bloc 2 — **De ce monitorizarea rezolvă problema.** Capul HC-TJ300 nu așteaptă ca tăietura să se strice: monitorizează în buclă închisă temperatura, presiunea din cameră și contaminarea fiecărei lentile și semnalează problema înainte ca ea să afecteze calitatea. Etanșarea ridicată și tehnologia brevetată anti-praf țin optica curată mai mult timp, iar geamul de protecție sacrificial se schimbă rapid, printr-o ușă de acces etanșă, fără să expui restul opticii.
- Sub-bloc 3 — **Calibrare automată & service.** Calibrarea manuală coaxială lasă o eroare de ~0,1 mm; calibrarea automată o duce la 0,01 mm — de zece ori mai precis, repetabil, fără dependență de mâna operatorului. Compartimentul de duze cu 12 sertare permite schimbarea rapidă a duzei potrivite fiecărui proces, iar inspecția vizuală automată verifică alinierea. Kauner asigură punerea în funcțiune, instruirea și mentenanța periodică local, sprijinite de rețeaua globală de service Han's — peste 180 de birouri și echipe de aplicații care fac întreținerea de rutină și răspund rapid la solicitări.

**Media.**
- Mini-animație SVG **lentilă termică** (construit) — pata → căldură → focar deplasat.
- Animație SVG **schimbare geam de protecție** (cartuș care iese/intră).
- `FOTO · compartiment duze (12 sertare)`, `FOTO · stație de calibrare / inspecție`, `FOTO · tehnician Kauner la mentenanță` (leagă de echipa noastră).

**Mișcare.** Reveal standard; animațiile pornesc la intrarea în viewport.

**Note.** Această secțiune convertește: îi arată cumpărătorului că înțelegem exact unde pierde bani (downtime, tăiere degradată) și cum îl protejăm.

---

### 4.7 CNC & SOFTWARE — Han's SMC (deschis, showcase UI + arhitectură)

**Scop.** A treia verigă, „creierul". De la hardware la software, așa cum ai cerut. Aici arătăm inteligența de control.

**Layout.**
- Titlu + paragraf.
- **Showcase UI** (mockup ecran): interfața CNC / CAM online / nesting. Prezentat curat, pe fundal deschis, într-un cadru discret de monitor.
- **Tabs** pentru capabilități: `CAM online` · `Nesting & materiale` · `Planificare producție` · `Arhitectură`.
- **Diagramă EtherCAT**: `controler ↔ drivere servo ↔ cap ↔ sursă`, cu eticheta „buclă de scanare la scară de microsecunde".

**Copy RO.**
- Titlu: **Sistemul CNC & software (Han's SMC)**
- Paragraf: Han's SMC dezvoltă sistemul de control complet: controlerul CNC (seria 801/901, pe platformă Windows industrial), software-ul, sistemele de viziune și controlul de înălțime. Arhitectura e deschisă, pe bază de PC, și rulează pe magistrală EtherCAT cu transfer digital — imunitate mai bună la interferențe decât semnalele analogice sau pe puls — cu un ciclu de scanare la scară de microsecunde, care înseamnă contururi mici tăiate curat. Pe platformele de mare dinamică, controlul Han's e cuplat cu servo-drivere și motoare Bosch Rexroth, pentru accelerații mari și precizie de poziționare. Sistemul suportă conectivitate IIoT și diagnoză la distanță prin rețea.
- Tab **CAM online:** Programezi direct pe mașină, fără să treci pe alt calculator: editezi programul NC, adaugi micro-punți, ajustezi intrările/ieșirile, inserezi text de marcare, faci teșiri, tăiere pe muchie comună, tăiere „din zbor" (flying cut) și punți de legătură.
- Tab **Nesting & materiale:** Așezarea automată a pieselor optimizează consumul de tablă (nesting CNCKAD/CypNest) și importă formate uzuale — DXF, DWG, PLT, AI — compatibil cu ecosistemul CypCut / CypNest.
- Tab **Planificare producție:** Procesare pe loturi din liste de sarcini, procesare simultană a mai multor piese pe aceeași masă, cu documentație standardizată pentru trasabilitate.
- Tab **Arhitectură:** Terminalul FMS unifică rutarea proceselor, BOM-ul, modelarea fabricii, comenzile de producție, planificarea inteligentă și colectarea de date — pentru producție cu mix mare și volum mic, pe echipamente multiple.
- Notă (mono): `EtherCAT · ciclu µs · Windows IoT · diagnoză la distanță prin WiFi/rețea`
- **Pentru tine, prin Kauner:** te instruim pe CAM online și nesting, ca operatorii tăi să programeze direct pe mașină din prima săptămână.

**Media.**
- `MOCKUP UI · interfața CNC + nesting` (placeholder de UI acum; ulterior screenshot real).
- `VIDEO · screen-capture nesting + simulare flying cut` (opțional).
- Diagramă **EtherCAT** SVG (construit).

**Mișcare.** Tabs cu tranziție lină de conținut; diagrama pulsează un „packet" de-a lungul magistralei ca să sugereze bucla µs.

**Note.** Nuanța Rexroth e onestă și crește credibilitatea. Nu ascundem că top-tier folosește servo german — e un plus.

---

### 4.8 MATERIALE & PROCES DE TĂIERE (deschis, selector interactiv)

**Scop.** Traducem tehnologia în rezultat pe material — limbajul clientului. Arătăm că știm procesul (gaze, muchii, grosimi), nu doar mașina.

**Layout.**
- Titlu + 1 paragraf despre gaze.
- **Selector interactiv (tabs material):** `Oțel carbon · Inox · Aluminiu · Cupru/Alamă · Titan`. La selectare: gazul recomandat, ce se întâmplă la muchie, gama de grosimi, o macro-foto a muchiei.
- Rând de sub-context: „ce taie Kauner" (materialele + industriile), preluat din pagina actuală.

**Copy RO.**
- Titlu: **De la fascicul la muchie: procesul contează.**
- Paragraf: Calitatea muchiei nu vine doar din laser, ci din gazul de asistență — jetul coaxial care suflă materialul topit din tăietură și decide atmosfera muchiei. Alegerea corectă echilibrează viteză, aspect și cost.
- Tab **Oțel carbon:** Cu oxigen, reacția exotermă adaugă căldură — tăiere mai rapidă și grosimi mai mari, cu o muchie oxidată care de obicei se curăță înainte de vopsire. Cu aer sau gaz mixt (Mix-M), muchia e mult mai curată; oțelul carbon de 25–35 mm se taie curat cu aer, iar tehnologia de gaz mixt împinge tăierea rapidă până spre 40 mm.
- Tab **Inox:** Cu azot (inert), muchia iese lucioasă, fără oxid, gata de sudură — fără curățare. Azotul de mare presiune (tipic 10–20 bar la cap) suflă topitura fără să reacționeze cu metalul. Puritatea azotului decide direct calitatea muchiei.
- Tab **Aluminiu:** Azotul previne stratul dur de oxid de aluminiu (Al₂O₃), problematic la sudură. Pe grosimi medii, aerul de mare presiune poate da chiar o muchie mai bună și viteze mai mari decât azotul pur.
- Tab **Cupru/Alamă:** Foarte reflectorizante — aici contează izolarea la reflexie inversă a sursei. Se taie cu azot pentru muchie curată; procesul cere o sursă care suportă întoarcerea fasciculului fără risc.
- Tab **Titan:** Cu argon, protecție maximă a muchiei împotriva oxidării, pentru aplicații exigente.
- Sub-context: Tăiem oțel carbon, inox, aluminiu, cupru, alamă și titan — tablă, țeavă, profile și grinzi H — pentru fabricație de metal, construcții metalice, auto, mobilier, utilaj greu și energie nouă.

**Media.**
- `FOTO macro · muchie inox lucioasă (N₂)`, `FOTO macro · muchie oțel carbon (O₂)`, `FOTO macro · muchie aluminiu`, `FOTO · mostre de metal tăiat (colecție)`.
- `VIDEO · tăiere azot mare presiune (muchie lucioasă)` + `VIDEO · tăiere oxigen tablă groasă (scântei)` — opțional, pentru contrast.

**Mișcare.** Tabs schimbă foto + text cu crossfade scurt; cifrele-cheie (grosimi, bar) intră cu accent.

**Note.** „Mix-M" = tăiere cu gaz mixt (azot cu concentrație mică de oxigen) — dezvoltare reală și actuală în industrie pentru viteză/curățenie pe secțiuni groase. Prezentat ca proces, nu ca slogan.

---

### 4.9 AUTOMATIZARE & FABRICĂ INTELIGENTĂ — FMS·MES·HIOT (întunecat, cinematic)

**Scop.** A patra verigă. Momentul cinematic mare: „lights-out factory". Aici viziunea video are cel mai mare impact.

**Layout.** Video full-bleed 100vh, overlay `--ink` 60%, titlu + 2 rânduri deasupra. Sub video (revenire pe deschis), o diagramă `FMS + PLC + CNC` și o mențiune MES/HIOT cu rezultatele.

**Copy RO.**
- Titlu (pe video): **Producție fără operator, în tura a treia.**
- Deasupra video: Turn de depozitare, roboți de încărcare/descărcare, cărucioare de schimb și dispecerizare FMS+PLC+CNC — linia se conduce singură.
- Sub video, paragraf: Peste utilaj, Han's integrează automatizarea completă: turn de depozitare tablă, roboți de încărcare/descărcare, cărucioare de schimb pe două niveluri și un sistem de dispecerizare FMS+PLC+CNC pentru producție „lights-out". Terminalul FMS unifică rutarea proceselor, BOM-ul, comenzile și planificarea. Platforma MES și HIOT (IoT-ul industrial Han's) conectează fiecare mașină: monitorizare în timp real, analiză pe big data, predicție de opriri și notificări automate de mentenanță.
- Bandă rezultate (mono, cifre): `Ciclu de producție −25% · Rebut −18% · Cost cu forța de muncă −30% · Stoc −23%`
- **Pentru tine, prin Kauner:** dimensionăm automatizarea la volumul tău real și o integrăm în fluxul existent, fără să-ți oprim producția.

**Media.**
- `VIDEO · linie automată lights-out` (wide/timelapse: turn depozitare, roboți load/unload, cărucioare mișcând tablă). *Momentul-vedetă al paginii.*
- Diagramă **FMS+PLC+CNC** SVG (construit).
- `MOCKUP · dashboard MES/HIOT` (opțional).

**Mișcare.** Video ambiental; textul intră cu `y:24→0`; banda de rezultate cu counters.

**Note.** Cifrele de rezultat sunt cele raportate de Han's — le prezentăm ca atare. Video-ul de linie merită efortul de a fi cel mai bun clip din pagină.

---

### 4.10 FABRICAȚIE & CONTROL CALITATE (deschis, credibilitate)

**Scop.** Dovada că „in-house" nu e vorbă goală: capacitatea de fabricație și controlul calității.

**Layout.** Titlu + paragraf; bandă de statistici de fabricație; rând de foto echipamente premium (DMG / MAZAK / ZEISS); mențiune certificări.

**Copy RO.**
- Titlu: **Fabricația: unde precizia devine repetabilă.**
- Paragraf: Centrul de fabricație Han's a investit aproape 60 de milioane USD în echipamente de producție și inspecție de înaltă precizie: centre de prelucrare pe 5 axe DMG (Germania), linii orizontale automate MAZAK și mașini de măsurat în coordonate ZEISS (Germania). Corpurile de mașină, componentele funcționale, sistemul optic și cel de control sunt fabricate intern — de aceea toleranțele se păstrează de la prima piesă la a mia.
- Bandă stat (mono): `~60M USD echipamente · 6000 seturi CNC de înaltă precizie · prima soluție de prelucrare la 14 m lungime`
- Control calitate: `150+ ingineri de calitate · 200+ tipuri de instrumente de măsură · 100+ experți QC` — certificări `ISO 9001 · ISO 14001 · CE · AEO`

**Media.** `FOTO · centru 5 axe DMG`, `FOTO · linie MAZAK`, `FOTO · CMM ZEISS`, `FOTO · corpuri de mașină în fabricație`. Placeholdere acum.

**Mișcare.** Counters pe cifre; foto cu stagger.

**Note.** Cifre din catalog. Certificările apar și în footer — aici le contextualizăm.

---

### 4.11 PREZENȚĂ & SERVICE KAUNER (deschis) — aterizează pe brandul nostru

**Scop.** Închidem cercul: tehnologia Han's + prezența și serviceul Kauner în România. Aici brandul devine din nou al nostru.

**Layout.**
- **Roata integrării verticale** (SVG): `R&D → Design → Fabricație → Service`, cu nucleul de tehnologii (surse, optică, cap, CNC).
- **Hartă** discretă: 100+ țări / 180+ birouri (rețea Han's) + punctul România (Kauner).
- **Echipa Kauner:** trei ingineri, 15+ ani experiență — foto reală când o avem.

**Copy RO.**
- Titlu: **Tehnologie globală, prezență locală.**
- Paragraf: Han's Laser acoperă întreg ciclul — cercetare, proiectare, fabricație și service post-vânzare — cu o rețea de peste 180 de birouri în 100+ țări și 30.000 de utilaje instalate global. Kauner aduce această tehnologie în România cu o echipă de trei ingineri și peste 15 ani de experiență în industrie: consultanță de proces, punere în funcțiune, instruire și mentenanță — local, în limba ta, cu timp de răspuns scurt.
- Sub-linie: `Integrator Han's Laser în România.`

**Media.** Roată integrare **SVG** (construit); hartă **SVG** simplă; `FOTO · echipa Kauner (3 ingineri)`, `FOTO · service/aplicații în teren`.

**Mișcare.** Roata se aprinde pe segmente la scroll; harta punctează România cu un accent albastru.

**Note.** Această secțiune personalizează pagina — fără ea, ar părea o pagină Han's. Cu ea, e Kauner.

---

### 4.12 STATISTICI + CTA (deschis) — rafinăm banda existentă

**Scop.** Recapitulare numerică + conversie.

**Layout.** Banda de statistici existentă (păstrată, cu spacing corectat) + un CTA final pe fundal deschis.

**Copy RO — banda (mono etichete + cifre Archivo Expanded):**
`#3 producător laser mondial` · `60 kW putere disponibilă` · `~280 m/min viteză poziționare` · `30.000+ mașini instalate global` · `100+ țări · 180+ birouri` · `7.400+ brevete` · `ISO 9001 · 14001 · CE · AEO`

- CTA titlu: **Vrei să vezi ce iese?** 
- CTA text: Trimite-ne un desen și îți tăiem o mostră reală, pe materialul tău.
- Butoane: `Cere o mostră de tăiere` (cerneală) · `Vezi echipamentele` (link)

**Mișcare.** Counters; CTA cu reveal.

**Note.** `#3` și `60 kW` sunt cifrele alese de brand — le păstrăm în bandă. În proză folosim „printre cei mai mari din lume", nu superlativ dur.

---

## 5. Brief media consolidat

Legendă prioritate: **P1** = esențial pentru lansare · **P2** = mare impact, poate urma · **P3** = nice-to-have.
Coloană „Acum" = ce punem ca placeholder până filmăm/fotografiem.

### Video (5 clipuri)
| # | Clip | Unde | Prioritate | Acum |
|---|------|------|-----------|------|
| V1 | Macro slow-mo front de tăiere (scântei, muchie incandescentă) | Hero | **P1** | poster placeholder |
| V2 | Linie automată lights-out (turn, roboți, cărucioare) — wide/timelapse | Automatizare | **P1** | placeholder video |
| V3 | Tăiere cupru/alamă macro (reflectorizant) | Sursă (sub-moment) | P2 | placeholder |
| V4 | Cap 3D rotind pe piesă curbată | Cap de tăiere | P2 | placeholder |
| V5 | Contrast N₂ (muchie lucioasă) vs O₂ (tablă groasă, scântei) | Materiale | P3 | foto în loc |

*Specs filmare:* 16:9, 4K→export 1080p, loop curat 5–8s, muted; pentru macro folosește lentilă macro + fundal întunecat; pentru linie, mișcare lentă de dolly/timelapse. Ține fiecare clip ≤ 6–8 MB (webm+mp4).

### Fotografie (grupuri)
| Grup | Cadre | Unde | Prioritate |
|------|-------|------|-----------|
| Sursă | unitate HSC (cabinet), conector QBH / capăt fibră | Sursă / Explicativ | P2 |
| Capuri | HC-TJ300, RC206 (înclinat), RC304 pe piesă 3D | Cap de tăiere | P2 |
| Optică/mentenanță | compartiment 12 duze, stație calibrare, tehnician Kauner | Optică & mentenanță | P2 |
| Muchii (macro) | inox N₂, oțel carbon O₂, aluminiu, mostre metal tăiat | Materiale | **P1** |
| Fabricație | DMG 5 axe, MAZAK, ZEISS CMM, corpuri mașină | Fabricație | P3 |
| Kauner | cei 3 ingineri, service în teren | Prezență | **P1** (diferențiator) |

*Specs foto:* lumină curată, high-key pe deschis (light-first); macro-urile de muchie pe fundal neutru; echipa — portret editorial, nu stock. Export 1x/2x.

### Animații SVG (construite acum, fără media externă)
| # | Animație | Unde | Tip |
|---|----------|------|-----|
| A1 | Lanțul integrat (build-on-scroll) | Teza | pinned |
| A2 | Schema laser cu fibră (pompaj→fibră→FBG→ieșire) | Cum funcționează | hover |
| A3 | BPP → spot focalizat (slider interactiv) | Sursă | interactiv |
| A4 | Stiva optică „exploded" a capului | Cap de tăiere | pinned |
| A5 | Lentilă termică (contaminare→focar deplasat) | Optică & mentenanță | in-view |
| A6 | Schimbare geam de protecție (cartuș) | Optică & mentenanță | in-view |
| A7 | Arhitectură EtherCAT (packet µs) | CNC & software | in-view |
| A8 | FMS+PLC+CNC (dispecerizare) | Automatizare | in-view |
| A9 | Roata integrării verticale | Prezență | in-view |

---

## 5B. SEO on-page & descoperabilitate

**Principiu.** Pagina de tehnologie are intenție de *informare/considerare* (cineva cercetează tehnologia laser, capabilitățile, Han's), nu de cumpărare directă — aceea stă pe paginile de echipamente. Rolul ei SEO: să prindă căutări informaționale și de brand-adiacent și să direcționeze traficul spre paginile de produs prin linkuri interne. Toate cuvintele-cheie se integrează **natural, în vocea de inginer** — fără keyword stuffing, fără repetiții forțate. Limbă: RO primar (EN în trecerea următoare). **Respectă confidențialitatea:** nu urmărim cuvinte de tip „laser ieftin China" și nu numim furnizori reali de componente; Han's Laser se numește factual, țara de origine niciodată.

### 5B.1 Harta de cuvinte-cheie (bazată pe ce caută efectiv piața RO)
**Primare (nucleul paginii):**
`debitare laser cu fibră` · `tehnologie laser cu fibră` · `sursă laser cu fibră` · `cap de tăiere laser` · `sistem CNC debitare laser`

**Secundare (transacționale — linkează spre paginile de echipamente):**
`mașină de debitat cu laser` · `mașini de debitare laser` · `utilaje tăiere cu laser` · `debitare laser tablă` · `debitare laser țeavă` · `debitare laser inox` · `debitare laser aluminiu` · `debitare laser oțel carbon` · `mașină de debitat table și țevi`

**Long-tail informațional (competiție mică, ideal pentru o pagină de tehnologie):**
`cum funcționează laserul cu fibră` · `laser cu fibră vs CO2` · `ce gaz se folosește la debitarea laser` · `azot sau oxigen la debitare laser` · `calitatea fasciculului laser BPP` · `cap de tăiere laser cu autofocus` · `mentenanță mașină debitare laser` · `lentile debitare laser` · `automatizare debitare laser`

### 5B.2 Harta de titluri (folosește-le ca titluri semantice de secțiune)
Un singur `H1` pe pagină; restul `H2`. Titlurile decorative „punchy" rămân ca sub-head/prima propoziție; titlul semantic poartă cuvântul-cheie.

| Secțiune | H (semantic) recomandat | Cuvânt-cheie țintit |
|----------|-------------------------|---------------------|
| Hero | **H1:** Debitare laser cu fibră, pe cel mai puternic lanț tehnologic din industrie | debitare laser cu fibră |
| Teza | H2: Sursă laser, cap de tăiere și CNC — de la același producător | sursă laser, cap de tăiere |
| De ce Han's | H2: De ce am ales tehnologia Han's Laser | tehnologie Han's Laser |
| Cum funcționează | H2: Cum funcționează un laser cu fibră | cum funcționează laserul cu fibră |
| Sursa | H2: Sursa laser cu fibră (Han's Photonics) | sursă laser cu fibră |
| Capul | H2: Capul de tăiere laser (Han's Focus) | cap de tăiere laser |
| Optică/mentenanță | H2: Optică, lentile și mentenanța mașinii de debitare laser | mentenanță / lentile debitare laser |
| CNC | H2: Sistemul CNC și software de debitare laser (Han's SMC) | sistem CNC debitare laser |
| Materiale | H2: Materiale și gaze la debitarea laser (oțel, inox, aluminiu) | debitare laser inox/aluminiu/oțel |
| Automatizare | H2: Automatizare pentru debitare laser: FMS, MES, fabrică inteligentă | automatizare debitare laser |
| Fabricație | H2: Fabricație și control de calitate | — (brand/credibilitate) |
| Prezență | H2: Debitare laser cu tehnologie Han's, service în România | debitare laser România |

### 5B.3 Meta & URL
- **Title tag** (≤ 60 caractere): `Tehnologie debitare laser cu fibră | Kauner`
- **Meta description** (≤ 155 caractere): `Debitare laser cu fibră pe echipamente Han's Laser: sursă, cap de tăiere și CNC de la același producător. Precizie, fiabilitate și service în România.`
- **URL:** `/tehnologie` (RO), `/en/technology` (EN). Păstrează slug scurt.
- **Primele 100 de cuvinte:** cuvântul-cheie primar apare deja în subtitlul hero (seedat în §4.1) — bine pentru relevanță timpurie.
- **hreflang** RO/EN + `canonical` pe fiecare limbă.

### 5B.4 Alt-text (convenție + exemple)
Descriptiv, cu cuvânt-cheie natural, fără „stuffing". Han's poate fi numit; țara nu.
- Hero (poster): `Debitare laser cu fibră — front de tăiere în oțel`
- Sursă HSC: `Sursă laser cu fibră Han's Photonics HSC pentru debitare`
- Cap RC304: `Cap de tăiere laser 3D pe 5 axe Han's Focus RC304`
- Cap RC206: `Cap de tăiere laser pentru bizou ±45° (Han's Focus RC206)`
- Muchie inox: `Muchie de inox debitat cu laser și azot, fără oxid`
- Muchie oțel: `Muchie de oțel carbon debitat cu laser și oxigen`
- Linie FMS: `Linie automată de debitare laser cu turn de depozitare și roboți`
- Echipa: `Echipa Kauner — ingineri debitare laser în România`

### 5B.5 Linkuri interne (funnel spre echipamente)
Din pagina de tehnologie, cu anchor text bogat în cuvinte-cheie, spre paginile de produs:
- din pilonul **Sursă/Cap/Materiale** → `Debitare laser tablă`, `Debitare laser țeavă & profile`, `Debitare laser 3D`
- din **CNC/Materiale** → paginile pe material dacă există (`Debitare inox`, `Debitare aluminiu`)
- din **Automatizare** → `Automatizare & FMS`
- din **Optică/mentenanță** → pagina `Service`
- CTA final → `Contact` (formular cerere mostră)
- **Reciproc:** fiecare pagină de echipament linkează înapoi la `/tehnologie` cu anchor „tehnologia din spate" — consolidează pagina de tehnologie ca pilar de conținut.

### 5B.6 Date structurate (schema.org)
- `Organization` (Kauner): `name`, `url`, `logo`, `areaServed: RO`, `sameAs` (rețele), `description`.
- `WebPage` + `BreadcrumbList` (Acasă › Tehnologie).
- **`FAQPage` (recomandare cu impact mare):** adaugă un bloc compact de 3–5 întrebări jos în pagină (reutilizează conținut deja scris) și marchează-l cu schema FAQ — poate câștiga rezultate îmbogățite în Google. Întrebări:
  - „Cum funcționează un laser cu fibră?"
  - „Laser cu fibră sau CO₂ — care taie mai bine metalul?"
  - „Ce gaz se folosește la debitarea laser (azot, oxigen sau aer)?"
  - „Ce grosimi se pot tăia cu laser?"
  - „De ce contează calitatea fasciculului (BPP)?"
  Răspunsurile: 2–3 propoziții fiecare, extrase din secțiunile existente. (Opțional, poate deveni o mică secțiune vizibilă „Întrebări frecvente" înainte de CTA.)

### 5B.7 Checklist tehnic SEO
- Un singur `H1`; ierarhie `H2`/`H3` logică; HTML semantic (`section`, `article`, `figure`, `figcaption`).
- Alt pe toate imaginile; `figcaption` pe media importantă.
- Core Web Vitals: hero poster optimizat pentru LCP; aspect-ratio rezervat la toate media (fără CLS) — deja în regulile de performanță §2.6/§6; lazy-load sub fold.
- Mobil-first; text lizibil pe momentele foto (contrast ≥ 4.5:1).
- Intrare în `sitemap.xml`; `canonical` + `hreflang`.
- Fără cuvinte-cheie de origine/preț-ieftin; fără nume de furnizori reali de componente (respectă §9 confidențialitate).

---

## 6. Note de implementare pentru Claude Code

- **Componente noi:**
  - `<MediaPlaceholder kind="image|video" ratio label caption />` — extinde sistemul de placeholder existent; randează aspect-ratio + etichetă filmare.
  - `<SpecTable />` — grilă mono responsive pentru panourile de specificații.
  - `<BeamPathDiagram />`, `<FiberSchematic />`, `<BppFocusSlider />`, `<OpticalStackExploded />`, `<ThermalLensAnim />`, `<EtherCatDiagram />`, `<FmsDiagram />`, `<IntegrationWheel />` — SVG + Framer.
  - `<MaterialSelector />` — tabs material→gaz cu crossfade.
  - `<DarkMoment>` — wrapper full-bleed cu `<video>`/imagine + overlay `--ink` + slot text.
  - `<StatBand />` cu `useCountUp`.
- **Scroll pinned:** folosește `position: sticky` + `useScroll({ target })` + `useTransform`; limitează la 2 secțiuni (A1, A4). Testează pe mobil — dacă e greoi, degradează la reveal static.
- **Performanță:** `content-visibility: auto` pe secțiunile lungi; video lazy + play doar `whileInView`; niciodată 2 video active simultan; `next/image` peste tot.
- **Accesibilitate:** `prefers-reduced-motion` respectat (dezactivează pinned/parallax, păstrează conținutul); overlay suficient pentru contrast text pe foto; `figcaption`/`aria` pe media.
- **i18n RO/EN:** toate string-urile prin sistemul de traduceri; RO = primar. Structura de chei per secțiune (`tech.hero.title`, `tech.source.p1`, …) ca să pot livra EN direct în §7.
- **Fără flat black:** orice fundal întunecat = componenta `<DarkMoment>` cu imagine reală dedesubt. Zero `bg-black` gol.
- **Fidelitate cifre:** toate valorile din copy provin din catalogul Han's / surse verificate; nu inventa specificații noi la build.

---

## 7. Ce urmează

1. **Copy EN** — trecere completă a tuturor string-urilor (păstrând vocea de inginer), livrată ca `KAUNER_Technology_Page_Copy_EN.md` sau direct în fișierul de traduceri. Spune-mi și o fac.
2. **Media reală** — pe măsură ce filmezi/fotografiezi (vezi §5), înlocuim placeholderele; prioritate P1: V1, V2, macro-uri de muchie, echipa Kauner.
3. **Verificare specificații fine** — dacă ai fișe tehnice Han's pe modelele exacte pe care le vinzi, le aliniem (ex. puteri de cap, variante HSC peste 30 kW).
4. **Micro-copy & SEO** — meta title/description RO+EN, alt-texts, schema.org `Product`/`Organization` — pot pregăti într-un pas separat.

---

*Surse research: catalog Han's Laser Overseas 2025.08.07; hansme.net, hanslaser.net, hansfocus.com, hanslaserus.com; dealeri tehnici (paramountmachinery, thermal-mech); lucrări/articole — Springer (gaz mixt inox gros), RP-Photonics (lasere cu fibră), science.gov (BPP/M²), brevete USPTO (pompaj Yb 976 nm). Cifrele de brand (#3, 60 kW) sunt poziționarea aleasă de Kauner.*
