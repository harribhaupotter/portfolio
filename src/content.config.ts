import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are Markdown files in src/content/blog/<category>/<slug>.md
// The folder name sets the category: "tech" or "me".
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
