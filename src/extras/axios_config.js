import axios from 'axios';

const BASE_URL = "http://127.0.0.1:5000";

const axiosConfig = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosConfig;