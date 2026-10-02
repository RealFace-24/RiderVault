# Stage 1: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (Mockup HTML/CSS and data mapping for RiderVault)

## Key requests
### 1. Project theme brainstorming & mapping
- Asked: Idei pentru proiectul de semestru și structura datelor pentru un magazin de echipamente moto.
- Got: Structura pe 5 câmpuri obligatorii (denumire, stoc, stil de mers, categorie, utilizator) și tabelul de adaptare față de TaskFlow.
- Changed or rejected: Am restrâns selecția fixă strict la 3 stiluri clare (Sport, Touring, Urban) pentru simplitatea machetei.

### 2. Layout structure and responsive Grid/Flexbox
- Asked: Generare schelet semantic HTML și stiluri CSS cu suport dark mode și responsive sub 700px.
- Got: Cod complet cu Grid (1fr 2fr), Flexbox pentru formular/carduri și variabile CSS în `:root`.
- Changed or rejected: Am adaptat paleta de culori din violet în nuanțe dinamice de roșu/gri potrivite tematicii moto.

## What I learned / what did not work
Am înțeles cum funcționează `box-sizing: border-box` pentru a menține dimensiunile previzibile și cum implementarea completă a culorilor prin variabile CSS în `:root` permite un dark mode nativ fără rescrierea regulilor de așezare.