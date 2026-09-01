import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  output: 'static',
  site: isCloudflare ? 'plastart.damian-koscielny.workers.dev' : 'http://localhost:4321',
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