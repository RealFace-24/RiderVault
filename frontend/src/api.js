// All HTTP requests stay here; components do not call fetch directly.
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
        let message = `Server error: ${res.status}`;
        try {
            const body = await res.json();
            if (body.error) message = body.error;
        } catch {
            // Keep the status-based fallback for non-JSON responses.
        }
        throw new Error(message);
    }
    // 204 No Content has no response body.
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

export function fetchEchipament(id) {
    return request(`/echipamente/${id}`);
}
