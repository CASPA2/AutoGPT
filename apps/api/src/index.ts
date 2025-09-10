import Fastify from 'fastify';
import { z } from 'zod';
import { getEnv } from '@viral/shared';

const env = getEnv();
const app = Fastify();

const ideaRequest = z.object({
  topic: z.string(),
  niche: z.string().optional(),
  durationHint: z.number().optional()
});

type IdeaRequest = z.infer<typeof ideaRequest>;

app.post('/v1/ideas/generate', async (request, reply) => {
  const body = ideaRequest.parse(request.body);
  const hooks = Array.from({ length: 5 }).map((_, i) => `Hook ${i + 1} for ${body.topic}`);
  const outlines = Array.from({ length: 3 }).map((_, i) => [`Point ${i + 1}`]);
  const script = `Intro about ${body.topic}`;
  return { hooks, outlines, script };
});

app.get('/health', async () => ({ status: 'ok' }));

app.listen({ port: 3001, host: '0.0.0.0' }).then(() => {
  console.log(`API running on ${env.BASE_URL_API}`);
});
