/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IMainLayoutState } from "./model/IMainLayoutState";
import { IError } from "../../common";

export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        type: number;
    };
}

export interface IHandleLogout extends Action {
    readonly type: Keys.HANDLE_LOGOUT;
}
