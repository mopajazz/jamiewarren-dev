import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    // Display only — `order` still controls sequence. Omit when the date is unknown.
    year: z.number().int().min(2000).max(2100).optional(),
    tools: z.array(z.string()).default([]),
    link: z.string().optional(),
    media: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    year: z.number().int().min(2000).max(2100).optional(),
    link: z.string().optional(),
    artifactNote: z.string().optional(),
    media: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { work, lab };
