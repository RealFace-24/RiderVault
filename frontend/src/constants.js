export const STILURI = [
    { value: "touring", label: "Touring" },
    { value: "sport", label: "Sport" },
    { value: "urban", label: "Urban" },
];

export const ETICHETE_STIL = Object.fromEntries(
    STILURI.map((s) => [s.value, s.label])
);