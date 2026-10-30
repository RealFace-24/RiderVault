const ETICHETE_STIL = { sport: "Sport", touring: "Touring", urban: "Urban" };

export default function EchipamentCard({ echipament, onToggle, onDelete }) {
    return (
        <li className={echipament.inStoc ? "item-card" : "item-card done"}>
            <label className="task-main">
                <input
                    type="checkbox"
                    checked={echipament.inStoc}
                    onChange={() => onToggle(echipament.id)}
                />
                <div>
                    <h3>{echipament.denumire}</h3>
                    <span className={`badge badge-${echipament.stil}`}>
                        {ETICHETE_STIL[echipament.stil]}
                    </span>
                </div>
            </label>
            <button
                className="btn-danger"
                onClick={() => onDelete(echipament.id)}
                aria-label={`Șterge ${echipament.denumire}`}
            >
                Șterge
            </button>
        </li>
    );
}