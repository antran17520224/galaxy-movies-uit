import { request } from "../config/axios.config";

export const getSessionByMovieId = (data : {movieId : string}) => {
    const endpoint = `/sessions/movie/${data.movieId}`;
    return request(endpoint, "GET", null);
};