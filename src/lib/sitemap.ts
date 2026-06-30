import { PRIORITY_AREAS } from "../data/areas";
import { SITE } from "../data/site";

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/produkter", changefreq: "weekly", priority: "0.9" },
  { path: "/luftvarmepump-pris", changefreq: "weekly", priority: "0.9" },
  { path: "/installation-luftvarmepump", changefreq: "monthly", priority: "0.8" },
  { path: "/service-luftvarmepump", changefreq: "monthly", priority: "0.8" },
  { path: "/felsokning-luftvarmepump", changefreq: "monthly", priority: "0.8" },
  { path: "/projekt", changefreq: "monthly", priority: "0.7" },
  { path: "/offert", changefreq: "monthly", priority: "0.7" },
];

const pageEntries = [
  ...staticPages,
  ...PRIORITY_AREAS.map((area) => ({
    path: area.url,
    changefreq: "weekly",
    priority: "0.9",
  })),
];

function sitemapUrl(entry: (typeof pageEntries)[number]) {
  const { path, changefreq, priority } = entry;
  const url = new URL(path, SITE.url);

  return [
    "  <url>",
    `    <loc>${url.toString()}</loc>`,
    `    <lastmod>${SITE.lastUpdated}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function buildSitemapXml() {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...pageEntries.map((entry) => sitemapUrl(entry)),
    "</urlset>",
  ].join("\n");
}

export function xmlResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
