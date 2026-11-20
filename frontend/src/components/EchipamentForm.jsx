import { useState } from "react";
import { STILURI } from "../constants.js";
import styles from "./EchipamentForm.module.css";

const DENUMIRE_MAX = 100;

export default function EchipamentForm({ onAdd }) {
    const [denumire, setDenumire] = useState("");
    const [stil, setStil] = useState("touring");
    const [cantitate, setCantitate] = useState("5");
    const [eroare, setEroare] = useState("");
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        const d = denumire.trim();
        if (d === "") return "Denumirea produsului este obligatorie.";
        if (d.length > DENUMIRE_MAX) {
            return `Denumirea are maximum ${DENUMIRE_MAX} de caractere.`;
        }
        const c = Number(cantitate);
        if (!Number.isInteger(c) || c < 1) {
            return "Cantitatea trebuie să fie un număr întreg pozitiv (cel puțin 1).";
        }
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
                inStoc: true,
            });
            setDenumire("");
            setStil("touring");
            setCantitate("5");
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
            <label>
                Denumire echipament
                <input
                    type="text"
                    value={denumire}
                    onChange={(e) => setDenumire(e.target.value)}
                    placeholder="Ex: Cască HJC RPHA 12"
                    maxLength={DENUMIRE_MAX}
                    aria-invalid={Boolean(eroare && denumire.trim() === "")}
                    data-testid="form-title"
                />
            </label>

            <label>
                Stil de mers
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

            <label>
                Cantitate (bucăți)
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
                {trimite ? "Se salvează..." : "Adaugă produs"}
            </button>
        </form>
    );
}