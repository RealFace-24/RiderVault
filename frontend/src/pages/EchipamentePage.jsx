import { useEffect, useState } from "react";
import { CATEGORII, STILURI } from "../constants.js";
import EchipamentList from "../components/EchipamentList.jsx";
import EchipamentForm from "../components/EchipamentForm.jsx";
import {
    createEchipament,
    deleteEchipament,
    fetchEchipamente,
    updateEchipament,
} from "../api.js";
import styles from "./EchipamentePage.module.css";

export default function EchipamentePage() {
    const [echipamente, setEchipamente] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [styleFilter, setStyleFilter] = useState("all");
    const [availabilityFilter, setAvailabilityFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [sortBy, setSortBy] = useState("name");
    const [editing, setEditing] = useState(null);

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

    async function handleAdd(echipament) {
        if (editing) {
            const updated = await updateEchipament(editing.id, echipament);
            setEchipamente((prev) => prev.map((item) => item.id === editing.id ? updated : item));
            setEditing(null);
            return;
        }
        const creat = await createEchipament(echipament);
        setEchipamente((prev) => [...prev, creat]);
    }

    async function handleToggle(id) {
        const echipament = echipamente.find((e) => e.id === id);
        try {
            const actualizat = await updateEchipament(id, {
                inStoc: !echipament.inStoc,
            });
            setEchipamente((prev) =>
                prev.map((e) => (e.id === id ? actualizat : e))
            );
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteEchipament(id);
            setEchipamente((prev) => prev.filter((e) => e.id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const inStocCount = echipamente.filter((e) => e.inStoc).length;
    const totalBucati = echipamente.reduce((total, e) => total + (e.inStoc ? Number(e.cantitate ?? 1) : 0), 0);
    const filteredEchipamente = echipamente.filter((item) => {
        const matchesSearch = item.denumire.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase());
        const matchesStyle = styleFilter === "all" || item.stil === styleFilter;
        const matchesAvailability = availabilityFilter === "all"
            || (availabilityFilter === "available" && item.inStoc)
            || (availabilityFilter === "sold-out" && !item.inStoc);
        const matchesCategory = categoryFilter === "all" || (item.categorie ?? "helmets") === categoryFilter;
        return matchesSearch && matchesStyle && matchesAvailability && matchesCategory;
    }).sort((a, b) => {
        if (sortBy === "price-low") return Number(a.pret ?? 0) - Number(b.pret ?? 0);
        if (sortBy === "price-high") return Number(b.pret ?? 0) - Number(a.pret ?? 0);
        if (sortBy === "stock") return Number(b.cantitate ?? 0) - Number(a.cantitate ?? 0);
        return a.denumire.localeCompare(b.denumire);
    });

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>BUILT FOR EVERY RIDE</span>
                    <h1>Ride far.<br /><em>Ride protected.</em></h1>
                    <p>Protective gear for long tours, city streets, and every corner in between.</p>
                    <a href="#catalog" className={styles.heroCta}>Shop the collection <span>↓</span></a>
                </div>
                <div className={styles.heroMark} aria-hidden="true"><span>RV</span><small>RIDE<br/>READY</small></div>
                <div className={styles.heroStats}>
                    <div><strong>{echipamente.length.toString().padStart(2, "0")}</strong><span>products in catalog</span></div>
                    <div><strong>{totalBucati.toString().padStart(2, "0")}</strong><span>items in stock</span></div>
                    <div><strong>01—03</strong><span>riding styles</span></div>
                </div>
            </section>
            <div className={styles.sectionHeading} id="catalog">
                <div><span className={styles.eyebrow}>THE RIDERVAULT COLLECTION</span><h2>Gear for the road</h2></div>
                <span className={styles.stockLabel}><i /> {inStocCount} available now</span>
            </div>
            <div className={styles.grid}>
                <section className={`panel ${styles.formPanel}`}>
                    <span className={styles.eyebrow}>INVENTORY</span>
                    <h2>{editing ? "Edit product" : "Add a product"}</h2>
                    <p className={styles.formIntro}>Add a new item to your catalog.</p>
                    <EchipamentForm key={editing?.id ?? "new"} onAdd={handleAdd} initialProduct={editing} onCancel={() => setEditing(null)} />
                </section>

            <section className="panel">
                <div className={styles.catalogPanel}>
                <p className={styles.summary}>{echipamente.length} products <span> / </span> {inStocCount} in stock</p>
                <div className={styles.filters}>
                    <label className={styles.searchBox}>
                        <span className={styles.visuallyHidden}>Search products</span>
                        <span aria-hidden="true">⌕</span>
                        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search gear..." type="search" />
                    </label>
                    <label>
                        <span className={styles.visuallyHidden}>Filter by riding style</span>
                        <select value={styleFilter} onChange={(event) => setStyleFilter(event.target.value)}>
                            <option value="all">All styles</option>
                            {STILURI.map((style) => <option key={style.value} value={style.value}>{style.label}</option>)}
                        </select>
                    </label>
                    <label><span className={styles.visuallyHidden}>Filter by category</span><select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}><option value="all">All categories</option>{CATEGORII.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}</select></label>
                    <label><span className={styles.visuallyHidden}>Sort products</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="name">Name: A–Z</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="stock">Most in stock</option></select></label>
                    <label>
                        <span className={styles.visuallyHidden}>Filter by availability</span>
                        <select value={availabilityFilter} onChange={(event) => setAvailabilityFilter(event.target.value)}>
                            <option value="all">All products</option>
                            <option value="available">In stock</option>
                            <option value="sold-out">Sold out</option>
                        </select>
                    </label>
                </div>

                {loading && (
                    <p className="info" data-testid="loading">
                        Loading gear...
                    </p>
                )}

                {error && (
                    <p className="error" data-testid="error">
                        {error}
                    </p>
                )}

                {!loading && (
                    <EchipamentList
                        echipamente={filteredEchipamente}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                        onEdit={setEditing}
                    />
                )}
                </div>
            </section>
            </div>
        </>
    );
}
