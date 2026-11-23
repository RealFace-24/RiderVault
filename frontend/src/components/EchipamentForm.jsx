import { useState } from "react";
import { CATEGORII, STILURI } from "../constants.js";
import styles from "./EchipamentForm.module.css";

const DENUMIRE_MAX = 100;

export default function EchipamentForm({ onAdd, initialProduct, onCancel }) {
    const [denumire, setDenumire] = useState(initialProduct?.denumire ?? "");
    const [stil, setStil] = useState(initialProduct?.stil ?? "touring");
    const [cantitate, setCantitate] = useState(String(initialProduct?.cantitate ?? 5));
    const [categorie, setCategorie] = useState(initialProduct?.categorie ?? "helmets");
    const [pret, setPret] = useState(String(initialProduct?.pret ?? 199.99));
    const [eroare, setEroare] = useState("");
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        const d = denumire.trim();
        if (d === "") return "Product name is required.";
        if (d.length > DENUMIRE_MAX) {
            return `Product name must be ${DENUMIRE_MAX} characters or fewer.`;
        }
        const c = Number(cantitate);
        if (!Number.isInteger(c) || c < 1) {
            return "Quantity must be a positive whole number (at least 1).";
        }
        if (!Number.isFinite(Number(pret)) || Number(pret) <= 0) return "Enter a valid price greater than zero.";
        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const mesaj = valideaza();
        if (mesaj) {
            setEroare(mesaj);
            return;
        }
        setEroare("");
        setTrimite(true);
        try {
            await onAdd({
                denumire: denumire.trim(),
                stil,
                cantitate: Number(cantitate),
                inStoc: initialProduct?.inStoc ?? true,
                categorie,
                pret: Number(pret),
            });
            setDenumire("");
            setStil("touring");
            setCantitate("5");
            setCategorie("helmets"); setPret("199.99");
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
            <label>
                Product name
                <input
                    type="text"
                    value={denumire}
                    onChange={(e) => setDenumire(e.target.value)}
                    placeholder="e.g. HJC RPHA 12 helmet"
                    maxLength={DENUMIRE_MAX}
                    aria-invalid={Boolean(eroare && denumire.trim() === "")}
                    data-testid="form-title"
                />
            </label>

            <label>
                Category
                <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                    {CATEGORII.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
            </label>
            <label>
                Riding style
                <select
                    value={stil}
                    onChange={(e) => setStil(e.target.value)}
                    data-testid="form-stil"
                >
                    {STILURI.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>Price (RON)<input type="number" min="0.01" step="0.01" value={pret} onChange={(e) => setPret(e.target.value)} /></label>

            <label>
                Quantity (units)
                <input
                    type="number"
                    min="1"
                    value={cantitate}
                    onChange={(e) => setCantitate(e.target.value)}
                    aria-invalid={Boolean(
                        eroare && (!Number.isInteger(Number(cantitate)) || Number(cantitate) < 1)
                    )}
                    data-testid="form-cantitate"
                />
            </label>

            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}

            <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
                {trimite ? "Saving..." : initialProduct ? "Save changes" : "Add product"}
            </button>
            {initialProduct && <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>}
        </form>
    );
}
