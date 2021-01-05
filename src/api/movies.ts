import { request } from "../config/axios.config";

export const getAllMovies = () => {
    const endpoint = `/movies`;
    return request(endpoint, "GET", null);
};

export const getMoviesByStatus = (data: { status: string }) => {
    const endpoint = `/movies/status?status=${data.status}`;
    return request(endpoint, "GET", null);
};
