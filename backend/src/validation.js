const STYLES = new Set(["urban", "touring", "sport"]);
const CATEGORIES = new Set(["helmets", "jackets", "gloves", "boots", "protection"]);

export function validateProduct(rawBody, { partial = false } = {}) {
    const body = rawBody && typeof rawBody === "object" && !Array.isArray(rawBody) ? rawBody : {};
    const errors = {};
    const data = {};

    if (!partial || Object.hasOwn(body, "denumire")) {
        if (typeof body.denumire !== "string" || !body.denumire.trim()) errors.denumire = "Product name is required.";
        else if (body.denumire.trim().length > 100) errors.denumire = "Product name must be 100 characters or fewer.";
        else data.denumire = body.denumire.trim();
    }

    if (!partial || Object.hasOwn(body, "inStoc")) {
        const value = body.inStoc ?? false;
        if (typeof value !== "boolean") errors.inStoc = "Availability must be true or false.";
        else data.inStoc = value;
    }
    if (!partial || Object.hasOwn(body, "stil")) {
        const value = body.stil ?? "touring";
        if (!STYLES.has(value)) errors.stil = "Choose a valid riding style.";
        else data.stil = value;
    }
    if (!partial || Object.hasOwn(body, "cantitate")) {
        const value = body.cantitate ?? 5;
        if (!Number.isInteger(value) || value < 0) errors.cantitate = "Quantity must be a non-negative whole number.";
        else data.cantitate = value;
    }

    if (Object.hasOwn(body, "categorie")) {
        if (!CATEGORIES.has(body.categorie)) errors.categorie = "Choose a valid product category.";
        else data.categorie = body.categorie;
    } else if (!partial) data.categorie = "helmets";

    if (Object.hasOwn(body, "pret")) {
        if (typeof body.pret !== "number" || !Number.isFinite(body.pret) || body.pret <= 0) errors.pret = "Price must be greater than zero.";
        else data.pret = body.pret;
    } else if (!partial) data.pret = 0;

    return { errors, data };
}
