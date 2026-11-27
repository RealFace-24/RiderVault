import { Router } from "express";
import { validateProduct } from "../validation.js";

export function createEchipamenteRouter(products) {
    const router = Router();

    router.get("/", (_req, res) => res.json(products));

    router.get("/:id", (req, res) => {
        const product = products.find((item) => String(item.id) === req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found." });
        return res.json(product);
    });

    router.post("/", (req, res) => {
        const { errors, data } = validateProduct(req.body);
        if (Object.keys(errors).length) return res.status(400).json({ error: "Invalid product data.", details: errors });

        const nextId = Math.max(0, ...products.map((item) => Number(item.id) || 0)) + 1;
        const product = { id: nextId, ...data };
        products.push(product);
        return res.status(201).json(product);
    });

    router.patch("/:id", (req, res) => {
        const index = products.findIndex((item) => String(item.id) === req.params.id);
        if (index === -1) return res.status(404).json({ error: "Product not found." });
        if (req.body && Object.hasOwn(req.body, "id")) return res.status(400).json({ error: "Product ID cannot be changed." });
        const { errors, data } = validateProduct(req.body, { partial: true });
        if (Object.keys(errors).length) return res.status(400).json({ error: "Invalid product data.", details: errors });
        products[index] = { ...products[index], ...data };
        return res.json(products[index]);
    });

    router.delete("/:id", (req, res) => {
        const index = products.findIndex((item) => String(item.id) === req.params.id);
        if (index === -1) return res.status(404).json({ error: "Product not found." });
        products.splice(index, 1);
        return res.status(204).end();
    });

    return router;
}
