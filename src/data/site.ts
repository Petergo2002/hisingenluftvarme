export const SITE = {
  name: "Hisingen Luftvärme",
  url: "https://www.hisingenluftvarme.se",
  locale: "sv_SE",
  language: "sv-SE",
  brandLine: "Försäljning, installation, service och underhåll",
  defaultDescription: "Hisingen Luftvärme hjälper privatkunder på Hisingen, i Göteborg, Stenungsund och Lilla Edet med luft-luftvärmepumpar, installation, service, felsökning och kostnadsfria hembesök.",
  defaultImage: "/images/hero.png",
  lastUpdated: "2026-07-03",
  logo: "/hisingen_luftv%C3%A4rme_logo%20-%20Sebastian%20Fihn.png",
  mainMessage: "Försäljning, installation, service och underhåll - vi är med hela vägen.",
  area: "Hisingen, Göteborg, Stenungsund och Lilla Edet",
  phoneDisplay: "0766 44 34 38",
  phoneHref: "tel:+46766443438",
  email: "info@hisingenluftvarme.se",
  emailHref: "mailto:info@hisingenluftvarme.se",
  address: "Hildedalsgatan 200, 417 05 Göteborg",
  addressHref: "https://www.google.com/maps/search/?api=1&query=Hildedalsgatan%20200%2C%20417%2005%20G%C3%B6teborg",
  responseTime: "Vi hör oftast av oss inom 24 timmar.",
};

export const BUSINESS_ADDRESS = {
  streetAddress: "Hildedalsgatan 200",
  postalCode: "417 05",
  addressLocality: "Göteborg",
  addressRegion: "Västra Götaland",
  addressCountry: "SE",
};

export const SERVICE_IMAGES = {
  hero: "/images/hero.png",
  installation: "/images/service-installation.jpg",
  service: "/images/service-maintenance.png",
  troubleshooting: "/images/service-troubleshooting.png",
};

export const AREA_LINKS = [
  { name: "Hisingen", link: "/luftvarmepump-hisingen" },
  { name: "Göteborg", link: "/luftvarmepump-goteborg" },
  { name: "Stenungsund", link: "/luftvarmepump-stenungsund" },
  { name: "Lilla Edet", link: "/luftvarmepump-lilla-edet" },
];

export const SERVICE_AREA_SCHEMA = AREA_LINKS.map((area) => ({
  "@type": "City",
  name: area.name,
  url: new URL(area.link, SITE.url).toString(),
}));

export const SERVICE_CATALOG = [
  {
    name: "Försäljning av luftvärmepump",
    shortName: "Försäljning",
    serviceType: "Försäljning och rådgivning för luft-luftvärmepumpar",
    description: "Jämför luftvärmepumpar med pris efter ROT-avdrag och standardinstallation.",
    link: "/produkter",
    image: SERVICE_IMAGES.hero,
    imageAlt: "Luftvärmepump för villa, radhus och fritidshus",
  },
  {
    name: "Installation av luftvärmepump",
    shortName: "Installation",
    serviceType: "Installation av luft-luftvärmepump",
    description: "Fackmässig installation med rådgivning, standardinstallation och ROT-avdrag på Hisingen, i Göteborg, Stenungsund och Lilla Edet.",
    link: "/installation-luftvarmepump",
    image: SERVICE_IMAGES.installation,
    imageAlt: "Installation av luftvärmepump i villa",
  },
  {
    name: "Service av luftvärmepump",
    shortName: "Service",
    serviceType: "Service och underhåll av luft-luftvärmepump",
    description: "Service och underhåll som hjälper luftvärmepumpen att behålla god effekt, renare luft och längre livslängd.",
    link: "/service-luftvarmepump",
    image: SERVICE_IMAGES.service,
    imageAlt: "Professionell service av luftvärmepump",
  },
  {
    name: "Felsökning av luftvärmepump",
    shortName: "Felsökning",
    serviceType: "Felsökning av luft-luftvärmepump",
    description: "Felsökning vid felkod, missljud, sämre värme, sämre kyla eller annan driftstörning.",
    link: "/felsokning-luftvarmepump",
    image: SERVICE_IMAGES.troubleshooting,
    imageAlt: "Tekniker felsöker luftvärmepump",
  },
] as const;

export const LOCAL_SEO_KEYWORDS = [
  "luftvärmepump Hisingen",
  "luftvärmepump Göteborg",
  "luftvärmepump Stenungsund",
  "luftvärmepump Lilla Edet",
  "installation av luftvärmepump",
  "service av luftvärmepump",
  "felsökning av luftvärmepump",
  "luft-luftvärmepump",
  "ROT-avdrag",
];

export interface Product {
  name: string;
  specs: string[];
  price: string;
  image?: string;
  imageAlt?: string;
  productSheet?: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Panasonic HZ25ZKE",
    specs: [
      "A+++ (SCOP 5,3 / SEER 8,8)",
      "150 kvm",
      "7,5 kW värme / 3,6 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "24 550 kr",
    image: "/images/products/panasonic-hz25zke.png",
    imageAlt: "Panasonic HZ25ZKE luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Panasonic%20HZ25ZKE.pdf",
  },
  {
    name: "Panasonic NZ25YKE",
    specs: [
      "A++ (SCOP 5,0 / SEER 8,0)",
      "120 kvm",
      "6,5 kW värme / 3,0 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "19 875 kr",
    image: "/images/products/panasonic-nz25yke.png",
    imageAlt: "Panasonic NZ25YKE luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Panasonic%20NZ25YKE.pdf",
  },
  {
    name: "Fujitsu Nordic Master 09",
    specs: [
      "A+++ (SCOP 5,3 / SEER 10,9)",
      "160 kvm",
      "7,7 kW värme / 4,7 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "23 550 kr",
    image: "/images/products/fujitsu-nordic-master-09.png",
    imageAlt: "Fujitsu Nordic Master 09 luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Fujitsu%20Nordic%20Master.pdf",
  },
  {
    name: "Panasonic CZ25ZKE",
    specs: [
      "A++ (SCOP 4,3 / SEER 6,7)",
      "70 kvm",
      "5,3 kW värme / 3,0 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "18 875 kr",
    image: "/images/products/panasonic-cz25zke.png",
    imageAlt: "Panasonic CZ25ZKE luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Panasonic%20CZ25ZKE.pdf",
  },
  {
    name: "Altech FXLVP12",
    specs: [
      "A+++ (SCOP 5,1 / SEER 8,5)",
      "150 kvm",
      "7,4 kW värme / 3,5 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "19 950 kr",
    image: "/images/products/altech-fxlvp-9.png",
    imageAlt: "Altech FXLVP 9 luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Altech%20FXLVP%2009.pdf",
  },
  {
    name: "Fujitsu Slim Excellence 09",
    specs: [
      "A++ (SCOP 4,6 / SEER 6,5)",
      "90 kvm",
      "5,7 kW värme / 3,8 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "19 950 kr",
    image: "/images/products/fujitsu-slim-excellence-09.png",
    imageAlt: "Fujitsu Slim Excellence 09 luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Fujitsu%20Slim%20Excellence.pdf",
  },
  {
    name: "Kaisai Pro Heat+ 09",
    specs: [
      "A++ (SCOP 4,6 / SEER 8,5)",
      "50 kvm",
      "4,0 kW värme / 3,7 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "13 650 kr",
    image: "/images/products/kaisai-pro-heat-plus-09.png",
    imageAlt: "Kaisai Pro Heat+ 09 luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Kaisai%20Pro%20Heat%2B.pdf",
  },
  {
    name: "Kaisai Pro Heat+ 12",
    specs: [
      "A++ (SCOP 4,7 / SEER 8,5)",
      "70 kvm",
      "4,9 kW värme / 4,6 kW kyla",
      "R32 – värmer ner till -25",
      "WiFi-styrning",
      "Underhållsvärme",
      "5 års garanti",
    ],
    price: "14 350 kr",
    image: "/images/products/kaisai-pro-heat-plus-12.png",
    imageAlt: "Kaisai Pro Heat+ 12 luftvärmepump med innedel och utedel",
    productSheet: "/productblad/Produktblad%20Kaisai%20Pro%20Heat%2B.pdf",
  },
];

export const INSTALLATION_INCLUDED = [
  "Framkörning inom Hisingen, Göteborg, Stenungsund och Lilla Edet",
  "Väggkonsol till utedel",
  "Vibrationsdämpare mellan utedel och väggkonsol",
  "Isolerade kopparrör, upp till 5 meter",
  "Fyrledarkabel mellan enheterna, upp till 5 meter",
  "Kondensslang, upp till 6 meter",
  "Kabeldragning till jordat eluttag, upp till 5 meter",
  "Vit plastkanal samt vinklar och ändstycken, upp till 5 meter",
  "En håltagning, max 30 cm tjock vägg, i träfasad/lättbetong/tegel",
  "Fästelement såsom skruv, plugg och buntband",
  "Vakuumsugning",
  "Driftsättning",
  "Grovstädning",
  "När installationen är klar provkörs pumpen och kunden får genomgång av fjärrkontrollens funktioner",
];

export const INSTALLATION_ADDONS = [
  "Skärgårdstillägg: 1 500–4 000 kr",
  "Markstativ: 950 kr",
  "Extra rördragning: 500 kr/meter",
  "Skyddstak: 1 500 kr",
  "Extra kabel: 60 kr/meter",
  "Droppskål/värmetråg: 2 600 kr",
  "Betonghåltagning: 1 500–3 000 kr",
  "Arbete på höjd över 3 meter: 1 200 kr",
  "Placering av innedel på höjd över 3 meter: 1 800 kr",
  "Placering av innedel på höjd över 4,5 meter: 3 000 kr",
  "Demontering av befintlig pump ingår om den nya maskinen ska placeras på samma plats",
  "Bortforsling och skrotning av befintlig luftvärmepump: 1 500 kr",
];

export const ROT_TERMS = [
  "Kunden ansvarar för att samtliga villkor för ROT-avdrag är uppfyllda.",
  "Fastigheten ska vara godkänd för ROT-avdrag och ägas av kunden när arbetet utförs.",
  "Kunden ska ha tillräckligt ROT-utrymme kvar hos Skatteverket.",
  "Hisingen Luftvärme gör avdraget direkt på fakturan och ansöker om ersättning från Skatteverket.",
  "Om Skatteverket helt eller delvis avslår ansökan om ROT-ersättning, oavsett anledning, ansvarar kunden för att betala motsvarande belopp inom angiven betalningstid.",
];
