// KAUNER — bilingual content. RO is primary (default), EN secondary.
// All site copy lives here. `en` is checked against `ro` at compile time via
// `satisfies`, so the two dictionaries can never drift out of structural parity.
//
// Editing copy: change the strings below. To add a string, add it to `ro` first,
// then to `en` — TypeScript will flag the missing key.

// ── Model line-ups ─────────────────────────────────────────────────────────
// Every model gets its own detail page, so it needs a language-independent
// `slug` (the URL) plus a localised display `name`. Model codes are proper
// product names and stay identical across languages; only "Series" is localised
// ("Seria" on RO) and a couple of descriptive names are translated.
//
// Each category is defined ONCE as {slug, ro, en}; `models(list, locale)`
// derives the per-language {slug, name}[] the dictionaries expose. Defining the
// slug in a single place guarantees RO and EN can never drift to different URLs.
type ModelSource = { slug: string; ro: string; en: string };
type Model = { slug: string; name: string };

const models = (list: ModelSource[], locale: "ro" | "en"): Model[] =>
  list.map((m) => ({ slug: m.slug, name: locale === "ro" ? m.ro : m.en }));

const SHEET_CUTTING: ModelSource[] = [
  { slug: "hf-expert", ro: "HF Expert", en: "HF Expert" },
  { slug: "hf-s-smart", ro: "HF S Smart", en: "HF S Smart" },
  { slug: "hf-s-standard", ro: "HF S Standard", en: "HF S Standard" },
  { slug: "mini-s", ro: "MINI S", en: "MINI S" },
  { slug: "hf-mini", ro: "HF Mini", en: "HF Mini" },
  { slug: "hf-series", ro: "Seria HF", en: "HF Series" },
  { slug: "g-f-series", ro: "Seria G-F", en: "G-F Series" },
  { slug: "g-o-series", ro: "Seria G-O", en: "G-O Series" },
  { slug: "g3015-o-pro", ro: "G3015-O PRO", en: "G3015-O PRO" },
  { slug: "g-j-series", ro: "Seria G-J", en: "G-J Series" },
  { slug: "mps-d3", ro: "MPS-D3", en: "MPS-D3" },
  { slug: "mps-c3", ro: "MPS-C3", en: "MPS-C3" },
  { slug: "mps-c3-pro", ro: "MPS-C3 PRO", en: "MPS-C3 PRO" },
  { slug: "hf-50-series", ro: "Seria HF 50", en: "HF 50 Series" },
  { slug: "giant-l-lb-hl-hlb", ro: "GIANT-L/LB/HL/HLB", en: "GIANT-L/LB/HL/HLB" },
  { slug: "s-pro-a-g", ro: "S PRO- A/G", en: "S PRO- A/G" },
  { slug: "grc-series", ro: "Seria GRC", en: "GRC Series" },
];

const TUBE_CUTTING: ModelSource[] = [
  { slug: "tx-series", ro: "Seria TX", en: "TX Series" },
  { slug: "pd-series", ro: "Seria PD", en: "PD Series" },
  { slug: "plt-series", ro: "Seria PLT", en: "PLT Series" },
  {
    slug: "h-beam-laser-cutter",
    ro: "Laser pentru profile H",
    en: "H Beam laser cutter",
  },
  { slug: "mps-t5", ro: "MPS-T5", en: "MPS-T5" },
  { slug: "td-series", ro: "Seria TD", en: "TD Series" },
];

const CUTTING_3D: ModelSource[] = [
  { slug: "wd-series", ro: "Seria WD", en: "WD Series" },
];

const BENDING: ModelSource[] = [
  { slug: "hbs-series", ro: "Seria HBS", en: "HBS Series" },
  {
    slug: "bending-automation-cell",
    ro: "Celulă automată de îndoire",
    en: "Bending Automation Cell",
  },
  { slug: "hbi-series", ro: "Seria HBI", en: "HBI Series" },
  { slug: "hbe-series", ro: "Seria HBE", en: "HBE Series" },
  { slug: "hbd-series", ro: "Seria HBD", en: "HBD Series" },
];

const WELDING: ModelSource[] = [
  { slug: "mps-hw-series", ro: "Seria MPS-HW", en: "MPS-HW Series" },
  { slug: "dzw-pro-series", ro: "Seria DZW PRO", en: "DZW PRO Series" },
  { slug: "w-series", ro: "Seria W", en: "W Series" },
];

const AUTOMATION: ModelSource[] = [
  { slug: "sl-series", ro: "Seria SL", en: "SL Series" },
  { slug: "slu-series", ro: "Seria SLU", en: "SLU Series" },
  {
    slug: "alu-series",
    ro: "Soluție de automatizare laser Seria ALU",
    en: "ALU Series Laser Automation Solution",
  },
];

// Every model slug, flat — used by the detail route's generateStaticParams so
// each model is pre-rendered at build time.
export const ALL_MODEL_SLUGS: string[] = [
  ...SHEET_CUTTING,
  ...TUBE_CUTTING,
  ...CUTTING_3D,
  ...BENDING,
  ...WELDING,
  ...AUTOMATION,
].map((m) => m.slug);

export const ro = {
  nav: {
    home: "Acasă",
    equipment: "Echipamente",
    technology: "Tehnologie",
    service: "Service",
    team: "Echipă",
    contact: "Contact",
    contactCta: "Contact",
    langLabel: "Schimbă limba, curent română",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
  },

  hero: {
    eyebrow: "— TEHNOLOGIE LASER",
    // Headline split so a single word can carry the blue accent.
    headlinePre: "Tehnologie laser de nivel mondial. Ridicată la ",
    headlineEm: "standardul",
    headlinePost: " nostru.",
    subhead:
      "Debitare, îndoire, sudură și automatizare laser — integrate, puse în funcțiune și susținute în România, pe cea mai puternică platformă tehnologică din industrie. Fiecare instalare, făcută de ingineri cu peste 15 ani în fabricație.",
    ctaPrimary: "Vezi echipamentele",
    ctaGhost: "Discută cu noi",
    photoLabel: "HERO — DEBITARE LASER (foto)",
    photoAlt:
      "Cap de tăiere laser în acțiune, jet de scântei pe tablă de oțel.",
    strip: [
      "DEBITARE TABLĂ",
      "DEBITARE ȚEAVĂ",
      "ABKANT",
      "SUDURĂ LASER",
      "AUTOMATIZARE",
    ],
    stripGuarantee: [
      "GARANȚIE 5 ANI",
      "INSTALARE ȘI TRAINING ASIGURAT",
      "SERVICE 24/7",
      "LIVRARE LA LOCAȚIE",
    ],
    // Trust bar under the hero CTA (static, `·`-separated).
    trust: [
      "Putere până la 60 kW",
      "Instalare & training la locație",
      "Service 24/7",
      "Piese pe stoc",
      "Garanție extinsă",
    ],
  },

  brand: {
    label: "— KAUNER",
    heading: "Nu vindem cutii. Construim sisteme și stăm în spatele lor.",
    p1: "Ani la rând, fabricanții din România au avut de ales între două compromisuri: să plătească prețul și termenele unui brand occidental, sau să cumpere ieftin și să rămână singuri cu un utilaj pe care nu-l susține nimeni.",
    p2: "Kauner există ca să ștergem acel compromis. Pornim de la cea mai puternică tehnologie laser din industrie și o ridicăm la propriul standard: precizie măsurabilă, integrare făcută de ingineri și un suport care răspunde când suni — nu peste trei săptămâni.",
  },

  solve: {
    label: "— CE REZOLVĂM",
    heading: "Mijlocul care lipsea: tehnologie de top, suport de elită.",
    columns: [
      {
        tag: "PROBLEMA",
        title: "Problema",
        body: "Tehnologia de top vine scump și cu termene lungi. Alternativa ieftină ajunge fără suport — iar când mașina se oprește, se oprește și producția. Între cele două extreme nu exista o opțiune serioasă.",
      },
      {
        tag: "CE REZOLVĂM",
        title: "Ce rezolvăm",
        body: "Acces la echipamente laser de nivel mondial, la un preț și un termen corecte. Integrare făcută de ingineri, suport local rapid și o linie directă la oamenii care îți cunosc mașina.",
      },
      {
        tag: "CE ADUCEM ÎN PLUS",
        title: "Ce aducem în plus",
        body: "Standardul nostru de precizie și fiabilitate. Ingineri cu 15+ ani în fabricație, consultanță pe fluxul tău real de producție și un parteneriat gândit pe toată durata de viață a utilajului.",
      },
    ],
  },

  tech: {
    label: "— TEHNOLOGIE",
    heading: "Construit pe cea mai puternică tehnologie din industrie.",
    lede: "Majoritatea utilajelor laser sunt asamblate: sursa vine de la un producător, capul de la altul, CNC-ul de la al treilea. Kauner integrează sistemele Han's Laser — unul dintre puținii producători din lume care dezvoltă și fabrică in-house întregul lanț optic–mecanic–de control: sursa laser, capul de tăiere și sistemul CNC. Aceeași companie controlează fiecare componentă critică, de la dioda de pompaj până la software. De aici vin fiabilitatea, precizia repetabilă și performanța care nu se degradează în tura a treia.",
    photoLabel: "TEHNOLOGIE — FASCICUL LASER (foto)",
    photoAlt:
      "Fascicul laser de mare putere tăind tablă de oțel într-o hală curată.",
    blocks: [
      {
        title: "Sursa laser — fibră, dezvoltată in-house (Han's Photonics)",
        body: [
          "Sursele laser cu fibră Han's Laser acoperă gama 3–30 kW în regim continuu (seria HSC), cu variante de mare putere de 40 kW și 50 kW pentru tăiere grea. Randamentul la priză (wall-plug) depășește 40% — mai puțină energie consumată pentru aceeași putere, adică un cost de operare mai mic pe fiecare piesă.",
          "Divizia Han's Photonics dezvoltă întregul lanț: sursă de pompaj cu semiconductor, fibră specială, componentă optică activă și integrarea în mașină. Fasciculul are lungime de undă 1080 nm și calitate BPP ≤ 1 / 2 / 4, cu rezistență ridicată la reflexie — se pot tăia inclusiv cupru, alamă și alte materiale foarte reflectorizante, fără să pui în pericol sursa.",
          "Procesul de tăiere Mix-M împinge limita tăierii de calitate cu aer: oțel carbon de 25–35 mm tăiat curat cu aer și până la 25 mm inox tăiat cu aer. La 50 kW, tăierea cu oxigen și focus pozitiv ajunge la 100 mm oțel carbon, tăierea ultra-rapidă la 60 mm, iar tăierea Mix-M în serie la 40 mm. Modelarea pulsului la scară de microsecunde și diagnoza în timp real mențin calitatea constantă pe toată grosimea.",
        ],
      },
      {
        title: "Capul de tăiere — 100% design propriu (Han's Focus)",
        body: [
          "Peste 30 de tipuri de capete de focalizare, toate cu design optic propriu și proprietate intelectuală independentă — pentru tablă, țeavă, piese 3D și metale dificile. Han's Focus produce capete cu focalizare automată de 6–8 kW și 15–20 kW, capete de sudură și capete 3D pentru termoformare.",
          "Capul inteligent HC-TJ300 monitorizează în buclă închisă temperatura, presiunea din cameră și gradul de contaminare al fiecărei lentile, cu detecție de perforare și de străpungere completă și focalizare pe servomotor la 3 m/min. Capul de teșire RC206 taie bizou la orice unghi în gama ±45°. Capul 3D pe 5 axe RC304 folosește axe cu acționare directă, cu repetabilitate ≤ 0,005° și rotație până la 120 rot/min, plus protecție la coliziune din orice unghi. Senzorii capacitivi de înălțime și grupurile interne de senzori în buclă închisă păstrează distanța constantă chiar la accelerații mari — baza pentru margini drepte și bavură minimă.",
        ],
      },
      {
        title: "Sistemul CNC & software (Han's SMC)",
        body: [
          "Divizia Han's SMC dezvoltă sistemul de control complet: CNC, software industrial, sisteme de viziune, control de înălțime și hardware funcțional. Arhitectura este deschisă, pe bază de PC, și suportă conectivitate IIoT pentru schimb de date în timp real.",
          "Funcția CAM online permite programarea direct pe mașină, fără să treci pe alt calculator: editezi programul NC, adaugi micro-punți, ajustezi intrările/ieșirile, inserezi text de marcare, faci teșiri, tăiere pe muchie comună, tăiere „din zbor” (flying cut) și punți de legătură. Calibrarea automată reduce eroarea de la 0,1 mm (manual) la 0,01 mm, cu compartiment de 12 duze și inspecție vizuală automată. Software-ul de nesting optimizează așezarea pieselor pentru scrap minim și importă formate uzuale (DXF, DWG, PLT, AI), compatibil cu ecosistemul CypCut / CypNest.",
        ],
      },
      {
        title: "Automatizare & fabrică inteligentă (FMS · MES · HIOT)",
        body: [
          "Peste utilaj, integrăm automatizarea completă: turn de depozitare tablă, roboți de încărcare/descărcare, cărucioare de schimb și sistemul de dispecerizare FMS+PLC+CNC pentru producție „lights-out”, fără operator. Terminalul FMS unifică rutarea proceselor, BOM, modelarea fabricii, comenzile de producție, planificarea inteligentă și colectarea de date.",
          "Sistemul MES și platforma HIOT (Han's IoT) conectează fiecare mașină: monitorizare în timp real a stării, analiză de tendințe pe big data, analiză de alarme, predicție de opriri și notificări automate de mentenanță. Rezultate raportate: ciclu de producție mai scurt cu ~25%, rebut mai mic cu ~18%, cost cu forța de muncă redus cu ~30% și stoc redus cu ~23%.",
        ],
      },
    ],
    stats: [
      { note: "PRODUCĂTOR MONDIAL", value: "#3", unit: "", lines: [] as string[] },
      { note: "PUTERE DISPONIBILĂ", value: "60", unit: "kW", lines: [] as string[] },
      { note: "VITEZĂ POZIȚIONARE", value: "~280", unit: "m/min", lines: [] as string[] },
      { note: "MAȘINI INSTALATE", value: "30.000+", unit: "", lines: [] as string[] },
      { note: "REȚEA GLOBALĂ", value: "100+", unit: "țări", lines: [] as string[] },
      {
        note: "CERTIFICĂRI",
        value: "",
        unit: "",
        lines: ["ISO 9001 · 14001", "CE · AEO"],
      },
    ],
    materials:
      "Tăiem oțel carbon, inox, aluminiu, cupru, alamă și titan — tablă, țeavă, profile și grinzi H — pentru fabricație de metal, construcții metalice, auto, mobilier, utilaj greu și energie nouă.",
    cta: "Vezi tehnologia completă",
  },

  equipment: {
    label: "— ECHIPAMENTE",
    heading: "Ce oferim.",
    learnMore: "Detalii",
    note: "Specificațiile complete vin pe paginile de produs.",
    catalogHeading: "Toate produsele",
    catalogHero: "ECHIPAMENTE",
    items: [
      {
        slug: "debitare-tabla",
        name: "Debitare laser tablă",
        desc: "Debitare 2D de mare putere, viteză și calitate a muchiei.",
        label: "DEBITARE TABLĂ (foto)",
        alt: "Sistem de debitare laser 2D pentru tablă de oțel.",
        heroImage: "/images/echipamente/debitare-tabla.jpg",
        models: models(SHEET_CUTTING, "ro"),
      },
      {
        slug: "debitare-teava",
        name: "Debitare țeavă & profile",
        desc: "Lasere fiber pentru țevi, cu încărcare automată.",
        label: "DEBITARE ȚEAVĂ (foto)",
        alt: "Laser fiber pentru debitarea țevilor cu încărcare automată.",
        heroImage: "/images/echipamente/debitare-teava.jpg",
        models: models(TUBE_CUTTING, "ro"),
      },
      {
        slug: "debitare-3d",
        name: "Debitare laser 3D",
        desc: "Debitare laser tridimensională pentru piese și profile complexe.",
        label: "DEBITARE LASER 3D (foto)",
        alt: "Sistem de debitare laser 3D pentru piese tridimensionale.",
        heroImage: "/images/echipamente/debitare-3d.jpg",
        models: models(CUTTING_3D, "ro"),
      },
      {
        slug: "abkant",
        name: "Mașini de îndoit",
        desc: "Îndoire precisă, de la serii mici la piese complexe.",
        label: "ABKANT (foto)",
        alt: "Presă abkant pentru îndoirea precisă a tablei.",
        heroImage: "/images/echipamente/masini-de-indoit.jpg",
        models: models(BENDING, "ro"),
      },
      {
        slug: "sudura-laser",
        name: "Sudură laser",
        desc: "Sudură rapidă, curată, cu distorsiune minimă.",
        label: "SUDURĂ LASER (foto)",
        alt: "Sistem de sudură laser cu distorsiune minimă.",
        heroImage: "/images/echipamente/sudura-laser.jpg",
        models: models(WELDING, "ro"),
      },
      {
        slug: "automatizare",
        name: "Automatizare & FMS",
        desc: "Turnuri, roboți de încărcare, producție fără oprire.",
        label: "AUTOMATIZARE & FMS (foto)",
        alt: "Sistem de automatizare cu turnuri de stocare și roboți de încărcare.",
        heroImage: "/images/echipamente/automatizare.jpg",
        models: models(AUTOMATION, "ro"),
      },
    ],
  },

  modelPage: {
    overview: "Prezentare generală",
    highlights: "Puncte forte",
    cuttingCapacity: "Capacitate de debitare",
    technicalData: "Date tehnice",
    recommended: "Produse recomandate",
    comingSoon: "Detalii în curând.",
    backToCatalog: "Înapoi la echipamente",
    backToTech: "Vezi tehnologia din spate",
    ctaTitle: "Interesat de acest model?",
    ctaBody: "Cere o ofertă, specificații complete sau o demonstrație.",
    ctaButton: "Discută cu noi",
  },

  services: {
    label: "— SERVICII",
    heading: "Mai mult decât o mașină.",
    intro:
      "Un utilaj laser produce valoare doar dacă e configurat corect, pus în funcțiune ca lumea și susținut la timp. Noi acoperim tot ciclul — de la prima discuție despre piesele tale, până la tura de noapte de peste cinci ani.",
    items: [
      {
        name: "Consultanță & configurare",
        desc: "Analizăm fluxul tău real și dimensionăm puterea, formatul și automatizarea potrivite — nu o cutie de raft, ci soluția pentru piesele tale.",
      },
      {
        name: "Aplicații & optimizare proces",
        desc: "Tăiem probe pe materialele și piesele tale, dezvoltăm biblioteci de parametri și optimizăm nesting-ul — ca să scoți viteză și calitate maxime din prima zi.",
      },
      {
        name: "Instalare & punere în funcțiune",
        desc: "Livrăm, instalăm și punem în funcțiune la tine în hală, cu mașina calibrată și gata de producție. Nu doar la ușă.",
      },
      {
        name: "Training operatori",
        desc: "Îți pregătim oamenii să scoată maximul din echipament: CAM online, calibrare, mentenanță de bază și bune practici de tăiere.",
      },
      {
        name: "Service & mentenanță",
        desc: "Răspuns rapid, piese pe stoc și mentenanță planificată. Uptime, nu promisiuni — cu diagnoză la distanță prin IoT când se poate.",
      },
      {
        name: "Integrare & automatizare",
        desc: "Conectăm debitarea, îndoirea și automatizarea într-un singur flux — linii FMS, roboți de încărcare/descărcare și legătură la MES/ERP pentru producție continuă.",
      },
    ],
  },

  team: {
    label: "— ECHIPA",
    heading: "Ingineri, nu vânzători.",
    lede: "Kauner e condusă de trei ingineri cu peste 15 ani în fabricația industrială. Nu externalizăm partea grea: punem mâna pe fiecare instalare, calibrăm fiecare mașină și instruim fiecare operator. Când suni, vorbești cu omul care îți cunoaște utilajul — nu cu un call-center.",
    members: [
      {
        label: "ECHIPA — FOTO",
        role: "Inginerie & integrare",
        desc: "Proiectăm și integrăm sisteme laser complete — de la sursă și cap, până la automatizare și conectarea în fluxul tău de producție.",
      },
      {
        label: "ECHIPA — FOTO",
        role: "Service & suport",
        desc: "Suport local rapid, mentenanță planificată și piese pe stoc. Ținem mașina în producție, nu în așteptare.",
      },
      {
        label: "ECHIPA — FOTO",
        role: "Consultanță tehnică",
        desc: "Te ajutăm să alegi corect: putere, format, materiale și ROI real — pe baza pieselor tale, nu a unui catalog.",
      },
    ],
    photoAlt: "Membru al echipei de ingineri Kauner.",
  },

  service: {
    label: "— SERVICE",
    heading: "Service & suport.",
    lede: "Pagină în lucru — conținutul vine în curând.",
  },

  contact: {
    label: "— CONTACT",
    heading: "Hai să vorbim despre producția ta.",
    lede: "Spune-ne despre piesele tale, volume și fluxul tău. Îți propunem configurația potrivită.",
    cta: "Discută cu noi",
    email: "contact@kauner.ro",
    phone: "+40 21 000 0000",
  },

  footer: {
    tagline: "Engineered for Precision",
    colEquipment: "Echipamente",
    colCompany: "Companie",
    colContact: "Contact",
    company: [
      { label: "Tehnologie", href: "/tehnologie" },
      { label: "Service", href: "/service" },
      { label: "Echipă", href: "/echipa" },
      { label: "Contact", href: "/contact" },
    ],
    address: "România",
    certs: "ISO · CE",
    rights: "Toate drepturile rezervate.",
    legal: "Termeni · Confidențialitate",
  },
};

export const en = {
  nav: {
    home: "Home",
    equipment: "Equipment",
    technology: "Technology",
    service: "Service",
    team: "Team",
    contact: "Contact",
    contactCta: "Contact",
    langLabel: "Switch language, current English",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "— LASER TECHNOLOGY",
    headlinePre: "World-class laser technology. Raised to our ",
    headlineEm: "standard",
    headlinePost: ".",
    subhead:
      "Kauner integrates and supports laser cutting, bending and automation systems in Romania — backed by a senior engineering team with 15+ years.",
    ctaPrimary: "See the equipment",
    ctaGhost: "Talk to us",
    photoLabel: "HERO — LASER CUTTING (photo)",
    photoAlt: "Laser cutting head in action, sparks across a steel sheet.",
    strip: [
      "SHEET CUTTING",
      "TUBE CUTTING",
      "BENDING",
      "LASER WELDING",
      "AUTOMATION",
    ],
    stripGuarantee: [
      "5-YEAR WARRANTY",
      "INSTALL & TRAINING INCLUDED",
      "24/7 SERVICE",
      "ON-SITE DELIVERY",
    ],
    // TODO(EN): confirm final EN trust-bar copy (client delivers EN separately)
    trust: [
      "Up to 60 kW power",
      "On-site install & training",
      "24/7 service",
      "Parts in stock",
      "Extended warranty",
    ],
  },

  brand: {
    label: "— KAUNER",
    heading: "We don't sell boxes. We build systems and stand behind them.",
    p1: "For too long, manufacturers in Romania had two bad options: pay the price and lead times of a Western brand, or buy cheap and be left alone.",
    p2: "We built Kauner to erase that compromise. We start from the most powerful technology in the industry and raise it to our own standard: precision, integration done by engineers, support that answers when you call.",
  },

  solve: {
    label: "— WHAT WE SOLVE",
    heading: "The missing middle: top technology, elite support.",
    columns: [
      {
        tag: "THE PROBLEM",
        title: "The problem",
        body: "Top technology comes expensive and with long lead times. The cheap alternative comes without expertise — the machine arrives, but no one makes it produce.",
      },
      {
        tag: "WHAT WE SOLVE",
        title: "What we solve",
        body: "Access to world-class technology, without the price and lead-time barrier. Integration done by engineers. Local support — fast, and for the long term.",
      },
      {
        tag: "WHAT WE BRING",
        title: "What we bring",
        body: "Our standard of precision. Engineers with 15+ years, not salespeople. Consulting — the right solution for your flow. A partnership for life.",
      },
    ],
  },

  tech: {
    label: "— TECHNOLOGY",
    heading: "Built on the most powerful technology in the industry.",
    lede: "Han's Laser is China's largest and the world's third-largest laser equipment manufacturer — founded in 1996, with over 17,000 employees and thousands of patents. We integrate their cutting, bending, welding and automation platforms and raise them to the Kauner standard. You get the capability of a world leader; the integration, calibration and support are ours.",
    photoLabel: "TECHNOLOGY — LASER BEAM (photo)",
    photoAlt:
      "High-power laser beam cutting a steel sheet in a clean facility.",
    // TODO(EN): translate intro thesis + the 4 technical blocks + materials line
    // (client delivers EN separately). Titles kept in EN for structure.
    blocks: [
      {
        title: "Laser source — in-house fibre (Han's Photonics)",
        body: ["TODO(EN): final copy delivered separately."],
      },
      {
        title: "Cutting head — 100% own design (Han's Focus)",
        body: ["TODO(EN): final copy delivered separately."],
      },
      {
        title: "CNC & software (Han's SMC)",
        body: ["TODO(EN): final copy delivered separately."],
      },
      {
        title: "Automation & smart factory (FMS · MES · HIOT)",
        body: ["TODO(EN): final copy delivered separately."],
      },
    ],
    stats: [
      { note: "GLOBAL MAKER", value: "#3", unit: "", lines: [] as string[] },
      { note: "AVAILABLE POWER", value: "60", unit: "kW", lines: [] as string[] },
      { note: "POSITIONING SPEED", value: "~280", unit: "m/min", lines: [] as string[] },
      { note: "MACHINES INSTALLED", value: "30,000+", unit: "", lines: [] as string[] },
      { note: "GLOBAL NETWORK", value: "100+", unit: "countries", lines: [] as string[] },
      {
        note: "CERTIFICATIONS",
        value: "",
        unit: "",
        lines: ["ISO 9001 · 14001", "CE · AEO"],
      },
    ],
    materials:
      "We cut carbon steel, stainless steel, aluminium, copper, brass and titanium — sheet, tube, profiles and H-beams — for metal fabrication, steel structures, automotive, furniture, heavy machinery and new energy.",
    cta: "See the full technology",
  },

  equipment: {
    label: "— EQUIPMENT",
    heading: "What we offer.",
    learnMore: "Learn more",
    note: "Full specifications live on each product page.",
    catalogHeading: "All products",
    catalogHero: "EQUIPMENT",
    items: [
      {
        slug: "debitare-tabla",
        name: "Sheet laser cutting",
        desc: "High-power 2D cutting — speed and edge quality.",
        label: "SHEET CUTTING (photo)",
        alt: "2D laser cutting system for steel sheet.",
        heroImage: "/images/echipamente/debitare-tabla.jpg",
        models: models(SHEET_CUTTING, "en"),
      },
      {
        slug: "debitare-teava",
        name: "Tube & profile cutting",
        desc: "Fiber tube lasers with automated loading.",
        label: "TUBE CUTTING (photo)",
        alt: "Fiber tube laser with automated loading.",
        heroImage: "/images/echipamente/debitare-teava.jpg",
        models: models(TUBE_CUTTING, "en"),
      },
      {
        slug: "debitare-3d",
        name: "3D laser cutting",
        desc: "Three-dimensional laser cutting for complex parts and profiles.",
        label: "3D LASER CUTTING (photo)",
        alt: "3D laser cutting system for three-dimensional parts.",
        heroImage: "/images/echipamente/debitare-3d.jpg",
        models: models(CUTTING_3D, "en"),
      },
      {
        slug: "abkant",
        name: "Press brakes (bending)",
        desc: "Precise bending, from small runs to complex parts.",
        label: "BENDING (photo)",
        alt: "Press brake for precise sheet metal bending.",
        heroImage: "/images/echipamente/masini-de-indoit.jpg",
        models: models(BENDING, "en"),
      },
      {
        slug: "sudura-laser",
        name: "Laser welding",
        desc: "Fast, clean welding with minimal distortion.",
        label: "LASER WELDING (photo)",
        alt: "Laser welding system with minimal distortion.",
        heroImage: "/images/echipamente/sudura-laser.jpg",
        models: models(WELDING, "en"),
      },
      {
        slug: "automatizare",
        name: "Automation & FMS",
        desc: "Towers, loading robots, lights-out production.",
        label: "AUTOMATION & FMS (photo)",
        alt: "Automation system with storage towers and loading robots.",
        heroImage: "/images/echipamente/automatizare.jpg",
        models: models(AUTOMATION, "en"),
      },
    ],
  },

  modelPage: {
    overview: "Overview",
    highlights: "Highlights",
    cuttingCapacity: "Cutting capacity",
    technicalData: "Technical data",
    recommended: "Recommended products",
    comingSoon: "Details coming soon.",
    backToCatalog: "Back to equipment",
    backToTech: "See the technology behind it",
    ctaTitle: "Interested in this model?",
    ctaBody: "Request a quote, full specifications or a demo.",
    ctaButton: "Talk to us",
  },

  services: {
    label: "— SERVICES",
    heading: "More than a machine.",
    // TODO(EN): confirm final EN copy (client delivers EN separately)
    intro:
      "A laser machine only creates value when it's configured right, commissioned properly and supported on time. We cover the full cycle — from the first conversation about your parts to the night shift five years on.",
    items: [
      {
        name: "Consulting & configuration",
        desc: "We analyse your workflow and pick the right configuration — not an off-the-shelf box.",
      },
      {
        // TODO(EN): confirm final EN copy (new service — client delivers EN separately)
        name: "Applications & process optimization",
        desc: "We cut samples on your materials and parts, build parameter libraries and optimise nesting — so you get top speed and quality from day one.",
      },
      {
        name: "Installation & commissioning",
        desc: "We deliver the machine calibrated and production-ready.",
      },
      {
        name: "Operator training",
        desc: "We train your people to get the most out of the machine.",
      },
      {
        name: "Service & maintenance",
        desc: "Fast response, parts, planned maintenance. Uptime, not promises.",
      },
      {
        name: "Integration & automation",
        desc: "We connect cutting, bending and automation into one flow.",
      },
    ],
  },

  team: {
    label: "— THE TEAM",
    heading: "Engineers, not salespeople.",
    lede: "We put our hands on every installation, calibrate every machine, train every operator.",
    // TODO(EN): confirm final EN card copy (client delivers EN separately)
    members: [
      {
        label: "TEAM — PHOTO",
        role: "Engineering & integration",
        desc: "We design and integrate complete laser systems — from source and head to automation and hooking into your production flow.",
      },
      {
        label: "TEAM — PHOTO",
        role: "Service & support",
        desc: "Fast local support, planned maintenance and parts in stock. We keep the machine producing, not waiting.",
      },
      {
        label: "TEAM — PHOTO",
        role: "Technical consulting",
        desc: "We help you choose right: power, format, materials and real ROI — based on your parts, not a catalogue.",
      },
    ],
    photoAlt: "Member of the Kauner engineering team.",
  },

  service: {
    label: "— SERVICE",
    heading: "Service & support.",
    lede: "Page in progress — content coming soon.",
  },

  contact: {
    label: "— CONTACT",
    heading: "Let's talk about your production.",
    lede: "Tell us about your parts, your volumes, your flow. We'll propose the right configuration.",
    cta: "Talk to us",
    email: "contact@kauner.ro",
    phone: "+40 21 000 0000",
  },

  footer: {
    tagline: "Engineered for Precision",
    colEquipment: "Equipment",
    colCompany: "Company",
    colContact: "Contact",
    company: [
      { label: "Technology", href: "/tehnologie" },
      { label: "Service", href: "/service" },
      { label: "Team", href: "/echipa" },
      { label: "Contact", href: "/contact" },
    ],
    address: "Romania",
    certs: "ISO · CE",
    rights: "All rights reserved.",
    legal: "Terms · Privacy",
  },
} satisfies typeof ro;

export type Locale = "ro" | "en";
export type Dict = typeof ro;

export const dictionaries: Record<Locale, Dict> = { ro, en };

export const LOCALES: Locale[] = ["ro", "en"];
export const DEFAULT_LOCALE: Locale = "ro";
