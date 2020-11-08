import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";

//#region POST Employee Login Actions

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
