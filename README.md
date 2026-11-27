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

**Terminal 1 — API**

```bash
cd backend
npm ci
# First run only: cp .env.example .env
npm run dev
```

**Terminal 2 — frontend**

```bash
cd frontend
npm ci
# First run only: cp .env.example .env
npm run dev
```

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [x] Stage 9: own backend with Express
- [ ] Stage 10: MariaDB and full CRUD

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


## Stage 2 Checklist

| ID    | Requirement                                    | Where (permalink)                               | How to check           |
| :---- | :--------------------------------------------- | :---------------------------------------------- | :--------------------- |
| S2-R1 | JS file linked, logs on page load              | [index.html#L9](https://github.com/RealFace-24/RiderVault/blob/07222c5/index.html#L9) | open page, F12         |
| S2-R2 | 3+ items with id, name, state, tag             | [echipamente.js#L1-L5](https://github.com/RealFace-24/RiderVault/blob/07222c5/echipamente.js#L1-L5) | read                   |
| S2-R3 | list, count, search, add, toggle, delete       | [echipamente.js#L9-L55](https://github.com/RealFace-24/RiderVault/blob/07222c5/echipamente.js#L9-L55) | console output         |
| S2-R4 | add rejects empty name and invalid tag         | [echipamente.js#L29-L37](https://github.com/RealFace-24/RiderVault/blob/07222c5/echipamente.js#L29-L37) | last 2 console lines   |
| S2-R5 | original array unchanged after add             | [echipamente.js#L65](https://github.com/RealFace-24/RiderVault/blob/07222c5/echipamente.js#L65) | console line           |
| S2-R6 | README Stage 2 section + AI log                | [README.md](https://github.com/RealFace-24/RiderVault/blob/07222c5/README.md), [ai-log/etapa-02.md](https://github.com/RealFace-24/RiderVault/blob/07222c5/ai-log/etapa-02.md) | read                   |
| S2-R7 | commit "Stage 2" pushed                        | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/07222c5) | commit history         |

---

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 3 Checklist

| ID    | Requirement                                    | Where (permalink)                               | How to check           |
| :---- | :--------------------------------------------- | :---------------------------------------------- | :--------------------- |
| S3-R1 | npm run dev starts without errors              | [frontend/package.json](https://github.com/RealFace-24/RiderVault/blob/1470973/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data        | [frontend/src/App.jsx#L13-L16](https://github.com/RealFace-24/RiderVault/blob/1470973/frontend/src/App.jsx#L13-L16) | edit data, save        |
| S3-R3 | data from README, not from the example         | [frontend/src/App.jsx#L1-L5](https://github.com/RealFace-24/RiderVault/blob/1470973/frontend/src/App.jsx#L1-L5) | compare with README    |
| S3-R4 | stage 1 styles reused                          | [frontend/src/App.css](https://github.com/RealFace-24/RiderVault/blob/1470973/frontend/src/App.css) | look at the page       |
| S3-R5 | node_modules ignored, build passes             | [frontend/.gitignore](https://github.com/RealFace-24/RiderVault/blob/1470973/frontend/.gitignore) | npm run build          |
| S3-R6 | README Stage 3 section + AI log                | [README.md](https://github.com/RealFace-24/RiderVault/blob/1470973/README.md), [ai-log/etapa-03.md](https://github.com/RealFace-24/RiderVault/blob/1470973/ai-log/etapa-03.md) | read                   |
| S3-R7 | commit "Stage 3" pushed                        | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/1470973) | commit history         |

---

## Stage 4: components
The list is rendered from the data, through two components:
`EchipamentList` receives the whole array and renders one card per item.
`EchipamentCard` receives a single item through props and displays it.


## Stage 4 Checklist

| ID    | Requirement                                    | Where (permalink)                               | How to check           |
| :---- | :--------------------------------------------- | :---------------------------------------------- | :--------------------- |
| S4-R1 | 2+ components in src/components/               | [frontend/src/components/](https://github.com/RealFace-24/RiderVault/tree/2c307b7/frontend/src/components) | open folder            |
| S4-R2 | card receives data through props               | [frontend/src/components/EchipamentCard.jsx#L3](https://github.com/RealFace-24/RiderVault/blob/2c307b7/frontend/src/components/EchipamentCard.jsx#L3) | read                   |
| S4-R3 | map + key={id}, no console warnings            | [frontend/src/components/EchipamentList.jsx#L10-L12](https://github.com/RealFace-24/RiderVault/blob/2c307b7/frontend/src/components/EchipamentList.jsx#L10-L12) | F12, Console           |
| S4-R4 | message for empty list                         | [frontend/src/components/EchipamentList.jsx#L4-L6](https://github.com/RealFace-24/RiderVault/blob/2c307b7/frontend/src/components/EchipamentList.jsx#L4-L6) | set array to []        |
| S4-R5 | state changes the card look                    | [frontend/src/components/EchipamentCard.jsx#L5](https://github.com/RealFace-24/RiderVault/blob/2c307b7/frontend/src/components/EchipamentCard.jsx#L5) | toggle a done flag     |
| S4-R6 | README Stage 4 section + AI log                | [README.md](https://github.com/RealFace-24/RiderVault/blob/2c307b7/README.md), [ai-log/etapa-04.md](https://github.com/RealFace-24/RiderVault/blob/2c307b7/ai-log/etapa-04.md) | read                   |
| S4-R7 | commit "Stage 4" pushed                        | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/2c307b7) | commit history         |

---

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Stage 5 Checklist

| ID    | Requirement                                    | Where (permalink)                               | How to check           |
| :---- | :--------------------------------------------- | :---------------------------------------------- | :--------------------- |
| S5-R1 | list kept in useState, in App                  | [frontend/src/App.jsx#L15](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L15) | read                   |
| S5-R2 | toggling changes state and card look           | [frontend/src/App.jsx#L18-L20](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L18-L20), [TaskCard](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/components/EchipamentCard.jsx#L5-L11) | click a checkbox       |
| S5-R3 | delete removes the item                        | [frontend/src/App.jsx#L22-L24](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L22-L24), [TaskCard](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/components/EchipamentCard.jsx#L19-L26) | click Delete           |
| S5-R4 | header counter derived, not in state           | [frontend/src/App.jsx#L32](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L32) | toggle, watch header   |
| S5-R5 | immutable updates (no push, splice, assignment)| [frontend/src/App.jsx#L18-L24](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L18-L24) | read                   |
| S5-R6 | light/dark toggle: state + data-theme on html  | [frontend/src/App.jsx#L26-L30](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.jsx#L26-L30), [App.css#L176-L197](https://github.com/RealFace-24/RiderVault/blob/2648c95/frontend/src/App.css#L176-L197) | click the button       |
| S5-R7 | no console warnings; README + AI log           | [README.md](https://github.com/RealFace-24/RiderVault/blob/2648c95/README.md), [ai-log/etapa-05.md](https://github.com/RealFace-24/RiderVault/blob/2648c95/ai-log/etapa-05.md) | F12, Console           |
| S5-R8 | commit "Stage 5" pushed                        | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/2648c95) | commit history         |

---

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.

**terminal 1, npm run api**
http://localhost:3001/echipamente

**terminal 2, npm run dev**
http://localhost:5173

## Stage 6 Checklist

| ID    | Requirement                                    | Where (permalink)                               | How to check           |
| :---- | :--------------------------------------------- | :---------------------------------------------- | :--------------------- |
| S6-R1 | npm run api starts, route shows JSON           | [package.json#L11](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/package.json#L11), [db.json](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/db.json) | open localhost:3001/echipamente |
| S6-R2 | data no longer in React code                   | [App.jsx#L10](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/App.jsx#L10) | read                   |
| S6-R3 | loading message while waiting                  | [App.jsx#L11](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/App.jsx#L11), [App.jsx#L70](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/App.jsx#L70) | --delay 4000           |
| S6-R4 | error message when API is down                 | [App.jsx#L12](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/App.jsx#L12), [App.jsx#L72-L76](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/App.jsx#L72-L76) | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env             | [api.js#L1-L9](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/src/api.js#L1-L9), [.env.example](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/frontend/.env.example) | search for fetch       |
| S6-R6 | README Stage 6 section + AI log                | [README.md](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/README.md), [ai-log/etapa-06.md](https://github.com/RealFace-24/RiderVault/blob/b1a8c10/ai-log/etapa-06.md) | read                   |
| S6-R7 | commit "Stage 6" pushed                        | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/b1a8c10) | commit history         |

## Stage 7: form and validation
Products can be added from the page. The form is controlled and validated, and every change (add, toggle, delete) goes to the API before it shows up in the list.

## Stage 7 Checklist

| ID    | Requirement                                                 | Where (permalink) | How to check |
| :---- | :---------------------------------------------------------- | :---------------- | :----------- |
| S7-R1 | controlled form: value + onChange on every field            | [EchipamentForm.jsx#L59-L97](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentForm.jsx#L59-L97) | read |
| S7-R2 | empty title shows an error, nothing is sent                 | [EchipamentForm.jsx#L18-L29](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentForm.jsx#L18-L29) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh           | [App.jsx#L39-L42](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/App.jsx#L39-L42), [api.js#L23-L28](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/api.js#L23-L28) | add, refresh |
| S7-R4 | toggle and delete survive refresh                           | [App.jsx#L44-L65](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/App.jsx#L44-L65), [api.js#L30-L41](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/api.js#L30-L41) | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | [EchipamentForm.jsx#L39-L54](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentForm.jsx#L39-L54), [EchipamentForm.jsx#L105-L107](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentForm.jsx#L105-L107) | --delay 3000; stop API and submit |
| S7-R6 | tw.json and the data-testid attributes from table 7.3       | [tw.json](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/tw.json), [EchipamentCard.jsx#L5-L33](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentCard.jsx#L5-L33), [EchipamentList.jsx#L6-L8](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/frontend/src/components/EchipamentList.jsx#L6-L8) | querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log                             | [README.md](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/README.md), [ai-log/etapa-07.md](https://github.com/RealFace-24/RiderVault/blob/e87f2f3/ai-log/etapa-07.md) | read |
| S7-R8 | commit "Stage 7" pushed                                     | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/e87f2f3) | commit history |

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/echipamente/:id`, and an about page, plus a 404 page. Component styles moved to CSS Modules.

## Stage 8 Checklist

| ID    | Requirement                                                            | Where (permalink) | How to check |
| :---- | :--------------------------------------------------------------------- | :---------------- | :----------- |
| S8-R1 | header navigation changes page without reload                          | [App.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/App.jsx), [Layout.jsx#L33-L40](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/components/Layout.jsx#L33-L40) | click links, watch Network |
| S8-R2 | click on an item opens its detail page                                 | [EchipamentCard.jsx#L21-L27](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/components/EchipamentCard.jsx#L21-L27), [EchipamentDetaliuPage.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/pages/EchipamentDetaliuPage.jsx) | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error             | [EchipamentDetaliuPage.jsx#L13-L50](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/pages/EchipamentDetaliuPage.jsx#L13-L50) | refresh /echipamente/1, open /echipamente/999 |
| S8-R4 | unknown URL shows the app 404 page                                     | [App.jsx#L15](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/App.jsx#L15), [NotFoundPage.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/pages/NotFoundPage.jsx) | open /ceva |
| S8-R5 | each component has its .module.css; index.css only shared styles       | [src/components](https://github.com/RealFace-24/RiderVault/tree/5224cda/frontend/src/components), [src/pages](https://github.com/RealFace-24/RiderVault/tree/5224cda/frontend/src/pages), [index.css](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/index.css) | read |
| S8-R6 | data-testid attributes from tables 7.3 and 8.2; detail route /<resource>/:id | [Layout.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/components/Layout.jsx), [EchipamentCard.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/components/EchipamentCard.jsx), [EchipamentDetaliuPage.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/pages/EchipamentDetaliuPage.jsx), [NotFoundPage.jsx](https://github.com/RealFace-24/RiderVault/blob/5224cda/frontend/src/pages/NotFoundPage.jsx) | querySelector in the console |
| S8-R7 | README Stage 8 section + AI log                                        | [README.md](https://github.com/RealFace-24/RiderVault/blob/5224cda/README.md), [ai-log/etapa-08.md](https://github.com/RealFace-24/RiderVault/blob/02b335b/ai-log/etapa-08.md) | read |
| S8-R8 | commit "Stage 8" pushed                                                | [link to the commit](https://github.com/RealFace-24/RiderVault/commit/5224cda) | commit history |

## Stage 9: own backend with Express
The `json-server` mock API has been replaced by an Express API in `backend/`. It provides REST routes for equipment, validates data on the server, handles errors, and enables CORS for the frontend origin. Initial data is kept in memory in `backend/src/server.js` and resets when the server restarts; persistence is planned for Stage 10.

**Terminal 1, `npm run dev` in `backend/`**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
API route: `http://localhost:3001/echipamente`

**Terminal 2, `npm run dev` in `frontend/`**
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Stage 9 Checklist

| ID    | Requirement                                             | Where to check | How to check |
| :---- | :------------------------------------------------------ | :------------- | :----------- |
| S9-R1 | Express backend starts on port 3001 and health returns 200 | `backend/package.json`, `backend/src/server.js`, `backend/src/app.js` | `cd backend && npm run dev`; open `/health` |
| S9-R2 | GET, POST, PATCH and DELETE routes work                 | `backend/src/routes/echipamente.js` | use `curl` against `/echipamente` |
| S9-R3 | Invalid product data returns 400 with an error message | `backend/src/validation.js` | POST an empty or invalid product |
| S9-R4 | Stage 7 CRUD works with the own API                    | `frontend/src/api.js` | add, edit, toggle, remove and refresh |
| S9-R5 | CORS allows the configured frontend origin             | `backend/src/app.js`, `backend/.env.example` | inspect browser console and response headers |

See [ai-log/etapa-09.md](ai-log/etapa-09.md) for the implementation notes.



