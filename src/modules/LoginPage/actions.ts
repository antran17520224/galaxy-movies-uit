import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { IEmployeeInfo } from "./model/ILoginState";

//#region POST Employee Login Actions
export const postEmployeeLogin = (
    data: IEmployeeInfo
): IActions.IPostEmployeeLogin => {
    return {
        type: Keys.POST_EMPLOYEE_LOGIN,
        payload: {
            ...data,
        },
    };
};
export const postEmployeeLoginSuccess = (
    res: any
): IActions.IPostEmployeeLoginSuccess => {
    return {
        type: Keys.POST_EMPLOYEE_LOGIN_SUCCESS,
        payload: {
            ...res,
        },
    };
};
export const postEmployeeLoginFail = (
    res: any
): IActions.IPostEmployeeLoginFail => {
    return {
        type: Keys.POST_EMPLOYEE_LOGIN_FAIL,
        payload: res,
    };
};
//#endregion

//#region Get Permissions Actions
export const getPermissions = (): IActions.IGetPermissions => {
    return {
        type: Keys.GET_PERMISSIONS,
    };
};
export const getPermissionsSuccess = (
    res: any
): IActions.IGetPermissionsSuccess => {
    return {
        type: Keys.GET_PERMISSIONS_SUCCESS,
        payload: res,
    };
};
export const getPermissionsFail = (res: any): IActions.IGetPermissionsFail => {
    return {
        type: Keys.GET_PERMISSIONS_FAIL,
        payload: res,
    };
};
//#endregion
