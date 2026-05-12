import { SITE } from "../data/site";

export function GET() {
  const sitemapUrl = new URL("/sitemap-index.xml", SITE.url).toString();
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
