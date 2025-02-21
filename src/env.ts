import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string().optional(),
    POSTGRES_PRISMA_URL: z.string().optional(),
    POSTGRES_URL_NO_SSL: z.string().optional(),
    POSTGRES_URL_NON_POOLING: z.string().optional(),
    POSTGRES_USER: z.string().optional(),
    POSTGRES_HOST: z.string().optional(),
    POSTGRES_PASSWORD: z.string().optional(),
    POSTGRES_DATABASE: z.string().optional(),
    CLERK_SECRET_KEY: z.string().optional(),
    BLOB_READ_WRITE_TOKEN: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    STRIPE_SECRET_KEY: z.string().optional(), // Stripe secret key
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().optional(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().optional(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().optional(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(), // Stripe publishable key
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY: z.string().optional(), // Stripe price ID for Pro monthly subscription
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY: z.string().optional(), // Stripe price ID for Pro Plus monthly subscription
    NEXT_PUBLIC_BASE_URL: z.string().min(1).url(), // Required & must be a valid URL
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, // Stripe publishable key
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY, // Stripe price ID for Pro monthly subscription  
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY, // Stripe price ID for Pro Plus monthly subscription
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL, // Required
  },
});
