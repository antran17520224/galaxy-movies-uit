import { IToggleModal } from "./../Ticketing/IActions";
import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import {
    ILogInState,
    initialState,
    MODAL_USER_LOGIN,
    USER_PAGE_CLEAR
} from "./model/ILoginState";
import { toast } from "react-toastify";

export const name = "LoginPage";

export const reducer: Reducer<ILogInState> = (
    state: ILogInState = initialState,
    action: ActionTypes
): ILogInState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);

        case Keys.HANDLE_CLEAR:
            return onHandleClear(state, action);

        case Keys.USER_REGISTER:
            return onUserRegister(state, action);
        case Keys.USER_REGISTER_SUCCESS:
            return onUserRegisterSuccess(state, action);
        case Keys.USER_REGISTER_FAIL:
            return onUserRegisterFail(state, action);

        case Keys.ACTIVE_ACCOUNT:
            return onActiveAccount(state, action);
        case Keys.ACTIVE_ACCOUNT_SUCCESS:
            return onActiveAccountSuccess(state, action);
        case Keys.ACTIVE_ACCOUNT_FAIL:
            return onActiveAccountFail(state, action);

        case Keys.USER_LOGIN:
            return onUserLogin(state, action);
        case Keys.USER_LOGIN_SUCCESS:
            return onUserLoginSuccess(state, action);
        case Keys.USER_LOGIN_FAIL:
            return onUserLoginFail(state, action);

        case Keys.SENT_MAIL_FORGOT:
            return onSentMailForgot(state, action);
        case Keys.SENT_MAIL_FORGOT_SUCCESS:
            return onSentMailForgotSuccess(state, action);
        case Keys.SENT_MAIL_FORGOT_FAIL:
            return onSentMailForgotFail(state, action);

            case Keys.RESET_PASSWORD:
                return onResetPassword(state, action);
            case Keys.RESET_PASSWORD_SUCCESS:
                return onResetPasswordSuccess(state, action);
            case Keys.RESET_PASSWORD_FAIL:
                return onResetPasswordFail(state, action);

        default:
            return state;
    }
};

//#region Handle Clear
const onHandleClear = (state: ILogInState, action: IActions.IHandleClear) => {
    const { type } = action.payload;
    switch (type) {
        case USER_PAGE_CLEAR.CLEAR_STATE_ACTIVE:
            return {
                ...state,
                isAccountActivated: false
            };

        default:
            return {
                ...state
            };
    }
};
//#endregion

//#region Toggle Modal
const onToggleModal = (state: ILogInState, action: IActions.IToggleModal) => {
    const { type, data } = action.payload;
    switch (type) {
        case MODAL_USER_LOGIN.MODAL_CONFIRM_REGISTER:
            return {
                ...state,
                isToggleModalConfirmRegister: !state.isToggleModalConfirmRegister,
                dataToRegister: data
            };
        case MODAL_USER_LOGIN.MODAL_ACTIVE_ACCOUNT:
            return {
                ...state,
                isToggleModalActiveAccount: !state.isToggleModalActiveAccount
            };
        case MODAL_USER_LOGIN.MODAL_FORGOT_PASSWORD:
            return {
                ...state,
                isToggleModalForgotPassword: !state.isToggleModalForgotPassword
            };
        case MODAL_USER_LOGIN.MODAL_RESET_PASSWORD:
            return {
                ...state,
                isToggleModalResetPassword: !state.isToggleModalResetPassword
            };
        default:
            return {
                ...state
            };
    }
};
//#endregion

//#region User Register
const onUserRegister = (state: ILogInState, action: IActions.IUserRegister) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onUserRegisterSuccess = (
    state: ILogInState,
    action: IActions.IUserRegisterSuccess
) => {
    return {
        ...state,
        isProcessing: false,
        isToggleModalActiveAccount: true
    };
};
const onUserRegisterFail = (
    state: ILogInState,
    action: IActions.IUserRegisterFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion

//#region Active Account
const onActiveAccount = (
    state: ILogInState,
    action: IActions.IActiveAccount
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onActiveAccountSuccess = (
    state: ILogInState,
    action: IActions.IActiveAccountSuccess
) => {
    return {
        ...state,
        isProcessing: false,
        isToggleModalActiveAccount: false,
        isAccountActivated: true
    };
};
const onActiveAccountFail = (
    state: ILogInState,
    action: IActions.IActiveAccountFail
) => {
    return {
        ...state,
        isProcessing: false,
        isToggleModalActiveAccount: false
    };
};
//#endregion

//#region User Login
const onUserLogin = (state: ILogInState, action: IActions.IUserLogin) => {
    const { remember } = action.payload;
    return {
        ...state,
        isProcessing: true,
        isRememberAccount: remember
    };
};
const onUserLoginSuccess = (
    state: ILogInState,
    action: IActions.IUserLoginSuccess
) => {
    const { token } = action.payload;
    return {
        ...state,
        isProcessing: false,
        accessToken: token
    };
};
const onUserLoginFail = (
    state: ILogInState,
    action: IActions.IUserLoginFail
) => {
    return {
        ...state,
        isProcessing: false,
        isRememberAccount: false
    };
};
//#endregion

//#region Sent Mail Forgot
const onSentMailForgot = (
    state: ILogInState,
    action: IActions.ISentMailForgot
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onSentMailForgotSuccess = (
    state: ILogInState,
    action: IActions.ISentMailForgotSuccess
) => {
    return {
        ...state,
        isProcessing: false,
        isToggleModalResetPassword: true,
        isToggleModalForgotPassword : false,
    };
};
const onSentMailForgotFail = (
    state: ILogInState,
    action: IActions.ISentMailForgotFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion

//#region Reset Password
const onResetPassword = (
    state: ILogInState,
    action: IActions.IResetPassword
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onResetPasswordSuccess = (
    state: ILogInState,
    action: IActions.IResetPasswordSuccess
) => {
    return {
        ...state,
        isProcessing: false,
        isToggleModalResetPassword: false,
    };
};
const onResetPasswordFail = (
    state: ILogInState,
    action: IActions.IResetPasswordFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion

