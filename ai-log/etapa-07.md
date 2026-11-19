# Stage 7: AI log

## Tools
- Gemini

## Conversations
- Formular controlat cu validare, operații CRUD pe json-server, repere `data-testid` și `tw.json`

## Key requests
### 1. Implementarea formularului controlat și a operațiilor CRUD pe API
- Asked: Cum implementez Etapa 7 pentru RiderVault cu formular controlat, validare, salvare pe `json-server` (`POST`, `PATCH`, `DELETE`) și reperele pentru verificarea automată (`tw.json` și `data-testid`)?
- Got: Extinderea `api.js` cu funcția comună `request`, crearea componentei `EchipamentForm.jsx` cu validare pentru denumire și cantitate, legarea operațiilor CRUD în `App.jsx` pe principiul „întâi serverul, apoi state-ul” și adăugarea atributelor `data-testid` și a fișierului `tw.json`.

### 2. Alinierea claselor CSS pe branch-ul `main`
- Asked: De ce cardurile din dreapta nu aveau stil după integrarea modificărilor de Etapa 7?
- Got: Clasele din `EchipamentCard.jsx` fuseseră preluate din varianta experimentală de interfață; revenirea la clasele din `main` (păstrând atributele `data-testid` și `data-id`) a reparat aspectul paginii.

## What I learned / what did not work
Am înțeles fluxul corect „întâi serverul, apoi state-ul”, unde obiectul nou primește `id` direct de la server, de ce `handleAdd` nu prinde eroarea în `App.jsx` (ca să fie afișată lângă formular) și cum funcționează tratarea răspunsurilor `204 No Content` în funcția comună `request`. De asemenea, am văzut cât de important este ca atributele `data-testid` și cheile din `tw.json` să corespundă exact cu structura din `db.json` pentru verificarea automată.