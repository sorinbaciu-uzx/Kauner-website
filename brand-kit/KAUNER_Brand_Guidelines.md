# KAUNER — BRAND GUIDELINES
### *Engineered for Precision*
**v2.0 — direcție: integrare tehnologie de top + standard local**

> Document de referință. Poziționarea completă și textele sunt în `KAUNER_Brand_Story_and_Positioning.md`. Aici sunt regulile vizuale și de voce. Direcție vizuală: **premium luminos, cu fotografie puternică de lasere.**

---

## 1. Esența brandului

| | |
|---|---|
| **Nume** | KAUNER |
| **Tagline** | ENGINEERED FOR PRECISION |
| **Esența** | Tehnologie laser de nivel mondial, integrată în România și ridicată la standardul nostru. |
| **Ce reprezintă** | Precizie · rezistență · claritate · prezență |
| **Ton** | Sobru și îndrăzneț. Tehnic, dar uman. *Spunem puțin, dar greu.* |
| **Limbă** | Bilingv **RO / EN** |

**Pilonii** (detaliat în documentul de poziționare): *ce rezolvăm · tehnologie de top · precizie & calitate · ingineri, nu vânzători · parteneriat pe termen lung.*

**Regulă de poziționare:** ne prezentăm ca **integratori**. Tehnologia Han's Laser apare doar ca referință **factuală** (statură, specificații). **Nu** folosim „partener / distribuitor autorizat / powered by" și nici nu negăm. Numele/logo-ul Han's se folosesc cu prudență.

---

## 2. Sistemul de culoare

| Token | HEX | Rol |
|---|---|---|
| **Kauner Blue** | `#0D009F` | Accent de precizie (rar) |
| **Ink** | `#0A0A0C` | Text, elemente întunecate |
| **White** | `#FFFFFF` | Fundal dominant |

Rampă albastru: `#06004A` · `#0A0078` · **`#0D009F`** · `#1B0FD1` (hover) · `#6B5CFF` (tint) · `#ECEAFF` (wash).
Neutri (oțel rece): `#121216` · `#1E1E24` · `#2C2C34` · `#5C5C66` · `#8A8A94` · `#B7B7C0` · `#E7E7EC` · `#F3F3F6`.

**Proporție (light-first premium):** ~**75–80% alb/off-white** · ~**15% neutri + ink** (text, structură) · ~**3–5% Kauner Blue** (accent). Momentele întunecate sunt **fotografice** (poze cu lasere), nu câmpuri plate negre. Albastrul e o lamă, nu o vopsea.

---

## 3. Tipografia (variable fonts, gratuite)

| Rol | Font | Setări |
|---|---|---|
| **Display / Titluri** | **Archivo Expanded** (Archivo, lățime extinsă) | `wght` 600–800 · `wdth` 125 |
| **Corp / UI** | **Archivo** (lățime normală) | `wght` 400/500/600 · `wdth` 100 |
| **Date / etichete / specs** | **Spline Sans Mono** | `wght` 500, uppercase, tracking lat |

Titluri = tracking strâns (−0.015em). Etichete/eyebrow = mono uppercase, tracking lat (+0.14em). Cifre = `tabular-nums`. Max 2 greutăți într-un bloc.

---

## 4. Logo

Asset-uri în `/public/brand/` — logo-ul e **imagine**, nu text scris cu fontul.

| Fișier | Ce | Pe |
|---|---|---|
| `Logo_Kauner_cu_K_alb.svg` | Lockup: K albastru + wordmark **alb** | fundal închis / **peste poze** (hero, footer) |
| `Logo_Kauner_cu_K.svg` | Lockup: K albastru + wordmark **negru** | fundal **deschis** |
| `Logo_Kauner_alb.svg` | wordmark **alb** | nav peste poză / pe închis |
| `Logo_Kauner_negru.svg` | wordmark **negru** | nav pe alb |
| `logo_K.svg` | monograma K **albastră** | favicon, accent, K pe deschis |
| `logo_K_alb.svg` | monograma K **albă** | nav condensat pe închis, K peste poze |

**Adaptiv:** peste fotografia din hero → set **alb** (wordmark alb + K). Pe fundal alb (nav scrolat, footer) → set **ink**. Când numele apare *într-o propoziție* de text, e text în Archivo, nu logo.

---

## 5. Direcție de imagine / Art direction  *(esențială pentru noua direcție)*

**Premium luminos + fotografie cinematică de lasere.**

- **Baza:** alb/off-white, mult spațiu gol, hairline-uri subțiri, ink pentru text. Aerisit, sobru.
- **Fotografia face spectacolul:** mașini laser în acțiune, **cap de tăiere cu jet de scântei**, fasciculul tăind tabla, muchii curate (macro de precizie), hală curată. Folosite **full-bleed** în hero și ca fundal pentru 1–2 secțiuni (ex. „Tehnologia").
- **Momentele întunecate = fotografice**, încadrate într-un site luminos — nu un site negru. Peste poze: text alb, scrim întunecat subtil pentru lizibilitate, logo alb.
- **Tratament:** contrast înalt, temperatură rece, negru bogat, crisp. Glow-ul fasciculului poate face ecou la `#0D009F`.
- **Subiecte:** echipamente (mașini de debitare/țeavă/abkant/sudură/automatizare), debitare în acțiune, detaliu de componentă, hală; *mai târziu:* echipa (3 oameni) și sediul Kauner.
- **De evitat:** stock cheesy, oameni cu thumbs-up, lumină caldă „corporate", aglomerație, neon, fundaluri plate albastre.

## 6. Limbaj grafic

Chevronul **K** ca element direcțional · hairline-uri 1px (oțel/albastru) · etichete & date **mono** (`± 0.03 mm`, `40 kW`, `160 m/min`) · grilă strictă, margini late · mișcare inginerită (reveal lent fade+rise, zoom subtil pe imagini la hover; durate 300–600ms; respectă `prefers-reduced-motion`).

## 7. Voce & mesaj

**Ton:** sobru, îndrăzneț, tehnic, uman. Afirmații scurte, directe. Fără superlative goale, fără semne de exclamare.

Exemple (RO):
- *„Tehnologie laser de nivel mondial. Ridicată la standardul nostru."*
- *„Nu vindem cutii. Construim sisteme și stăm în spatele lor."*
- *„Ingineri, nu vânzători."*
- *„Toleranța e un standard, nu o setare."*

Exemple (EN): *„World-class laser technology. Raised to our standard." · „Engineered for precision."*

**Folosim:** integrăm, standard, precizie, integrare, suport, toleranță, performanță, uptime.
**Evităm:** ieftin/budget; superlative goale; „powered by / partener autorizat / distribuitor" (vezi regula de la §1); semne de exclamare.

## 8. Bilingv

Tot conținutul în **RO și EN**, cu comutator de limbă. RO = piața locală (audiența principală); EN = clienți internaționali / credibilitate. Tagline-ul rămâne în engleză („Engineered for Precision").

## 9. Do & Don't (rapid)

**Do:** alb + spațiu gol; fotografie de lasere puternică; albastru ca accent rar; titluri Archivo Expanded; date în mono; ton sec și sigur.
**Don't:** site întunecat integral; câmpuri plate albastre; aglomerație; limbaj de parteneriat cu Han's; superlative; emoji; exclamări.

---

*Document Kauner · Brand Guidelines v2.0 · premium luminos + fotografie laser · integrare · bilingv RO/EN.*
