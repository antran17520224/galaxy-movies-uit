import { HOME_PAGE_MODAL } from './model/IHomePageState';
/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IError } from "../../common";



//#region  IHandleClear IActions
export interface IHandleClear extends Action {
    readonly type: Keys.HANDLE_CLEAR;
    payload: {
        type: string;
    };
}

//#endregion

//#region Toggle Modals
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload : {
        type: HOME_PAGE_MODAL
    }
}
//#endregion




