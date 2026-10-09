const echipamente = [
  { id: 1, denumire: "Cască Shoei GT-Air 3", inStoc: true, stil: "touring" },
  { id: 2, denumire: "Geacă piele Dainese Racing", inStoc: false, stil: "sport" },
  { id: 3, denumire: "Mănuși impermeabile Revit", inStoc: true, stil: "urban" }
];

const STILURI = ["sport", "touring", "urban"];

function listeazaDenumiri(lista) {
  return lista.map((e) => e.denumire);
}

function numaraInStoc(lista) {
  return lista.filter((e) => e.inStoc).length;
}

function cautaDupaDenumire(lista, text) {
  const textMic = text.toLowerCase();
  return lista.filter((e) => e.denumire.toLowerCase().includes(textMic));
}

function nextId(lista) {
  return lista.reduce((max, e) => Math.max(max, e.id), 0) + 1;
}

function adaugaEchipament(lista, denumire, stil = "touring") {
  const denumireCurata = denumire.trim();
  
  if (!denumireCurata) {
    console.log("Denumirea nu poate fi goală.");
    return lista;
  }
  
  if (!STILURI.includes(stil)) {
    console.log("Stil de mers invalid:", stil);
    return lista;
  }
  
  const nou = {
    id: nextId(lista),
    denumire: denumireCurata,
    inStoc: true,
    stil: stil
  };
  
  return [...lista, nou];
}

function comutaStoc(lista, id) {
  return lista.map((e) => (e.id === id ? { ...e, inStoc: !e.inStoc } : e));
}

function stergeEchipament(lista, id) {
  return lista.filter((e) => e.id !== id);
}

console.log("--- Citire ---");
console.log("Denumiri:", listeazaDenumiri(echipamente).join(", "));
console.log("În stoc:", numaraInStoc(echipamente));
console.log("Căutare 'cască':", listeazaDenumiri(cautaDupaDenumire(echipamente, "cască")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaEchipament(echipamente, "Cizme TCX X-Five", "touring");
console.log("Lista nouă:", lista.length, "echipamente");
console.log("Originalul a rămas cu:", echipamente.length, "echipamente");

console.log("--- Modificare și ștergere ---");
lista = comutaStoc(lista, 1);
console.log("După comutarea id 1, în stoc sunt:", numaraInStoc(lista));

lista = stergeEchipament(lista, 3);
console.log("După ștergerea id 3, au rămas:", listeazaDenumiri(lista).join(", "));

console.log("--- Validare ---");
adaugaEchipament(lista, "   ", "sport");
adaugaEchipament(lista, "Pantaloni moto", "off-road");