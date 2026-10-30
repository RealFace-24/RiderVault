import { useState } from "react";
import EchipamentList from "./components/EchipamentList.jsx";

const ECHIPAMENTE_INITIALE = [
    { id: 1, denumire: "Cască Shoei GT-Air 3", inStoc: true, stil: "touring" },
    { id: 2, denumire: "Geacă piele Dainese Racing", inStoc: false, stil: "sport" },
    { id: 3, denumire: "Mănuși impermeabile Revit", inStoc: true, stil: "urban" }
];

function temaInitiala() {
    return "light";
}

export default function App() {
    const [echipamente, setEchipamente] = useState(ECHIPAMENTE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    function handleToggle(id) {
        setEchipamente((prev) =>
            prev.map((e) => (e.id === id ? { ...e, inStoc: !e.inStoc } : e))
        );
    }

    function handleDelete(id) {
        setEchipamente((prev) => prev.filter((e) => e.id !== id));
    }

    function handleTema() {
        const noua = tema === "light" ? "dark" : "light";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const inStocCount = echipamente.filter((e) => e.inStoc).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>RiderVault</h1>
                <p>Platformă magazin echipament moto: stocuri și stiluri de mers.</p>
                <p className="app-count">
                    {echipamente.length} produse, dintre care {inStocCount} active (în stoc)
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Produse în magazin</h2>
                    <EchipamentList
                        echipamente={echipamente}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
}