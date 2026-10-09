# RiderVault
A web platform and online shop interface for motorcycle riding gear, tracking product availability and seasonal stock.

## Data model

| Field       | Type         | Notes                                |
| :---------- | :----------- | :----------------------------------- |
| productName | text         | required, max 100 chars              |
| inStock     | boolean      | toggled from the list, default false |
| ridingStyle | fixed values | Urban, Touring, Sport                |
| category    | relation     | Helmets, Jackets, Gloves, Boots      |
| user        | relation     | the owner of the item (from week 11) |

Sample data used across all stages:
1. Cască Shoei GT-Air 3, active, Touring
2. Geacă piele Dainese Racing, done, Sport
3. Mănuși impermeabile Revit, active, Urban

## AI usage

| Tool   | Used for                                                                |
| :----- | :---------------------------------------------------------------------- |
| Gemini | Brainstorming theme, HTML semantic structure and CSS stylesheet styling |

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

---

## Stage 1 Checklist

| ID    | Requirement                                         | Where (permalink)                       | How to check     |
| :---- | :-------------------------------------------------- | :-------------------------------------- | :--------------- |
| S1-R1 | README: description, fields, sample data, how to run| [README.md](https://github.com/RealFace-24/RiderVault/blob/41b9e09/README.md) | read             |
| S1-R2 | AI usage section                                    | [README.md](https://github.com/RealFace-24/RiderVault/blob/41b9e09/README.md) | read             |
| S1-R3 | AI log for stage 1                                  | [ai-log/etapa-01.md](https://github.com/RealFace-24/RiderVault/blob/41b9e09/ai-log/etapa-01.md) | read             |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L65](https://github.com/RealFace-24/RiderVault/blob/41b9e09/index.html#L10-L65) | open the page    |
| S1-R5 | finished card looks different                       | [css/style.css#L174-L178](https://github.com/RealFace-24/RiderVault/blob/41b9e09/css/style.css#L174-L178) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px                 | [css/style.css#L194-L199](https://github.com/RealFace-24/RiderVault/blob/41b9e09/css/style.css#L194-L199) | resize < 700px   |
| S1-R7 | visible focus, readable dark theme                  | [css/style.css#L188-L217](https://github.com/RealFace-24/RiderVault/blob/41b9e09/css/style.css#L188-L217) | Tab; dark mode   |
| S1-R8 | commit "Stage 1" pushed                             | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/41b9e09) | commit history   |

---

## Stage 2: data logic
Plain JavaScript, no DOM. `echipamente.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

