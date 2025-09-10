import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  S3_ENDPOINT: z.string().url(),
  S3_ACCESS_KEY: z.string(),
  S3_SECRET_KEY: z.string(),
  S3_BUCKET: z.string(),
  YT_CLIENT_ID: z.string().optional(),
  YT_CLIENT_SECRET: z.string().optional(),
  YT_REDIRECT_URI: z.string().url().optional(),
  TT_CLIENT_KEY: z.string().optional(),
  TT_CLIENT_SECRET: z.string().optional(),
  TT_REDIRECT_URI: z.string().url().optional(),
  IG_APP_ID: z.string().optional(),
  IG_APP_SECRET: z.string().optional(),
  IG_REDIRECT_URI: z.string().url().optional(),
  TIMEZONE: z.string().default('Europe/Brussels'),
  BASE_URL_API: z.string().url(),
  BASE_URL_WEB: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export function getEnv(): Env {
  return envSchema.parse(process.env);
}
