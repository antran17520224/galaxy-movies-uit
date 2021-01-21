import { request } from "../config/axios.config";

export const getAllFoods = () => {
    const endpoint = `/foods`;
    return request(endpoint, "GET", null);
};


