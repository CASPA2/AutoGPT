# Viral Video Generator Monorepo

This monorepo contains a proof-of-concept implementation of an automated short-form video pipeline. It uses a pnpm workspace layout with separate apps and packages.

## Structure

```
/apps
  api - Fastify API server
/packages
  shared - shared utilities (env schema)
prisma - database schema
```

## Setup

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Copy `.env.example` to `.env` and adjust values.
3. Run the stack
   ```bash
   pnpm dev
   ```

## Testing

Run unit tests with:

```bash
pnpm test
```
