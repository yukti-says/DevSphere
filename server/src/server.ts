import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";
import connectDB from "./config/db";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// Connect DB
connectDB();

// API
app.use("/api", apiRoutes);

app.get("/", (_req, res) => res.send("DevSphere API running"));

const PORT = process.env.PORT || 5000;
// Serve client in production
if (process.env.NODE_ENV === "production") {
	const clientDist = path.resolve(__dirname, "../../client/dist");
	app.use(express.static(clientDist));
	app.get("*", (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

app.listen(PORT, () => console.log(`🚀 Backend running on ${PORT}`));
