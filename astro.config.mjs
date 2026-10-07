import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.CF_PAGES_URL || 'https://plastart.plast.one.pl';

export default defineConfig({
  output: 'static',
  site: siteUrl,
  integrations: [sitemap()],

  i18n: {
    defaultLocale: 'pl',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});