import "dotenv/config";
import { createApp } from "./app.js";

const products = [
    { id: 4, denumire: "TCX X-Blend Boots", inStoc: false, stil: "urban", cantitate: 2, categorie: "boots", pret: 289.99 },
    { id: 5, denumire: "HJC Helmet", inStoc: false, stil: "urban", cantitate: 5, categorie: "helmets", pret: 549.99 },
    { id: 6, denumire: "Shoei NXR2 Full-Face Helmet", inStoc: true, stil: "sport", cantitate: 4, categorie: "helmets", pret: 1299.99 },
    { id: 7, denumire: "Revit Sand 4 H2O Touring Jacket", inStoc: true, stil: "touring", cantitate: 3, categorie: "jackets", pret: 1199.99 },
    { id: 8, denumire: "Alpinestars SMX-1 Air v2 Gloves", inStoc: true, stil: "sport", cantitate: 8, categorie: "gloves", pret: 399.99 },
    { id: 9, denumire: "Forma Adventure Low Motorcycle Boots", inStoc: false, stil: "touring", cantitate: 0, categorie: "boots", pret: 799.99 },
    { id: 10, denumire: "Five Stunt Evo Urban Gloves", inStoc: true, stil: "urban", cantitate: 6, categorie: "gloves", pret: 249.99 },
    { id: 11, denumire: "Dainese Wave D1 Back Protector", inStoc: true, stil: "touring", cantitate: 2, categorie: "protection", pret: 479.99 },
];
const port = Number(process.env.PORT ?? 3001);

createApp(products).listen(port, () => {
    console.log(`RiderVault API listening at http://localhost:${port}`);
});
