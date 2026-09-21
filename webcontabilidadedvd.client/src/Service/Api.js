import axios from "axios";

const apiUrl = import.meta.env.DEV
//? import.meta.env.VITE_API_URL : "/";
export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json"
    }
});