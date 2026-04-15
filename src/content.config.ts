import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const diary = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		date: z.date(),
		summary: z.string(),
	}),
});

export const collections = { diary };
