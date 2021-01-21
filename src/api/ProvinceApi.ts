import { request } from "../config/axios.config";

export const getProvinces = () => {
    const endpoint = "/province/city";
    return request(endpoint, "GET", null);
};

export const getAllDistricts = (data: { _id: string }) => {
    const endpoint = `/province/districts/${data._id}`;
    return request(endpoint, "GET", null);
};

export const getLocations = (data: {
    level: number;
    parentCode: number | string;
}) => {
    const endpoint = `/location?level=${data.level}&parentCode=${data.parentCode}`;
    return request(endpoint, "GET", null);
};
 
export const getLocationByAddress = (data: {
    city: number;
    district: number;
    ward: number;
}) => {
    const endpoint = `/location/address?city=${data.city}&district=${data.district}&ward=${data.ward}`;
    return request(endpoint, "GET", null);
};
