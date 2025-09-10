"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../lib/client";

export function useRateLimits() {
  return useQuery({
    queryKey: ["rateLimits"],
    queryFn: () =>
      apiFetch<{ instagram: number; facebook: number }>("/v1/rate-limits"),
    staleTime: 1000 * 60,
  });
}
