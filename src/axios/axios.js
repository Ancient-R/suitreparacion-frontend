import axios from "axios";

// base url del backend
const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default clientAxios;