import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function temaInitiala() {
    const saved = window.localStorage.getItem("ridervault-theme");
    const theme = saved === "light" || saved === "dark"
        ? saved
        : document.documentElement.dataset.theme
            || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    return theme;
}

export default function Layout() {
    const [tema, setTema] = useState(temaInitiala);

    function handleTema() {
        const noua = tema === "light" ? "dark" : "light";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
        window.localStorage.setItem("ridervault-theme", noua);
    }

    return (
        <>
            <div className={styles.promoStrip}>FAST SHIPPING · GEAR UP FOR EVERY MILE</div>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <span className={styles.logo}>RiderVault</span>
                    <span className={styles.tagline}>GEAR UP. RIDE OUT.</span>
                    <div className={styles.actions}>
                        <nav className={styles.nav} data-testid="nav">
                            <NavLink to="/" end className={navClass}>
                                Gear
                            </NavLink>
                            <NavLink to="/despre" className={navClass}>
                                About
                            </NavLink>
                        </nav>
                        <button
                            type="button"
                            className={styles.themeToggle}
                            onClick={handleTema}
                            aria-pressed={tema === "dark"}
                        >
                            {tema === "dark" ? "Light mode" : "Dark mode"}
                        </button>
                    </div>
                </div>
            </header>
            <div className={styles.categoryBar} aria-label="Categorii echipamente">
                <div className={styles.categoryInner}><a href="/#catalog">HELMETS</a><a href="/#catalog">JACKETS</a><a href="/#catalog">GLOVES</a><a href="/#catalog">BOOTS</a><a href="/#catalog">PROTECTION</a></div>
            </div>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                RiderVault — Motorcycle gear for every ride
            </footer>
        </>
    );
}
