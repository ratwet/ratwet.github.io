import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
  title: z.string(),
  category: z.enum(['Computer Vision', 'Edge & IoT', 'Robotics', 'Other']),
  summary: z.string().max(180),
  year: z.number(),
  status: z.enum(['shipped', 'in-progress', 'archived']).default('shipped'),
  repoUrl: z.string().url().optional(),
  demoVideo: z.string().url().optional(),
  coverImage: z.string().optional(),
  metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  featured: z.boolean().default(false),
});

const experienceSchema = z.object({
  role: z.string(),
  org: z.string(),
  start: z.string(),
  end: z.string().optional(),
  location: z.string().optional(),
  highlights: z.array(z.string()),
});

const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  verifyUrl: z.string().url().optional(),
  credentialId: z.string().optional(),
});

export const collections = {
  projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/projects' }), schema: projectSchema }),
  experience: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/experience' }), schema: experienceSchema }),
  certifications: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/certifications' }), schema: certificationSchema }),
};
