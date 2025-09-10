import { z } from "zod";

export const ideaFormSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
  niche: z.string().optional(),
  durationHint: z.number().min(15).max(180).default(60),
});
