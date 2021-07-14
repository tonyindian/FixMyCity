import axios from "axios"

const baseURL =  "http://localhost:8000//backend/api/"
//http://localhost:8000/

const Axios = axios.create({
    baseURL: baseURL,
})

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

export default Axios;
