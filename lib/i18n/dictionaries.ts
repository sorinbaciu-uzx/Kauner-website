// KAUNER — bilingual content. RO is primary (default), EN secondary.
// All site copy lives here. `en` is checked against `ro` at compile time via
// `satisfies`, so the two dictionaries can never drift out of structural parity.
//
// Editing copy: change the strings below. To add a string, add it to `ro` first,
// then to `en` — TypeScript will flag the missing key.

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
      "Kauner integrează și susține în România sisteme de debitare, îndoire și automatizare — cu o echipă de ingineri cu peste 15 ani de experiență.",
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
  },

  brand: {
    label: "— KAUNER",
    heading: "Nu vindem cutii. Construim sisteme și stăm în spatele lor.",
    p1: "Fabricanții din România au avut mult timp două opțiuni proaste: să plătească prețul și termenele unui brand occidental, sau să cumpere ieftin și să rămână singuri.",
    p2: "Am construit Kauner ca să ștergem acest compromis. Pornim de la cea mai puternică tehnologie din industrie și o ridicăm la propriul standard: precizie, integrare făcută de ingineri, suport care răspunde când suni.",
  },

  solve: {
    label: "— CE REZOLVĂM",
    heading: "Mijlocul care lipsea: tehnologie de top, suport de elită.",
    columns: [
      {
        tag: "PROBLEMA",
        title: "Problema",
        body: "Tehnologia de top vine scumpă și cu termene lungi. Alternativa ieftină vine fără expertiză — mașina ajunge, dar nimeni nu o pune să producă.",
      },
      {
        tag: "CE REZOLVĂM",
        title: "Ce rezolvăm",
        body: "Acces la tehnologie de nivel mondial, fără bariera de preț și termen. Integrare făcută de ingineri. Suport local, rapid, pe termen lung.",
      },
      {
        tag: "CE ADUCEM ÎN PLUS",
        title: "Ce aducem în plus",
        body: "Standardul nostru de precizie. Ingineri cu 15+ ani, nu vânzători. Consultanță — soluția potrivită fluxului tău. Parteneriat pe viață.",
      },
    ],
  },

  tech: {
    label: "— TEHNOLOGIE",
    heading: "Construit pe cea mai puternică tehnologie din industrie.",
    lede: "Han's Laser este cel mai mare producător de echipamente laser din China și al treilea din lume — fondat în 1996, cu peste 17.000 de angajați și mii de brevete. Integrăm platformele lor de debitare, îndoire, sudură și automatizare și le ridicăm la standardul Kauner. Tu primești capabilitatea unui lider mondial; integrarea, calibrarea și suportul sunt ale noastre.",
    photoLabel: "TEHNOLOGIE — FASCICUL LASER (foto)",
    photoAlt:
      "Fascicul laser de mare putere tăind tablă de oțel într-o hală curată.",
    stats: [
      { value: "#3", unit: "GLOBAL", note: "PRODUCĂTOR LASER" },
      { value: "40", unit: "kW", note: "PÂNĂ LA" },
      { value: "~160", unit: "m/min", note: "VITEZĂ" },
      { value: "180+", unit: "BIROURI", note: "100+ ȚĂRI" },
      { value: "ISO", unit: "· CE", note: "CERTIFICĂRI" },
    ],
  },

  equipment: {
    label: "— ECHIPAMENTE",
    heading: "Ce oferim.",
    learnMore: "Detalii",
    note: "Specificațiile complete vin pe paginile de produs.",
    items: [
      {
        slug: "debitare-tabla",
        name: "Debitare laser tablă",
        desc: "Debitare 2D de mare putere, viteză și calitate a muchiei.",
        label: "DEBITARE TABLĂ (foto)",
        alt: "Sistem de debitare laser 2D pentru tablă de oțel.",
      },
      {
        slug: "debitare-teava",
        name: "Debitare țeavă & profile",
        desc: "Lasere fiber pentru țevi, cu încărcare automată.",
        label: "DEBITARE ȚEAVĂ (foto)",
        alt: "Laser fiber pentru debitarea țevilor cu încărcare automată.",
      },
      {
        slug: "abkant",
        name: "Abkant (îndoire)",
        desc: "Îndoire precisă, de la serii mici la piese complexe.",
        label: "ABKANT (foto)",
        alt: "Presă abkant pentru îndoirea precisă a tablei.",
      },
      {
        slug: "sudura-laser",
        name: "Sudură laser",
        desc: "Sudură rapidă, curată, cu distorsiune minimă.",
        label: "SUDURĂ LASER (foto)",
        alt: "Sistem de sudură laser cu distorsiune minimă.",
      },
      {
        slug: "automatizare",
        name: "Automatizare & FMS",
        desc: "Turnuri, roboți de încărcare, producție fără oprire.",
        label: "AUTOMATIZARE & FMS (foto)",
        alt: "Sistem de automatizare cu turnuri de stocare și roboți de încărcare.",
      },
    ],
  },

  services: {
    label: "— SERVICII",
    heading: "Mai mult decât o mașină.",
    items: [
      {
        name: "Consultanță & configurare",
        desc: "Analizăm fluxul tău și alegem configurația potrivită — nu o cutie de raft.",
      },
      {
        name: "Instalare & punere în funcțiune",
        desc: "Livrăm mașina calibrată și gata de producție, nu doar la ușă.",
      },
      {
        name: "Training operatori",
        desc: "Îți pregătim oamenii să scoată maximul din echipament.",
      },
      {
        name: "Service & mentenanță",
        desc: "Răspuns rapid, piese, mentenanță planificată. Uptime, nu promisiuni.",
      },
      {
        name: "Integrare & automatizare",
        desc: "Conectăm debitarea, îndoirea și automatizarea într-un singur flux.",
      },
    ],
  },

  team: {
    label: "— ECHIPA",
    heading: "Ingineri, nu vânzători.",
    lede: "Punem mâna pe fiecare instalare, calibrăm fiecare mașină, instruim fiecare operator.",
    members: [
      { label: "ECHIPA — FOTO", role: "Inginerie & integrare" },
      { label: "ECHIPA — FOTO", role: "Service & suport" },
      { label: "ECHIPA — FOTO", role: "Consultanță tehnică" },
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
    lede: "Spune-ne despre piesele tale, volumele și fluxul tău. Îți propunem configurația potrivită.",
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
    stats: [
      { value: "#3", unit: "GLOBAL", note: "LASER MAKER" },
      { value: "40", unit: "kW", note: "UP TO" },
      { value: "~160", unit: "m/min", note: "SPEED" },
      { value: "180+", unit: "OFFICES", note: "100+ COUNTRIES" },
      { value: "ISO", unit: "· CE", note: "CERTIFICATIONS" },
    ],
  },

  equipment: {
    label: "— EQUIPMENT",
    heading: "What we offer.",
    learnMore: "Learn more",
    note: "Full specifications live on each product page.",
    items: [
      {
        slug: "debitare-tabla",
        name: "Sheet laser cutting",
        desc: "High-power 2D cutting — speed and edge quality.",
        label: "SHEET CUTTING (photo)",
        alt: "2D laser cutting system for steel sheet.",
      },
      {
        slug: "debitare-teava",
        name: "Tube & profile cutting",
        desc: "Fiber tube lasers with automated loading.",
        label: "TUBE CUTTING (photo)",
        alt: "Fiber tube laser with automated loading.",
      },
      {
        slug: "abkant",
        name: "Press brakes (bending)",
        desc: "Precise bending, from small runs to complex parts.",
        label: "BENDING (photo)",
        alt: "Press brake for precise sheet metal bending.",
      },
      {
        slug: "sudura-laser",
        name: "Laser welding",
        desc: "Fast, clean welding with minimal distortion.",
        label: "LASER WELDING (photo)",
        alt: "Laser welding system with minimal distortion.",
      },
      {
        slug: "automatizare",
        name: "Automation & FMS",
        desc: "Towers, loading robots, lights-out production.",
        label: "AUTOMATION & FMS (photo)",
        alt: "Automation system with storage towers and loading robots.",
      },
    ],
  },

  services: {
    label: "— SERVICES",
    heading: "More than a machine.",
    items: [
      {
        name: "Consulting & configuration",
        desc: "We analyse your workflow and pick the right configuration — not an off-the-shelf box.",
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
    members: [
      { label: "TEAM — PHOTO", role: "Engineering & integration" },
      { label: "TEAM — PHOTO", role: "Service & support" },
      { label: "TEAM — PHOTO", role: "Technical consulting" },
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
