import EchipamentCard from "./EchipamentCard.jsx";

export default function EchipamentList({ echipamente }) {
    if (echipamente.length === 0) {
        return <p className="empty">Nu există niciun echipament în magazin.</p>;
    }

    return (
        <ul className="item-list">
            {echipamente.map((echipament) => (
                <EchipamentCard key={echipament.id} echipament={echipament} />
            ))}
        </ul>
    );
}