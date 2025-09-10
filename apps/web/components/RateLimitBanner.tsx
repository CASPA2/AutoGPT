"use client";

import { useRateLimits } from "../hooks/useRateLimits";

export function RateLimitBanner() {
  const { data } = useRateLimits();
  if (!data) return null;
  const { instagram, facebook } = data;
  if (instagram < 5 && facebook < 5) return null;
  return (
    <div className="p-2 bg-yellow-200 text-yellow-900 rounded">
      Instagram or Facebook posting limit reached. We will reschedule.
    </div>
  );
}
