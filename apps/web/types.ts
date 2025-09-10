export type IdeaResult = {
  hooks: string[];
  outlines: string[];
  script: string;
  titles: string[];
  hashtags: string[];
};

export type RenderJob = {
  id: string;
  status: "QUEUED" | "RENDERING" | "DONE" | "FAILED";
  outputs?: { mp4: string; srt: string; thumbs: string[] };
  logs?: string[];
};

export type PublishRequest = {
  platforms: {
    youtube?: unknown;
    tiktok?: unknown;
    instagram?: unknown;
  };
  schedule?: string | null;
};

export type PlatformStatus = {
  youtube?: {
    state: "DRAFT" | "PUBLISHED" | "FAILED";
    videoId?: string;
    error?: string;
  };
  tiktok?: {
    state: "DRAFT" | "PUBLISHED" | "FAILED";
    videoId?: string;
    error?: string;
  };
  instagram?: {
    state: "DRAFT" | "PUBLISHED" | "FAILED";
    videoId?: string;
    error?: string;
  };
};

export type AnalyticsPoint = {
  date: string;
  views: number;
  watchTime: number;
  ctr?: number;
  likes?: number;
  comments?: number;
};
