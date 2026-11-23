import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bilingualText = z.object({
  en: z.string(),
  es: z.string(),
});

const bilingualList = z.object({
  en: z.array(z.string()),
  es: z.array(z.string()),
});

const reviewSchema = z.object({
  author: z.string(),
  origin: z.string(),
  rating: z.number().min(1).max(5),
  date: z.string(),
  source: z.string(),
  quote: bilingualText,
});

const faqSchema = z.object({
  question: bilingualText,
  answer: bilingualText,
});

const itineraryStepSchema = z.object({
  time: z.string(),
  title: bilingualText,
  description: bilingualText,
});

const tours = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tours' }),
  schema: z.object({
    bokunId: z.string(),
    internalCode: z.string().optional(),
    slug: z.string(),
    order: z.number(),
    catalogType: z.enum(['permanent', 'seasonal', 'transfer']),
    sectionId: z.enum([
      'must-sees',
      'food-mezcal',
      'culture-heritage',
      'history-museums',
      'day-trips',
      'seasonal',
      'transfers',
    ]),
    arivalOperatorType: z.enum(['Tours', 'Events', 'Transportation', 'Activities', 'Attractions']),
    arivalCategory: z.string(),
    arivalTags: z.array(z.string()),
    neighborhood: z.string(),
    gttdEligible: z.enum(['yes', 'conditional', 'no']),
    directWebRateBadge: z.boolean().default(false),
    featured: z.boolean().default(false),
    seasonalWindow: bilingualText.optional(),
    groupType: z.enum(['small-group', 'private']),
    maxGroupSize: z.number(),
    durationHours: z.number(),
    durationLabel: bilingualText,
    priceUsd: z.number(),
    otaComparisonUsd: z.number().optional(),
    title: bilingualText,
    shortTagline: bilingualText,
    summary: bilingualText,
    editorialIntro: bilingualText,
    heroImage: z.string(),
    heroImageAlt: bilingualText,
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: bilingualText,
      })
    ),
    meetingPoint: z.object({
      name: bilingualText,
      address: z.string(),
      pickupIncluded: z.boolean(),
      mapQuery: z.string(),
    }),
    included: bilingualList,
    notIncluded: bilingualList,
    noSurpriseNote: bilingualText,
    highlights: bilingualList,
    itinerary: z.array(itineraryStepSchema),
    faqs: z.array(faqSchema),
    reviews: z.array(reviewSchema).min(2),
    bokunCalendarWidgetPath: z.string().optional(),
  }),
});

export const collections = { tours };
