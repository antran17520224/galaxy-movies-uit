/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IHandleClear
    | IActions.IToggleModal
    | IActions.IUserRegister
    | IActions.IUserRegisterSuccess
    | IActions.IUserRegisterFail
    | IActions.IActiveAccount
    | IActions.IActiveAccountSuccess
    | IActions.IActiveAccountFail
    | IActions.IUserLogin
    | IActions.IUserLoginSuccess
    | IActions.IUserLoginFail
    | IActions.ISentMailForgot
    | IActions.ISentMailForgotSuccess
    | IActions.ISentMailForgotFail
    | IActions.IResetPassword
    | IActions.IResetPasswordSuccess
    | IActions.IResetPasswordFail
    | IActions.IChangeAvatarUser
    | IActions.IChangeAvatarUserSuccess

export default ActionTypes;
