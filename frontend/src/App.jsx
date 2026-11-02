import { useState, useEffect } from "react";
import EchipamentList from "./components/EchipamentList.jsx";
import { fetchEchipamente } from "./api.js";

function temaInitiala() {
    return "light";
}

export default function App() {
    const [echipamente, setEchipamente] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);

    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchEchipamente();
                if (!ignore) setEchipamente(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => {
            ignore = true;
        };
    }, []);

    function handleToggle(id) {
        setEchipamente(prev => prev.map(e => e.id === id ? { ...e, inStoc: !e.inStoc } : e));
    }

    function handleDelete(id) {
        setEchipamente(prev => prev.filter(e => e.id !== id));
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

                    {loading && <p className="info">Se încarcă lista de echipamente...</p>}

                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}

                    {!loading && !error && (
                        <EchipamentList
                            echipamente={echipamente}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>
        </>
    );
}