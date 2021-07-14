import axios from "axios"

const baseURL =  "https://fix-my-city.propulsion-learn.ch/backend/api/"
//http://localhost:8000/

const Axios = axios.create({
    baseURL: baseURL,
})

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

export default Axios;
