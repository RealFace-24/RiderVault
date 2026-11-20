# Stage 8: AI log

## Tools
- Gemini

## Conversations
- Configurarea rutării cu React Router, pagina de detaliu `/echipamente/:id`, pagina 404, migrarea stilurilor în CSS Modules și sincronizarea temei Dark/Light

## Key requests
### 1. Rutare multi-pagină și migrare la CSS Modules
- Asked: Cum împart aplicația RiderVault în mai multe pagini cu React Router (`/`, `/echipamente/:id`, `/despre`, `*`), cum păstrez atributele `data-testid` pentru verificarea automată și cum mut stilurile în fișiere `.module.css`?
- Got: Structurarea folderului `src/` în `components/` și `pages/`, crearea `Layout.jsx` cu `NavLink` și `Outlet`, mutarea stilurilor comune în `index.css` și a celor de componentă în `.module.css`, adăugarea `fetchEchipament(id)` în `api.js` și marcarea noilor elemente cu `data-testid` (`nav`, `item-link`, `detail`, `detail-title`, `not-found`).

### 2. Sincronizarea butonului de temă cu preferința sistemului
- Asked: De ce pagina pornea în modul întunecat, dar butonul afișa „Mod întunecat” și trebuia apăsat de două ori pentru a trece în modul luminos?
- Got: Regula CSS `@media (prefers-color-scheme: dark)` pornea automat tema întunecată, în timp ce state-ul din `Layout.jsx` era inițializat fix pe `"light"`. Inițializarea state-ului prin `window.matchMedia("(prefers-color-scheme: dark)")` a sincronizat butonul cu tema reală din prima încărcare.

## What I learned / what did not work
Am înțeles cum funcționează `<Outlet />` pentru păstrarea unui layout unic pe toate rutele, de ce `NavLink` are nevoie de atributul `end` pe ruta `/` pentru a nu rămâne activ permanent și cum generează CSS Modules clase unice la build. De asemenea, am văzut cum trebuie tratat un `id` inexistent (404) în pagina de detaliu fără a declanșa eroarea de ESLint `react-hooks/set-state-in-effect` și cât de important este ca state-ul React să fie aliniat cu regulile media CSS.