import { Link } from "react-router-dom";
import { ETICHETE_STIL } from "../constants.js";
import { CATEGORII } from "../constants.js";
import styles from "./EchipamentCard.module.css";

export default function EchipamentCard({ echipament, onToggle, onDelete, onEdit }) {
    const category = CATEGORII.find((item) => item.value === (echipament.categorie ?? "helmets"));
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
                    aria-label={echipament.inStoc ? `Mark ${echipament.denumire} as sold out` : `Mark ${echipament.denumire} as available`}
                    title={echipament.inStoc ? "Mark as sold out" : "Mark as available"}
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
                    <span className={styles.availability} data-testid="item-status">
                        <i className={echipament.inStoc ? styles.availableDot : styles.soldOutDot} />
                        {echipament.inStoc ? `In stock · ${echipament.cantitate ?? 1} pcs` : "Sold out"}
                    </span>
                    <span className={`badge badge-${echipament.stil}`}>
                        {ETICHETE_STIL[echipament.stil] ?? echipament.stil} style
                    </span>
                    <span className={styles.category}>{category?.label}</span>
                    <strong className={styles.price}>{Number(echipament.pret ?? 0).toFixed(2)} RON</strong>
                    {echipament.inStoc && Number(echipament.cantitate) <= 3 && <span className={styles.lowStock}>Low stock · {echipament.cantitate} left</span>}
                </div>
            </div>

            <button className={styles.editButton} onClick={() => onEdit(echipament)} type="button">Edit</button>
            <button
                className="btn-danger"
                onClick={() => onDelete(echipament.id)}
                aria-label={`Remove ${echipament.denumire} listing`}
                title="Remove a listing added by mistake"
                data-testid="item-delete"
            >
                Remove
            </button>
        </li>
    );
}
