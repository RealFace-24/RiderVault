# Stage 5: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (React state and event handling)

## Key requests
### 1. Interactivitate, State și Tema Implicită
- Asked: Cum integrez funcțiile de comutare și ștergere pe listă folosind `useState`? Cum pot face tema aplicației predominant luminoasă by default și comutabilă prin buton?
- Got: Codul actualizat pentru cele trei componente React, incluzând destructurarea `onToggle` și `onDelete`. Tema a fost modificată să aibă `light` by default, cu un element `dataset.theme` controlând schimbarea culorilor.

## What I learned / what did not work
Am înțeles conceptul de "controlled components" din React pentru inputurile checkbox și diferența dintre a pasa o referință de funcție (`onClick={() => ...}`) vs a o apela direct. Am învățat să manipulez clasele CSS de la nivelul cel mai de sus (`:root`) pentru o soluție simplă de dark mode.