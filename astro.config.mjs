import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'http://localhost:4321', 
  // site: 'https://plastart.plast.one.pl',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pl',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});