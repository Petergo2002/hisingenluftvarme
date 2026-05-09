export const PRIORITY_AREAS = [
  {
    slug: "goteborg",
    name: "Göteborg",
    url: "/luftvarmepump-goteborg",
    title: "Luftvärmepump Göteborg | Installation, service och felsökning",
    description: "Luftvärmepump i Göteborg för villa, radhus och fritidshus. Hisingen Luftvärme hjälper med rådgivning, installation, service och felsökning.",
    heroTitle: "Luftvärmepump i Göteborg",
    heroText: "Lokal hjälp från Hisingen för dig som vill installera, serva eller felsöka en luftvärmepump i Göteborg.",
    intro: "Vi hjälper kunder i Göteborg med energieffektiva luft-luftvärmepumpar, kostnadsfria hembesök och tydliga prisförslag. Målet är en lösning som passar huset, planlösningen och hur du faktiskt använder bostaden.",
    localAngle: "Göteborg har många olika hustyper, från äldre villor till nyare radhus. Därför lägger vi stor vikt vid placering, luftflöde och rätt kapacitet innan vi rekommenderar modell.",
    benefitOne: "Snabb lokal kontakt",
    benefitOneText: "Vi utgår från Göteborg och kan ge rak rådgivning kring installation, service och felsökning.",
    benefitTwo: "Rätt placering i huset",
    benefitTwoText: "Vi ser över planlösning, väggmaterial och luftflöde så pumpen får bästa möjliga effekt.",
    benefitThree: "Tydlig offert",
    benefitThreeText: "Du får prisbild, ROT-avdrag och eventuella tillägg förklarade innan arbetet startar.",
    nearby: ["stenungsund", "lilla-edet"],
    faqs: [
      { question: "Installerar ni luftvärmepump i Göteborg?", answer: "Ja, Göteborg är ett av våra prioriterade områden för installation, service och felsökning av luftvärmepumpar." },
      { question: "Gör ni kostnadsfria hembesök i Göteborg?", answer: "Ja, vi kan komma ut och titta på förutsättningarna innan vi rekommenderar modell och placering." },
      { question: "Kan ni serva en befintlig luftvärmepump?", answer: "Ja, vi utför service och underhåll på de flesta vanliga fabrikat." },
    ],
  },
  {
    slug: "stenungsund",
    name: "Stenungsund",
    url: "/luftvarmepump-stenungsund",
    title: "Luftvärmepump Stenungsund | Installation, service och felsökning",
    description: "Luftvärmepump i Stenungsund med hjälp från Hisingen Luftvärme. Rådgivning, installation, service, felsökning och ROT-avdrag.",
    heroTitle: "Luftvärmepump i Stenungsund",
    heroText: "Trygg installation, service och felsökning för dig som vill ha bättre inomhusklimat och lägre uppvärmningskostnad i Stenungsund.",
    intro: "I Stenungsund hjälper vi villaägare och husägare att välja rätt luftvärmepump utifrån bostadens storlek, planlösning och läge. Vi gör det enkelt att gå från rådgivning till färdig installation.",
    localAngle: "Närhet till kust och öppna lägen gör att många hus behöver en pump som klarar växlande temperaturer och jämn drift. Vi fokuserar på rätt dimensionering och placering från början.",
    benefitOne: "Rådgivning på plats",
    benefitOneText: "Vi går igenom huset, dina behov och vilken pump som passar bäst innan du bestämmer dig.",
    benefitTwo: "Installation med ROT",
    benefitTwoText: "Vi hanterar ROT-avdraget direkt på fakturan när villkoren är uppfyllda.",
    benefitThree: "Service över tid",
    benefitThreeText: "Efter installation kan vi hjälpa till med service, rengöring och felsökning när pumpen behöver ses över.",
    nearby: ["goteborg", "lilla-edet"],
    faqs: [
      { question: "Installerar ni luftvärmepump i Stenungsund?", answer: "Ja, Stenungsund är ett av de tre områden vi fokuserar på." },
      { question: "Kan ni hjälpa mig välja rätt modell?", answer: "Ja, vi tittar på boyta, planlösning, isolering och hur du vill använda pumpen innan vi rekommenderar modell." },
      { question: "Utför ni service i Stenungsund?", answer: "Ja, vi hjälper även med service, rengöring och felsökning av befintliga luftvärmepumpar." },
    ],
  },
  {
    slug: "lilla-edet",
    name: "Lilla Edet",
    url: "/luftvarmepump-lilla-edet",
    title: "Luftvärmepump Lilla Edet | Installation, service och felsökning",
    description: "Luftvärmepump i Lilla Edet för privatkunder. Hisingen Luftvärme hjälper med hembesök, installation, service och felsökning.",
    heroTitle: "Luftvärmepump i Lilla Edet",
    heroText: "Få hjälp med rätt luftvärmepump i Lilla Edet - från kostnadsfritt hembesök till installation, service och felsökning.",
    intro: "Vi hjälper kunder i Lilla Edet att hitta en luftvärmepump som fungerar i vardagen: rätt kapacitet, rätt placering och tydliga villkor innan installationen bokas.",
    localAngle: "För hus i och runt Lilla Edet är en stabil, rätt dimensionerad luftvärmepump ofta ett smart sätt att sänka uppvärmningskostnaden och få jämnare komfort året runt.",
    benefitOne: "Kostnadsfritt hembesök",
    benefitOneText: "Vi ser över bostaden och ger råd om placering, modell och installationsförutsättningar.",
    benefitTwo: "Trygg installation",
    benefitTwoText: "Installationen görs fackmässigt och du får genomgång av pumpen när arbetet är klart.",
    benefitThree: "Hjälp vid problem",
    benefitThreeText: "Vi felsöker vid felkoder, missljud, sämre effekt eller andra driftproblem.",
    nearby: ["goteborg", "stenungsund"],
    faqs: [
      { question: "Hjälper ni kunder i Lilla Edet?", answer: "Ja, Lilla Edet är ett av våra tre prioriterade områden." },
      { question: "Kan jag få offert innan jag bestämmer mig?", answer: "Ja, vi tar fram ett tydligt prisförslag baserat på huset och installationsförutsättningarna." },
      { question: "Gäller ROT-avdrag vid installation?", answer: "Ja, ROT-avdrag kan användas på arbetskostnaden när villkoren är uppfyllda." },
    ],
  },
] as const;

export type PriorityArea = (typeof PRIORITY_AREAS)[number];

export function getPriorityArea(slug: string) {
  const area = PRIORITY_AREAS.find((item) => item.slug === slug);

  if (!area) {
    throw new Error(`Unknown priority area: ${slug}`);
  }

  return area;
}

export function getNearbyAreas(area: PriorityArea) {
  return area.nearby.map((slug) => getPriorityArea(slug));
}
