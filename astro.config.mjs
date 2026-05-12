// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hisingenluftvarme.se',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname.replace(/\/$/, '') !== '/kontakt',
      serialize(item) {
        const url = new URL(item.url);
        const isHome = url.pathname === '/';
        const isLocalPage = url.pathname.startsWith('/luftvarmepump-');

        item.changefreq = isHome || isLocalPage ? 'weekly' : 'monthly';
        item.priority = isHome ? 1 : isLocalPage ? 0.9 : 0.7;
        item.lastmod = new Date();

        return item;
      },
    }),
  ],
});
