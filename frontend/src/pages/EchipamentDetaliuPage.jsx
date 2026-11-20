import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchEchipament } from "../api.js";
import { ETICHETE_STIL } from "../constants.js";
import styles from "./EchipamentDetaliuPage.module.css";

export default function EchipamentDetaliuPage() {
    const { id } = useParams();
    const [echipament, setEchipament] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetchEchipament(id)
            .then((data) => {
                if (!ignore) {
                    setEchipament(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });
        return () => {
            ignore = true;
        };
    }, [id]);

    if (loading) {
        return (
            <p className="info" data-testid="loading">
                Se încarcă...
            </p>
        );
    }

    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    Echipamentul nu a putut fi încărcat: {error}
                </p>
                <Link to="/">Înapoi la listă</Link>
            </section>
        );
    }

    const cantitate = echipament.cantitate ?? (echipament.inStoc ? 5 : 0);

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                ← Înapoi la listă
            </Link>

            <h2
                className={!echipament.inStoc ? styles.done : undefined}
                data-testid="detail-title"
            >
                {echipament.denumire}
            </h2>

            <dl className={styles.fields}>
                <dt>Stil de mers</dt>
                <dd>
                    <span className={`badge badge-${echipament.stil}`}>
                        {ETICHETE_STIL[echipament.stil] ?? echipament.stil}
                    </span>
                </dd>

                <dt>Cantitate disponibilă</dt>
                <dd>{echipament.inStoc ? `${cantitate} buc.` : "0 buc. (stoc epuizat)"}</dd>

                <dt>Status</dt>
                <dd>{echipament.inStoc ? "În stoc (Activ)" : "Indisponibil (Epuizat)"}</dd>

                <dt>ID produs</dt>
                <dd>{echipament.id}</dd>
            </dl>
        </section>
    );
}