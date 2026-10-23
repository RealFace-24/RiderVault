# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Shared prompt session (React components, props, and list rendering)

## Key requests
### 1. Construirea componentelor pentru listă
- Asked: Cum să creez componentele `EchipamentCard` și `EchipamentList` pentru RiderVault, folosind map și destructurarea props, conform ghidului din PDF?
- Got: Codul pentru cele două componente. `EchipamentCard` preia proprietățile individuale, iar `EchipamentList` randează lista gestionând inclusiv cazul în care lista de elemente este goală. Codul include modificări ale claselor CSS bazate pe valoarea proprietății inStoc.

## What I learned / what did not work
Am aprofundat randarea listelor în React utilizând metoda `map` și importanța furnizării unui atribut unic `key` pe cel mai înalt element returnat în iterație, prevenind avertismentele de consolă. De asemenea, am înțeles fluxul unidirecțional de date prin `props` de la componenta părinte (`App`) la copiii (`EchipamentList` și `EchipamentCard`).