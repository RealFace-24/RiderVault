import EchipamentCard from "./EchipamentCard.jsx";

export default function EchipamentList({ echipamente, onToggle, onDelete }) {
    if (echipamente.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                Nu există niciun echipament.
            </p>
        );
    }

    return (
        <ul className="item-list">
            {echipamente.map((echipament) => (
                <EchipamentCard
                    key={echipament.id}
                    echipament={echipament}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}