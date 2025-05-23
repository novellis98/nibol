import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  timeout: 5000, // 5 secondi timeout, puoi cambiarlo
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
