import { PRIORITY_AREAS } from "../data/areas";
import { SITE } from "../data/site";

const staticPages = [
  "/",
  "/felsokning-luftvarmepump",
  "/installation-luftvarmepump",
  "/offert",
  "/produkter",
  "/projekt",
  "/service-luftvarmepump",
];

const pagePaths = [
  ...staticPages,
  ...PRIORITY_AREAS.map((area) => area.url),
];

function sitemapUrl(path: string, lastmod: string) {
  const url = new URL(path, SITE.url);
  const pathname = url.pathname;
  const isHome = pathname === "/";
  const isLocalPage = pathname.startsWith("/luftvarmepump-");

  return [
    "  <url>",
    `    <loc>${url.toString()}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${isHome || isLocalPage ? "weekly" : "monthly"}</changefreq>`,
    `    <priority>${isHome ? "1.0" : isLocalPage ? "0.9" : "0.7"}</priority>`,
    "  </url>",
  ].join("\n");
}

export function buildSitemapXml() {
  const lastmod = new Date().toISOString();

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...pagePaths.map((path) => sitemapUrl(path, lastmod)),
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
