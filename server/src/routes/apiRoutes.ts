import express from "express";
import { searchResources, getFeaturedResources, getFavorites, toggleFavorite } from "../controllers/resourcesController";

const router = express.Router();

router.get("/search", searchResources);                           // ?q=react&type=github
router.get("/resources/featured", getFeaturedResources);         // ?type=github
router.get("/favorites", getFavorites);
router.post("/favorites/:resourceId", toggleFavorite);

export default router;
