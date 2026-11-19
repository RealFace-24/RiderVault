export default function EchipamentCard({ echipament, onToggle, onDelete }) {
    const cantitate = echipament.cantitate ?? (echipament.inStoc ? 5 : 0);

    return (
        <li
            className={echipament.inStoc ? "item-card" : "item-card done"}
            data-testid="item"
            data-id={echipament.id}
        >
            <label className="task-main">
                <input
                    type="checkbox"
                    checked={echipament.inStoc}
                    onChange={() => onToggle(echipament.id)}
                    data-testid="item-toggle"
                />
                <div>
                    <h3 data-testid="item-title">{echipament.denumire}</h3>
                    <span className={`badge badge-${echipament.stil}`}>
                        Stil {echipament.stil} • {echipament.inStoc ? `${cantitate} buc.` : "Epuizat"}
                    </span>
                </div>
            </label>

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