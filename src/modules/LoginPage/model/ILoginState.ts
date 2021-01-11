export enum MODAL_USER_LOGIN {
    MODAL_CONFIRM_REGISTER = 1,
    MODAL_ACTIVE_ACCOUNT = 2,
    MODAL_FORGOT_PASSWORD = 3,
    MODAL_RESET_PASSWORD = 4
}

export enum USER_PAGE_CLEAR {
    CLEAR_STATE_ACTIVE = 0
}

export interface IUserInfo {
    address: string;
    avatarUrl: string;
    dateOfBirth: string;
    email: string;
    fullName: string;
    gender: string;
    phone: string;
    status: string;
    userType: string;
    _id: string;
}
export interface IRegister {
    fullName: string;
    phone: string;
    dateOfBirth: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    gender: string;
    userType: string;
}
export interface ILogInState {
    accessToken: string;
    isProcessing: boolean;
    isLoading: boolean;
    isToggleModalConfirmRegister: boolean;
    isToggleModalActiveAccount: boolean;
    dataToRegister: IRegister;
    isAccountActivated: boolean;
    isToggleModalForgotPassword: boolean;
    isRememberAccount: boolean;
    isToggleModalResetPassword: boolean;
    userInfo : IUserInfo;
}

/**
 --- InitialState
 */
export const initialState: ILogInState = {
    accessToken: null || localStorage.getItem('accessToken'),
    isLoading: false,
    isProcessing: false,
    isToggleModalConfirmRegister: false,
    isToggleModalActiveAccount: false,
    dataToRegister: null,
    isAccountActivated: false,
    isToggleModalForgotPassword: false,
    isRememberAccount: false,
    isToggleModalResetPassword: false,
    userInfo : null || JSON.parse(localStorage.getItem('userInfo'))
};
