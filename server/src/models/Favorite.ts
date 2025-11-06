import mongoose, { Document, Schema } from "mongoose";

export interface IResource {
  resourceId: string; // external id unique per source
  title: string;
  description?: string;
  author?: string;
  thumbnail?: string;
  url: string;
  type: "tutorial" | "repository" | "blog" | "wallpaper";
  createdAt?: Date;
  raw?: any; // store full payload if needed
}

export interface IFavoriteDoc extends IResource, Document {}

const FavoriteSchema = new Schema<IFavoriteDoc>({
  resourceId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  author: String,
  thumbnail: String,
  url: { type: String, required: true, unique: true },
  type: { type: String, enum: ["tutorial","repository","blog","wallpaper"], required: true },
  raw: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

export const Favorite = mongoose.model<IFavoriteDoc>("Favorite", FavoriteSchema);
