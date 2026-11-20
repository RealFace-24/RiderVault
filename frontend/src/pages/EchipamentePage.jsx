import { useEffect, useState } from "react";
import EchipamentList from "../components/EchipamentList.jsx";
import EchipamentForm from "../components/EchipamentForm.jsx";
import {
    createEchipament,
    deleteEchipament,
    fetchEchipamente,
    updateEchipament,
} from "../api.js";
import styles from "./EchipamentePage.module.css";

export default function EchipamentePage() {
    const [echipamente, setEchipamente] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchEchipamente();
                if (!ignore) setEchipamente(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => {
            ignore = true;
        };
    }, []);

    async function handleAdd(echipament) {
        const creat = await createEchipament(echipament);
        setEchipamente((prev) => [...prev, creat]);
    }

    async function handleToggle(id) {
        const echipament = echipamente.find((e) => e.id === id);
        try {
            const actualizat = await updateEchipament(id, {
                inStoc: !echipament.inStoc,
            });
            setEchipamente((prev) =>
                prev.map((e) => (e.id === id ? actualizat : e))
            );
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteEchipament(id);
            setEchipamente((prev) => prev.filter((e) => e.id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const inStocCount = echipamente.filter((e) => e.inStoc).length;

    return (
        <div className={styles.grid}>
            <section className="panel">
                <h2>Adaugă echipament</h2>
                <EchipamentForm onAdd={handleAdd} />
            </section>

            <section className="panel">
                <h2>Produse în magazin</h2>
                <p className={styles.summary}>
                    {echipamente.length} produse, dintre care {inStocCount} active (în stoc)
                </p>

                {loading && (
                    <p className="info" data-testid="loading">
                        Se încarcă lista de echipamente...
                    </p>
                )}

                {error && (
                    <p className="error" data-testid="error">
                        {error}
                    </p>
                )}

                {!loading && (
                    <EchipamentList
                        echipamente={echipamente}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                )}
            </section>
        </div>
    );
}