/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IError } from "../../common";
import { IEmployeeInfo } from "./model/ILoginState";

export interface IHandleClear extends Action {
    readonly type: Keys.HANDLE_CLEAR;
    payload: {
        type: string;
    };
}

//#region POST Employee Login IActions
export interface IPostEmployeeLogin extends Action {
    readonly type: Keys.POST_EMPLOYEE_LOGIN;
    payload: IEmployeeInfo;
}

export interface IPostEmployeeLoginSuccess extends Action {
    readonly type: Keys.POST_EMPLOYEE_LOGIN_SUCCESS;
    payload: {
        accessToken: string;
        refreshToken: string;
    };
}

export interface IPostEmployeeLoginFail extends Action {
    readonly type: Keys.POST_EMPLOYEE_LOGIN_FAIL;
    payload: Array<IError>;
}
//#endregion

//#region  Get Permissions IActions
export interface IGetPermissions extends Action {
    readonly type: Keys.GET_PERMISSIONS;
}
export interface IGetPermissionsSuccess extends Action {
    readonly type: Keys.GET_PERMISSIONS_SUCCESS;
    payload: any;
}
export interface IGetPermissionsFail extends Action {
    readonly type: Keys.GET_PERMISSIONS_FAIL;
    payload: any;
}
//#endregion
