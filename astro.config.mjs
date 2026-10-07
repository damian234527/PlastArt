import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
const siteUrl = process.env.CF_PAGES_URL || 'https://plastart.plast.one.pl';

const isBuild = process.argv.includes('build');

export default defineConfig({
  output: 'static',
  site: siteUrl,

  // site: 'http://localhost:4321',
  // site: 'https://plastart.plast.one.pl',
  integrations: [sitemap()],

  i18n: {
    defaultLocale: 'pl',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  adapter: isBuild ? cloudflare() : undefined
});