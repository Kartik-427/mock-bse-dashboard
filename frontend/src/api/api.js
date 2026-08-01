import axios from "axios";

const api = axios.create({
    baseURL: "https://mock-bse-dashboard.onrender.com/api/internal",
});

export default api;