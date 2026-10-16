const echipamente = [
  { id: 1, denumire: "Cască Shoei GT-Air 3", inStoc: true, stil: "touring" },
  { id: 2, denumire: "Geacă piele Dainese Racing", inStoc: false, stil: "sport" },
  { id: 3, denumire: "Mănuși impermeabile Revit", inStoc: true, stil: "urban" }
];

export default function App() {
  const inStocCount = echipamente.filter((e) => e.inStoc).length;

  return (
    <>
      <header className="app-header">
        <h1>RiderVault</h1>
        <p>Platformă magazin echipament moto: stocuri și stiluri de mers.</p>
        <p className="app-count">
          {echipamente.length} produse, dintre care {inStocCount} active (în stoc)
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Produse în magazin</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(echipamente, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}