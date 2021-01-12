import { request } from "../config/axios.config";

export const createTicket = data => {
    const endpoint = `/tickets`;
    return request(endpoint, "POST", data);
};

export const confirmPayment = data => {
    const endpoint = `/create-payment`;
    return request(endpoint, "POST", data);
};
export const getTicketByUserId = () => {
    const endpoint = `/tickets/users`;
    return request(endpoint, "GET", null);
};
