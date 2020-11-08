/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IError } from "../../common";


export interface IHandleClear extends Action {
    readonly type: Keys.HANDLE_CLEAR;
    payload: {
        type: string;
    };
}

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
