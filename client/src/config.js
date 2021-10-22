import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:"https://donaldsblog.herokuapp.com/api/"
});