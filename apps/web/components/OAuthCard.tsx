"use client";

import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../lib/client";

export function OAuthCard({
  provider,
  connected,
}: {
  provider: "youtube" | "tiktok" | "instagram";
  connected: boolean;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => apiFetch(`/auth/${provider}/connect`, { method: "POST" }),
  });

  return (
    <div className="border p-4 rounded-md">
      <h3 className="mb-2 font-semibold capitalize">{provider}</h3>
      <button
        onClick={() => mutate()}
        disabled={isPending}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        {connected ? "Reconnect" : "Connect"}
      </button>
    </div>
  );
}
