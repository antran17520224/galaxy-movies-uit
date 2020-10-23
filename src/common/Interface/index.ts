import { message } from "antd";
import { CompareFn } from "antd/lib/table/interface";
import { ColumnType } from "antd/lib/table/interface";

export enum PERMISSION_KEY {}

export enum ErrorsCode {
    invalid = "invalid",
    serverError = "serverError",

    //validate
    validateUserBorrowerHasBanking = "validateUserBorrowerHasBanking",

    //userError
    userPhoneRegistered = "userPhoneRegistered",
    userNotFound = "userNotFound",
    userNotActivated = "userNotActivated",
    userWrongPassword = "userWrongPassword",
    userCanNotReject = "userCanNotReject",
    userCanNotApprove = "userCanNotApprove",
    userNotVerifyKyc = "userNotVerifyKyc",
    //verify
    verifyCodeNotFound = "verifyCodeNotFound",
    verifyUserHasActivated = "verifyUserHasActivated",
    verifyCodeHasSent = "verifyCodeHasSent",
    verifyCantForgotPassword = "verifyCantForgotPassword",
    verifyCantRegister = "verifyCantRegister",

    //userBorrowerBanking
    userBorrowerBankingNotFound = "userBankingNotFound",

    //files
    filesOnlyAcceptImageFiles = "filesOnlyAcceptImageFiles",

    //companyBanking
    companyBankingExisted = "companyBankingExisted",
    companyBankingNotExist = "companyBankingNotExist",
    companyBankingDefaultNotExisted = "companyBankingDefaultNotExisted",

    //userBorrowerDeposit
    userBorrowerDepositWaitingOrRejectExisted = "userBorrowerDepositWaitingOrRejectExisted",
    userBorrowerDepositNotExist = "userBorrowerDepositNotExist",
    userBorrowerDepositWaitingOrRejectNotExisted = "userBorrowerDepositWaitingOrRejectNotExisted",
    userBorrowerDepositCanNotApprove = "userBorrowerCanNotApprove",
    userBorrowerDepositCanOnlyRejectWaiting = "userBorrowerDepositCanOnlyRejectWaiting",

    //configBanks
    configBanksExisted = "configBanksExisted",
}

export interface IError {
    code: string;
    message: string;
}

export interface IPermission {
    _id: string;
    permissionKey: string;
}

export interface IPermissionObj {
    key: string;
    title: string;
    value: string;
    isActive?: boolean;
    _id: string;
    children?: Array<IPermissionObj>;
}

export interface IColumn extends ColumnType<any> {
    title: string;
    dataIndex?: string;
    key?: string;
    defaultSortOrder?: any;
    sorter?: CompareFn<any>;
    shouldCellUpdate?: (record, prevRecord) => boolean;
    render?: any;
    colSpan?: number;
}

export interface IValidateMessage {
    [x: string]: string | object;
}