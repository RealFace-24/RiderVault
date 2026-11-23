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
                Loading...
            </p>
        );
    }

    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    Could not load product: {error}
                </p>
                <Link to="/">Back to gear</Link>
            </section>
        );
    }

    const cantitate = echipament.cantitate ?? (echipament.inStoc ? 5 : 0);

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                ← Back to gear
            </Link>

            <h2
                className={!echipament.inStoc ? styles.done : undefined}
                data-testid="detail-title"
            >
                {echipament.denumire}
            </h2>

            <dl className={styles.fields}>
                <dt>Riding style</dt>
                <dd>
                    <span className={`badge badge-${echipament.stil}`}>
                        {ETICHETE_STIL[echipament.stil] ?? echipament.stil}
                    </span>
                </dd>

                <dt>Available quantity</dt>
                <dd>{echipament.inStoc ? `${cantitate} units` : "0 units (sold out)"}</dd>

                <dt>Availability</dt>
                <dd>{echipament.inStoc ? "In stock" : "Sold out"}</dd>

                <dt>Product ID</dt>
                <dd>{echipament.id}</dd>
            </dl>
        </section>
    );
}
