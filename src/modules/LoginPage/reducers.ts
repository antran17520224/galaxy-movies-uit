import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { ILogInState, initialState } from "./model/ILoginState";

export const name = "LoginPage";

export const reducer: Reducer<ILogInState> = (
    state: ILogInState = initialState,
    action: ActionTypes
): ILogInState => {
    switch (action.type) {
        case Keys.POST_EMPLOYEE_LOGIN:
            return onPostEmployeeLogin(state, action);
        case Keys.POST_EMPLOYEE_LOGIN_SUCCESS:
            return onPostEmployeeLoginSuccess(state, action);
        case Keys.POST_EMPLOYEE_LOGIN_FAIL:
            return onPostEmployeeLoginFail(state, action);

        case Keys.GET_PERMISSIONS:
            return onGetPermissions(state, action);
        case Keys.GET_PERMISSIONS_SUCCESS:
            return onGetPermissionsSuccess(state, action);
        case Keys.GET_PERMISSIONS_FAIL:
            return onGetPermissionsFail(state, action);
        default:
            return state;
    }
};

//IActions: the interface of current action

const onPostEmployeeLogin = (
    state: ILogInState,
    action: IActions.IPostEmployeeLogin
) => {
    return {
        ...state,
        isProcessing: true,
    };
};
const onPostEmployeeLoginSuccess = (
    state: ILogInState,
    action: IActions.IPostEmployeeLoginSuccess
) => {
    const { accessToken, refreshToken } = action.payload;
    return {
        ...state,
        accessToken,
        refreshToken,
        isProcessing: false,
    };
};
const onPostEmployeeLoginFail = (
    state: ILogInState,
    action: IActions.IPostEmployeeLoginFail
) => {
    return {
        ...state,
        isProcessing: false,
    };
};

const onGetPermissions = (
    state: ILogInState,
    action: IActions.IGetPermissions
) => {
    return {
        ...state,
        isLoading: true,
    };
};
const onGetPermissionsSuccess = (
    state: ILogInState,
    action: IActions.IGetPermissionsSuccess
) => {
    let data = action.payload;
    let rolePermissions = [...state.rolePermissions];
    let acceptedRole = [];
    data.forEach((record) => {
        record["permissions"].forEach((permission) => {
            const index = rolePermissions.findIndex(
                (role) => role.permissionKey === permission.key
            );
            if (index !== -1) {
                if (!acceptedRole.includes(record.groupKey)) {
                    acceptedRole.push(record.groupKey);
                }
                acceptedRole.push(permission.key);
            }
        });
    });
    localStorage.setItem("acceptedRole", JSON.stringify(acceptedRole));
    return {
        ...state,
        acceptedRole,
        isLoading: false,
    };
};
const onGetPermissionsFail = (
    state: ILogInState,
    action: IActions.IGetPermissionsFail
) => {
    return {
        ...state,
        isLoading: false,
    };
};
