import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    author: z.string().default('Janusz Sobczyk'),
    image: z.string().optional(),
  }),
});
export const collections = { 'news': newsCollection };
