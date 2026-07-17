/*
 * §5B.6 — FAQ for /tehnologie. Single source shared by the visible "Întrebări
 * frecvente" section and the FAQPage schema.org markup, so the two never drift.
 * Answers are 2–3 sentences drawn from the page's own (verbatim) copy.
 */
export type Faq = { q: string; a: string };

export const TECH_FAQ: Faq[] = [
  {
    q: "Cum funcționează un laser cu fibră?",
    a: "Fasciculul se naște și se amplifică chiar în interiorul unei fibre optice dopate cu iterbiu: diode de pompaj injectează lumină la ~976 nm, iar rețele Bragg (FBG) formează o cavitate monolitică, fără oglinzi de aliniat. Fasciculul de 1080 nm iese printr-o fibră de transport (conector QBH) direct în capul de tăiere.",
  },
  {
    q: "Laser cu fibră sau CO₂ — care taie mai bine metalul?",
    a: "Laserul cu fibră are un randament la priză de peste 40% — de câteva ori mai mult decât un CO₂ clasic — și o lungime de undă de ~10× mai scurtă (1080 nm față de 10,6 µm), deci se focalizează într-un spot mult mai mic, cu densitate de putere de până la 100× mai mare. În plus, construcția integral pe fibră, fără oglinzi de reglat, e mai fiabilă și cere mentenanță minimă.",
  },
  {
    q: "Ce gaz se folosește la debitarea laser (azot, oxigen sau aer)?",
    a: "Depinde de material: oxigen pentru oțel carbon (tăiere rapidă, muchie oxidată), azot pentru inox și aluminiu (muchie lucioasă, fără oxid), aer sau gaz mixt pentru oțel carbon curat și argon pentru titan. Gazul de asistență este jetul coaxial care suflă materialul topit și decide viteza, aspectul muchiei și costul.",
  },
  {
    q: "Ce grosimi se pot tăia cu laser?",
    a: "Grosimea utilă depinde de material, putere și gazul de asistență. Oțelul carbon de 25–35 mm se taie curat cu aer, iar tehnologia de gaz mixt împinge tăierea rapidă până spre 40 mm; puterea mai mare (configurații de mașină disponibile până la 60 kW) extinde grosimile pe materiale groase.",
  },
  {
    q: "De ce contează calitatea fasciculului (BPP)?",
    a: "BPP (beam parameter product, în mm·mrad) arată cât de fin se focalizează fasciculul: cu cât e mai mic, cu atât spotul e mai mic și densitatea de putere mai mare. BPP ≤ 1 mm·mrad focalizează sub 0,1 mm — ideal pe tablă subțire; un BPP mai mare distribuie energia pe un spot mai larg, cu profunzime de focalizare mai mare, mai stabil pe tablă groasă.",
  },
];
