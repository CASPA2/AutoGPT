import { describe, it, expect } from "vitest";
import { ideaFormSchema } from "../lib/validation";

describe("ideaFormSchema", () => {
  it("validates topic", () => {
    const result = ideaFormSchema.safeParse({ topic: "x", durationHint: 30 });
    expect(result.success).toBe(true);
  });

  it("fails without topic", () => {
    const result = ideaFormSchema.safeParse({ topic: "", durationHint: 30 });
    expect(result.success).toBe(false);
  });
});
