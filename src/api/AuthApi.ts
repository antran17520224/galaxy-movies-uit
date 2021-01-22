import { request } from "../config/axios.config";

export const userRegister = (data: any) => {
    const endpoint = "/users/register";
    return request(endpoint, "POST", data);
};

export const activeAccount = (code: string) => {
    const endpoint = "/users/activate";
    return request(endpoint, "POST", code);
};

export const userLogin = (data: any) => {
    const endpoint = "/users/login";
    return request(endpoint, "POST", data);
};

export const userForgot = (data: any) => {
    const endpoint = "/users/forgot";
    return request(endpoint, "POST", data);
};

export const resetPassword = (data: {
    newPassword: string;
    confirmPassword: string;
    codeReset: string;
}) => {
    const endpoint = `/users/reset/${data.codeReset}`;
    return request(endpoint, "POST", {
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword
    });
};
export const uploadAvatar = (data : any) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar);
    const endpoint = `/users/upload-avatar`;
    return request(endpoint, "POST", formData, true);
};
