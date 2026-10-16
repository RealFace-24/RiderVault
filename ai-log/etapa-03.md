# Stage 3: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (Vite initialization, React setup, and JSX basics)

## Key requests
### 1. Inițializarea proiectului React cu Vite și migrarea datelor
- Asked: Cum structurez proiectul React în folderul `frontend/` folosind Vite și cum mut datele și stilurile din etapele anterioare în `App.jsx` și `App.css`?
- Got: Pașii pentru mutarea fișierelor vechi în folderul `mockup/`, curățarea șablonului generat de Vite și codul componentei `App.jsx` care afișează contorul calculat dinamic și lista brută folosind `JSON.stringify`.
- Changed or rejected: Am adaptat textul contorului din antet și numele array-ului (`echipamente`) pentru a reflecta produsele din magazinul moto RiderVault, păstrând o singură coloană în clasa `.container` pentru această etapă.

## What I learned / what did not work
Am învățat diferențele de bază dintre HTML și JSX, cum ar fi utilizarea atributului `className` în loc de `class` și încadrarea expresiilor JavaScript între acolade `{}`. De asemenea, am înțeles rolul fișierului `.gitignore` pentru a preveni urcarea pe GitHub a folderelor generate automat care conțin dependențele și build-ul, precum `node_modules/` și `dist/`.