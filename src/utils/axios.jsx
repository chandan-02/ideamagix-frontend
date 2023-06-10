import axios from "axios";
// Setting up base Url for fetching data
const Axios = axios.create({
    // baseURL: "http://localhost:9000/api/v1/",
    baseURL: "https://ideamagix-backend.onrender.com/api/v1/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${typeof window !== 'undefined' && localStorage.getItem('token')}`,
    },
});
export default Axios;