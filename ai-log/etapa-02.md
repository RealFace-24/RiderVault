# Stage 2: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (Data logic implementation and immutable arrays)

## Key requests
### 1. Implementarea logicii pe date (JavaScript)
- Asked: Am nevoie de logica datelor (JS) pentru magazinul moto RiderVault pe baza cerințelor din PDF: listare, filtrare, căutare, adăugare validată, ștergere și comutare.
- Got: Codul complet din `echipamente.js` care folosește metodele `map`, `filter`, `reduce` și respectă imutabilitatea.
- Changed or rejected: Am adaptat denumirile funcțiilor (`adaugaTask` a devenit `adaugaEchipament`) și valorile fixe (`sport`, `touring`, `urban`) conform temei proiectului.

## What I learned / what did not work
Am înțeles principiul imutabilității (returnarea de liste/obiecte noi în loc de modificarea lor pe loc) folosind `...lista`. Am învățat cum funcția `reduce()` ajută la găsirea id-ului maxim pentru a preveni id-urile duplicate la adăugarea de noi produse.