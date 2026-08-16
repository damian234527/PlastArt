import { z, defineCollection } from 'astro:content';
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    author: z.string().default('Janusz Sobczyk'),
    image: z.string().optional(),
  }),
});
export const collections = { 'news': newsCollection };
