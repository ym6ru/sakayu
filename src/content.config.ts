import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 形式で指定してください")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00Z`);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }, "実在する日付を指定してください");

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content/blog" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: dateString,
    updatedAt: dateString.optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
