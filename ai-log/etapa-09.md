# Stage 9: AI log

## Tools
- Codex

## Conversations
- Implementarea unui backend propriu cu Node.js și Express pentru RiderVault

## Key requests
### 1. Înlocuirea API-ului mock cu un backend Express
- Asked: Cum înlocuiesc `json-server` cu un API propriu, păstrând frontendul și operațiile CRUD deja implementate?
- Got: Un server Express organizat în `backend/src/`, cu rute REST pentru listare, detalii, creare, actualizare și ștergere; middleware pentru JSON și CORS; validare pe server; răspunsuri HTTP și tratarea centralizată a erorilor.
- Changed or rejected: Datele inițiale sunt păstrate într-un array în `backend/src/server.js` și se resetează la repornirea serverului. Persistența în MariaDB rămâne pentru Etapa 10.

### 2. Configurarea comunicării frontend-backend
- Asked: Cum configurez frontendul să trimită cererile către noul server și să pot modifica originea permisă pentru CORS?
- Got: URL-ul API-ului este configurabil prin `VITE_API_URL`, iar backendul folosește `CORS_ORIGIN` și `PORT`. Valorile de configurare sunt documentate în fișiere `.env.example`, iar fișierele `.env` locale sunt ignorate de Git.

## What I learned / what did not work
Am înțeles rolul middleware-urilor Express, diferența dintre validarea din formular și validarea obligatorie pe server, codurile HTTP potrivite pentru operațiile CRUD și motivul pentru care CORS trebuie configurat când frontendul și backendul rulează pe porturi diferite. Datele rămân temporare până la adăugarea bazei de date în etapa următoare.
