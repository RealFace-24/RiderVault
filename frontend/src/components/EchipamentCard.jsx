import { Link } from "react-router-dom";
import { ETICHETE_STIL } from "../constants.js";
import styles from "./EchipamentCard.module.css";

export default function EchipamentCard({ echipament, onToggle, onDelete }) {
    return (
        <li
            className={echipament.inStoc ? styles.card : `${styles.card} ${styles.done}`}
            data-testid="item"
            data-id={echipament.id}
        >
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={echipament.inStoc}
                    onChange={() => onToggle(echipament.id)}
                    aria-label={`Marchează ${echipament.denumire}`}
                    data-testid="item-toggle"
                />
                <div>
                    <Link
                        to={`/echipamente/${echipament.id}`}
                        className={styles.title}
                        data-testid="item-link"
                    >
                        {echipament.denumire}
                    </Link>
                    <span className={`badge badge-${echipament.stil}`}>
                        Stil {ETICHETE_STIL[echipament.stil] ?? echipament.stil}
                    </span>
                </div>
            </div>

            <button
                className="btn-danger"
                onClick={() => onDelete(echipament.id)}
                aria-label={`Șterge ${echipament.denumire}`}
                data-testid="item-delete"
            >
                Șterge
            </button>
        </li>
    );
}