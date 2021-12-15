import axios from "axios";

const api = axios.create({
    baseURL: 'https://61b9880938f69a0017ce6099.mockapi.io/'
})

export default api;