import axios from "axios";

const apiUrl = import.meta.env.DEV ? import.meta.env.VITE_API_URL : "/";

// 🔴 ADICIONE ESTES CONSOLE.LOGS PARA DIAGNOSTICAR
console.log("DEV:", import.meta.env.DEV);
console.log("VITE_API_URL bruta:", import.meta.env.VITE_API_URL);
console.log("Tipo do apiUrl:", typeof apiUrl, "Valor:", apiUrl);

export const api = axios.create({
    baseURL: String(apiUrl || "/"), // String() força o valor a virar texto, evitando o crash do Axios
    headers: {
        "Content-Type": "application/json"
    }
});