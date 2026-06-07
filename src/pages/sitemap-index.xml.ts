import { SITE } from "../data/site";
import { xmlResponse } from "../lib/sitemap";

export function GET() {
  const sitemapUrl = new URL("/sitemap.xml", SITE.url).toString();
  const lastmod = new Date().toISOString();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <sitemap>",
    `    <loc>${sitemapUrl}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "  </sitemap>",
    "</sitemapindex>",
  ].join("\n");

  return xmlResponse(body);
}
