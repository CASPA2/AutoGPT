"use client";

import { useFormContext } from "react-hook-form";

export function PublishTargets() {
  const { register } = useFormContext();
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("platforms.youtube")} /> YouTube
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("platforms.tiktok")} /> TikTok
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("platforms.instagram")} /> Instagram
      </label>
    </div>
  );
}
