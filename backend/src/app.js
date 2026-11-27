import express from "express";
import cors from "cors";
import { createEchipamenteRouter } from "./routes/echipamente.js";

export function createApp(products) {
    const app = express();
    app.use(cors({ origin: process.env.CORS_ORIGIN ?? "http://localhost:5173" }));
    app.use(express.json({ limit: "100kb" }));
    app.get("/", (_req, res) => res.json({ name: "RiderVault API", status: "ok" }));
    app.get("/health", (_req, res) => res.json({ status: "ok" }));
    app.use("/echipamente", createEchipamenteRouter(products));
    app.use((_req, res) => res.status(404).json({ error: "Route not found." }));
    app.use((error, _req, res, _next) => {
        if (error instanceof SyntaxError && "body" in error) return res.status(400).json({ error: "Request body must be valid JSON." });
        console.error(error);
        return res.status(500).json({ error: "Internal server error." });
    });
    return app;
}
