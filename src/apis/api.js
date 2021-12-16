import axios from "axios";

const api = axios.create({
    // baseURL: 'https://61b9880938f69a0017ce6099.mockapi.io/'
    baseURL: 'http://localhost:8080/'
})

export default api;