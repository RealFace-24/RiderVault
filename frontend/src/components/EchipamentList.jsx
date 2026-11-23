import EchipamentCard from "./EchipamentCard.jsx";
import styles from "./EchipamentList.module.css";

export default function EchipamentList({ echipamente, onToggle, onDelete, onEdit }) {
    if (echipamente.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                No gear found.
            </p>
        );
    }

    return (
        <ul className={styles.list}>
            {echipamente.map((echipament) => (
                <EchipamentCard
                    key={echipament.id}
                    echipament={echipament}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}
