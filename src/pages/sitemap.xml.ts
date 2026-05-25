import { buildSitemapXml, xmlResponse } from "../lib/sitemap";

export function GET() {
  return xmlResponse(buildSitemapXml());
}
