import { Request, Response } from "express";
import fetch from "node-fetch";
import { normalizeYouTube, normalizeGitHub, normalizeUnsplash, normalizeBlog, Resource } from "../utils/normalize";
import { Favorite } from "../models/Favorite";

/**
 * GET /api/search?q=react&type=youtube|github|blogs|wallpapers
 */
export const searchResources = async (req: Request, res: Response) => {
  try {
    const q = String(req.query.q || "");
    const type = String(req.query.type || "").toLowerCase();

    if (!q) return res.status(400).json({ message: "Query param q is required" });

    if (type === "youtube" || type === "tutorials") {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${encodeURIComponent(q)}&key=${process.env.YT_KEY}`;
  const r = await fetch(url);
  const data: any = await r.json();
      const items = (data.items || []).map((it: any) => normalizeYouTube(it));
      return res.json(items);
    }

    if (type === "github" || type === "repositories") {
      const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&per_page=8`;
  const r = await fetch(url, { headers: { "Accept": "application/vnd.github.v3+json" }});
  const data: any = await r.json();
      const items = (data.items || []).map((it: any) => normalizeGitHub(it));
      return res.json(items);
    }

    if (type === "unsplash" || type === "wallpapers") {
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=12&client_id=${process.env.UNSPLASH_KEY}`;
  const r = await fetch(url);
  const data: any = await r.json();
      const items = (data.results || []).map((it: any) => normalizeUnsplash(it));
      return res.json(items);
    }

    if (type === "blogs" || type === "blog") {
      // using rss2json public converter
      const rssUrl = `https://medium.com/feed/tag/${encodeURIComponent(q)}`;
      const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  const r = await fetch(url);
  const data: any = await r.json();
      const items = (data.items || []).slice(0, 8).map((it: any) => normalizeBlog(it));
      return res.json(items);
    }

    return res.status(400).json({ message: "Invalid type param" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

/**
 * Featured resources: for now call search but without query or with popular defaults.
 * GET /api/resources/featured?type=github
 */
export const getFeaturedResources = async (req: Request, res: Response) => {
  try {
    const type = String(req.query.type || "").toLowerCase();
    // Simple featured strategy: call search with a popular query per type
    const defaults: any = {
      youtube: "javascript tutorial",
      github: "react",
      wallpapers: "code wallpaper",
      blogs: "programming"
    };
    const q = defaults[type] || "programming";
    // Reuse searchResources by crafting a request-like behavior:
    req.query.q = q;
    req.query.type = type;
    // call searchResources directly:
    return await searchResources(req, res as any);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/favorites
 */
export const getFavorites = async (_req: Request, res: Response) => {
  try {
    const favs = await Favorite.find().sort({ createdAt: -1 });
    return res.json(favs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * POST /api/favorites/:resourceId
 * body: { title, description?, author?, thumbnail?, url, type }
 * toggles: if exists -> remove, else -> add
 */
export const toggleFavorite = async (req: Request, res: Response) => {
  try {
    const resourceId = req.params.resourceId;
    const body = req.body;

    if (!resourceId) return res.status(400).json({ message: "resourceId required" });
    // check exists
    const exists = await Favorite.findOne({ resourceId });
    if (exists) {
      await Favorite.deleteOne({ resourceId });
      return res.json({ success: true, action: "removed" });
    } else {
      const fav = new Favorite({
        resourceId,
        title: body.title || body.title,
        description: body.description || "",
        author: body.author || "",
        thumbnail: body.thumbnail || "",
        url: body.url,
        type: body.type || "blog",
        raw: body.raw || {}
      });
      await fav.save();
      return res.json({ success: true, action: "added", favorite: fav });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};
