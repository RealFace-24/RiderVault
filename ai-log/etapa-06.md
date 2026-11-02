# Stage 6: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (Data fetching with JSON server and useEffect)

## Key requests
### 1. Extragerea datelor într-un server fals (Mock API)
- Asked: Cum leg componentele la un server extern, setez variabile de mediu și tratez stările de loading/eroare?
- Got: Codul pentru rularea `json-server` cu `db.json`, funcția `fetchEchipamente` în `api.js` și integrarea folosind `useEffect` în `App.jsx`, incluzând mecanismul cu `ignore` pentru a preveni "race conditions" în timpul randărilor multiple din modul dezvoltare.

## What I learned / what did not work
Am înțeles de ce datele inițiale nu mai stau direct în codul React (useState-ul pornește cu `[]`) și cum să definesc o funcție `async` internă în `useEffect` pentru a evita problemele, gestionând cele 3 stări inevitabile ale oricărei cereri HTTP: loading, succes și eroare.