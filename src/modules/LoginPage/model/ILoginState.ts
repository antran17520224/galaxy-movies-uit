import { IPermission } from "../../../common";

export interface IEmployeeInfo {
    username: string;
    password: string;
}

export interface ILogInState {
    accessToken: string;
    refreshToken: string;
    roleName: string;
    acceptedRole: Array<string> | any;
    rolePermissions: Array<IPermission>;
    isProcessing: boolean;
    isLoading: boolean;
}

/**
 --- InitialState
 */
export const initialState: ILogInState = {
    roleName: null || localStorage.getItem("roleName"),
    rolePermissions: null,
    acceptedRole: null || localStorage.getItem("acceptedRole"),
    accessToken: null || localStorage.getItem("accessToken"),
    refreshToken: null || localStorage.getItem("refreshToken"),
    isLoading: false,
    isProcessing: false,
};
