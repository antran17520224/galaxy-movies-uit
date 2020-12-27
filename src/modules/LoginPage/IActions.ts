/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IError } from "../../common";
import {
    MODAL_USER_LOGIN,
    IRegister,
    USER_PAGE_CLEAR
} from "./model/ILoginState";

export interface IHandleClear extends Action {
    readonly type: Keys.HANDLE_CLEAR;
    payload: {
        type: USER_PAGE_CLEAR;
    };
}

//#region Toggle Modal
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        type: MODAL_USER_LOGIN;
        data?: IRegister;
    };
}
//#endregion

//#region User Register IActions
export interface IUserRegister extends Action {
    readonly type: Keys.USER_REGISTER;
    payload: IRegister;
}

export interface IUserRegisterSuccess extends Action {
    readonly type: Keys.USER_REGISTER_SUCCESS;
    payload: any;
}

export interface IUserRegisterFail extends Action {
    readonly type: Keys.USER_REGISTER_FAIL;
    payload: IError[];
}
//#endregion

//#region Active Account IActions
export interface IActiveAccount extends Action {
    readonly type: Keys.ACTIVE_ACCOUNT;
    payload: {
        code: string;
    };
}

export interface IActiveAccountSuccess extends Action {
    readonly type: Keys.ACTIVE_ACCOUNT_SUCCESS;
    payload: any;
}

export interface IActiveAccountFail extends Action {
    readonly type: Keys.ACTIVE_ACCOUNT_FAIL;
    payload: IError[];
}
//#endregion

//#region User Login IActions
export interface IUserLogin extends Action {
    readonly type: Keys.USER_LOGIN;
    payload: {
        email: string;
        password : string;
        remember: boolean;
    };
}

export interface IUserLoginSuccess extends Action {
    readonly type: Keys.USER_LOGIN_SUCCESS;
    payload: any;
}

export interface IUserLoginFail extends Action {
    readonly type: Keys.USER_LOGIN_FAIL;
    payload: IError[];
}
//#endregion

//#region Sent Mail Forgot IActions
export interface ISentMailForgot extends Action {
    readonly type: Keys.SENT_MAIL_FORGOT;
    payload: {
        email: string;
    };
}

export interface ISentMailForgotSuccess extends Action {
    readonly type: Keys.SENT_MAIL_FORGOT_SUCCESS;
    payload: any;
}

export interface ISentMailForgotFail extends Action {
    readonly type: Keys.SENT_MAIL_FORGOT_FAIL;
    payload: IError[];
}
//#endregion

//#region Reset Password IActions
export interface IResetPassword extends Action {
    readonly type: Keys.RESET_PASSWORD;
    payload: {
        newPassword: string;
        confirmPassword: string;
        codeReset: string;
    };
}

export interface IResetPasswordSuccess extends Action {
    readonly type: Keys.RESET_PASSWORD_SUCCESS;
    payload: any;
}

export interface IResetPasswordFail extends Action {
    readonly type: Keys.RESET_PASSWORD_FAIL;
    payload: IError[];
}
//#endregion
