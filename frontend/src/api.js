// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });
    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }
    // 204 No Content nu are corp
    return res.status === 204 ? null : res.json();
}

export function fetchEchipamente() {
    return request("/echipamente");
}

export function createEchipament(echipament) {
    return request("/echipamente", {
        method: "POST",
        body: JSON.stringify(echipament),
    });
}

export function updateEchipament(id, changes) {
    return request(`/echipamente/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes),
    });
}

export function deleteEchipament(id) {
    return request(`/echipamente/${id}`, {
        method: "DELETE",
    });
}