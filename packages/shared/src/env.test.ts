import { describe, expect, it } from 'vitest';
import { envSchema } from './env';

describe('env schema', () => {
  it('parses', () => {
    const parsed = envSchema.parse({
      DATABASE_URL: 'postgres://localhost:5432/vvg',
      REDIS_URL: 'redis://localhost:6379',
      S3_ENDPOINT: 'http://localhost:9000',
      S3_ACCESS_KEY: 'x',
      S3_SECRET_KEY: 'y',
      S3_BUCKET: 'b',
      BASE_URL_API: 'http://localhost:3001',
      BASE_URL_WEB: 'http://localhost:3000'
    });
    expect(parsed.DATABASE_URL).toBeDefined();
  });
});
