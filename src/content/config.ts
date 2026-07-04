import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tools: z.array(z.string()).default([]),
    link: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    link: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { work, lab };
