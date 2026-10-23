const ETICHETE_STIL = { sport: "Sport", touring: "Touring", urban: "Urban" };

export default function EchipamentCard({ echipament }) {
    return (
        <li className={echipament.inStoc ? "item-card" : "item-card done"}>
            <div>
                <h3>{echipament.denumire}</h3>
                <span className={`badge badge-${echipament.stil}`}>
          {ETICHETE_STIL[echipament.stil]}
        </span>
            </div>
            <span className="status">{echipament.inStoc ? "În stoc" : "Epuizat"}</span>
        </li>
    );
}