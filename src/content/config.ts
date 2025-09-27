import { z, defineCollection, reference } from 'astro:content';

const authorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    bio: z.string().min(30),
    avatar: z.string().optional(),
    credentials: z.array(z.string()).optional(),
    sameAs: z.array(z.string().url()).optional(),
  })
});

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: reference('authors'),
    reviewedBy: reference('authors').optional(),
    reviewedDate: z.coerce.date().optional(),
    category: z.enum(['auto','health','homeowners','life','disability','business','travel','pets']),
    heroImage: z.string().optional(),
    canonical: z.string().url().optional(),
    affiliate: z.boolean().default(false)
  })
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum(['auto','health','homeowners','life','disability','business','travel','pets']),
    icon: z.string().optional(),
    sortOrder: z.number().optional(),
  })
});

export const collections = { 
  posts: postCollection, 
  authors: authorsCollection,
  tools: toolsCollection 
};
