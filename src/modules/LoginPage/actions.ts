import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import {
    MODAL_USER_LOGIN,
    IRegister,
    USER_PAGE_CLEAR
} from "./model/ILoginState";


export const changeAvatarUser = (data : {
    avatar : any
}): IActions.IChangeAvatarUser => {
    return {
        type: Keys.CHANGE_AVATAR_USER,
        payload: {
            ...data
        }
    };
};

export const changeAvatarSuccess = (res : any): IActions.IChangeAvatarUserSuccess => {
    return {
        type: Keys.CHANGE_AVATAR_USER_SUCCESS,
        payload: res
    };
};
//#region Handle Clear Actions
export const handleClear = (data : {
    type : USER_PAGE_CLEAR
}): IActions.IHandleClear => {
    return {
        type: Keys.HANDLE_CLEAR,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region User Register Actions
export const userRegister = (
    data: IRegister
): IActions.IUserRegister => {
    return {
        type: Keys.USER_REGISTER,
        payload: {
            ...data
        }
    };
};
export const userRegisterSuccess = (
    res: any
): IActions.IUserRegisterSuccess => {
    return {
        type: Keys.USER_REGISTER_SUCCESS,
        payload: {
            ...res
        }
    };
};
export const userRegisterFail = (
    res: any
): IActions.IUserRegisterFail => {
    return {
        type: Keys.USER_REGISTER_FAIL,
        payload: res
    };
};
//#endregion

//#region Toggle Modal Actions
export const toggleModal = (data: {
    type: MODAL_USER_LOGIN;
    data?: IRegister;
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region ActiveAccount Actions
export const activeAccount = (
    data: {
        code : string
    }
): IActions.IActiveAccount => {
    return {
        type: Keys.ACTIVE_ACCOUNT,
        payload: {
            ...data
        }
    };
};
export const activeAccountSuccess = (
    data: any
): IActions.IActiveAccountSuccess => {
    return {
        type: Keys.ACTIVE_ACCOUNT_SUCCESS,
        payload: {
            ...data
        }
    };
};
export const activeAccountFail = (
    res: any
): IActions.IActiveAccountFail => {
    return {
        type: Keys.ACTIVE_ACCOUNT_FAIL,
        payload: res
    };
};
//#endregion

//#region User Login Actions
export const userLogin = (
    data: {
        email : string,
        password: string,
        remember: boolean,
    }
): IActions.IUserLogin => {
    return {
        type: Keys.USER_LOGIN,
        payload: {
            ...data
        }
    };
};
export const userLoginSuccess = (
    data: any
): IActions.IUserLoginSuccess => {
    return {
        type: Keys.USER_LOGIN_SUCCESS,
        payload: {
            ...data
        }
    };
};
export const userLoginFail = (
    res: any
): IActions.IUserLoginFail => {
    return {
        type: Keys.USER_LOGIN_FAIL,
        payload: res
    };
};
//#endregion

//#region SentMailForgot Actions
export const sentMailForgot = (
    data: {
        email : string
    }
): IActions.ISentMailForgot => {
    return {
        type: Keys.SENT_MAIL_FORGOT,
        payload: {
            ...data
        }
    };
};
export const sentMailForgotSuccess = (
    data: any
): IActions.ISentMailForgotSuccess => {
    return {
        type: Keys.SENT_MAIL_FORGOT_SUCCESS,
        payload: {
            ...data
        }
    };
};
export const sentMailForgotFail = (
    res: any
): IActions.ISentMailForgotFail => {
    return {
        type: Keys.SENT_MAIL_FORGOT_FAIL,
        payload: res
    };
};
//#endregion

//#region resetPassword Actions
export const resetPassword = (
    data: {
        newPassword : string,
        confirmPassword: string,
        codeReset : string
    }
): IActions.IResetPassword => {
    return {
        type: Keys.RESET_PASSWORD,
        payload: {
            ...data
        }
    };
};
export const resetPasswordSuccess = (
    data: any
): IActions.IResetPasswordSuccess => {
    return {
        type: Keys.RESET_PASSWORD_SUCCESS,
        payload: {
            ...data
        }
    };
};
export const resetPasswordFail = (
    res: any
): IActions.IResetPasswordFail => {
    return {
        type: Keys.RESET_PASSWORD_FAIL,
        payload: res
    };
};
//#endregion
