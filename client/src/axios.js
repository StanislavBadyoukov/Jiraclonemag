import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const api = Axios.create({
    baseURL: BASE_URL,
});

export default api;