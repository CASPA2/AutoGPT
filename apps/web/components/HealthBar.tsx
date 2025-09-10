"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../lib/client";

export function HealthBar() {
  const { data } = useQuery({
    queryKey: ["health"],
    queryFn: () => apiFetch<{ api: boolean }>("/v1/health"),
  });
  return (
    <div className="text-sm text-gray-500">
      API: {data?.api ? "up" : "down"}
    </div>
  );
}
