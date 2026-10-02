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
- [ ] Stage 2: data logic in JavaScript

---

## Stage 1 Checklist
*(Tabelul de completat după primul `git push`, conform ghidului)*

| ID    | Requirement                                         | Where (permalink)                       | How to check     |
| :---- | :-------------------------------------------------- | :-------------------------------------- | :--------------- |
| S1-R1 | README: description, fields, sample data, how to run| [README.md](...)                        | read             |
| S1-R2 | AI usage section                                    | [README.md](...)                        | read             |
| S1-R3 | AI log for stage 1                                  | [ai-log/etapa-01.md](...)               | read             |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L...-L...](...)             | open the page    |
| S1-R5 | finished card looks different                       | [css/style.css#L...-L...](...) (.done)  | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px                 | [css/style.css#L...-L...](...) (@media) | resize < 700px   |
| S1-R7 | visible focus, readable dark theme                  | [css/style.css#L...-L...](...)          | Tab; dark mode   |
| S1-R8 | commit "Stage 1" pushed                             | [link to the commit](...)               | commit history   |