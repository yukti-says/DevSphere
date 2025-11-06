// utils/normalize.ts
export type Resource = {
  id: string; // resourceId
  title: string;
  description?: string;
  author?: string;
  thumbnail?: string;
  url: string;
  type: "tutorial" | "repository" | "blog" | "wallpaper";
};

export const normalizeYouTube = (item: any): Resource => ({
  id: item.id?.videoId || item.id,
  title: item.snippet?.title || "YouTube Video",
  description: item.snippet?.description || "",
  author: item.snippet?.channelTitle,
  thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
  url: `https://www.youtube.com/watch?v=${item.id?.videoId || item.id}`,
  type: "tutorial"
});

export const normalizeGitHub = (item: any): Resource => ({
  id: String(item.id),
  title: item.full_name || item.name,
  description: item.description || "",
  author: item.owner?.login,
  thumbnail: "", // no thumbnail for repo
  url: item.html_url,
  type: "repository"
});

export const normalizeUnsplash = (item: any): Resource => ({
  id: item.id,
  title: item.alt_description || item.description || "Unsplash Image",
  description: item.user?.bio || "",
  author: item.user?.name,
  thumbnail: item.urls?.small || item.urls?.thumb,
  url: item.links?.html || item.urls?.full,
  type: "wallpaper"
});

export const normalizeBlog = (item: any): Resource => ({
  id: item.guid || item.link || item.title,
  title: item.title,
  description: item.description || "",
  author: item.author || "",
  thumbnail: item.thumbnail || "",
  url: item.link,
  type: "blog"
});
