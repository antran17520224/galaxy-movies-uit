import { history } from "./../redux/store/configureStore.prod";
import axios from "axios";

export const contentType = {
    json: "application/json",
    formData: "multipart/form-data",
};


const callAPI = (
    endpoint,
    method,
    data,
    formData = false,
    loadJson = false
) => {
    const accessToken = localStorage.getItem("accessToken");
    const baseUrl = loadJson ? endpoint : `${process.env.API_URL}${endpoint}`;
    const headers = {
        Authorization: `Bearer ${accessToken ? accessToken : ""}`,
        "Content-Type": formData ? contentType.formData : contentType.json,
        "Access-Control-Allow-Origin": "*",
    };

    const options = {
        method,
        url: baseUrl,
        headers,
        data: method !== "GET" ? data : null,
    };

    return axios(options).catch((error) => {
        return new Promise((resolve, eject) => {
            return resolve(error.response);
        });
    });
};

export const request = async (
    endpoint,
    method,
    data,
    formData = false,
    loadJson = false
) => {
    try {
        const res = (await callAPI(
            endpoint,
            method,
            data,
            formData,
            loadJson
        )) as any;
        const { status } = res;
        if (status === 401) {
            history.push("/login");
            localStorage.clear();
            window.location.reload();
        } else {
            return {
                data: res.data,
                status,
            };
        }
    } catch (error) {
        const { status, data } = error.response;
        return {
            status,
            data,
        };
    }
};
