/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IMainLayoutState } from "./model/IMainLayoutState";
import { IError } from "../../common";

export interface IToggleSideBar extends Action {
    readonly type: Keys.TOGGLE_SIDE_BAR;
}

export interface IIsLogin extends Action {
    readonly type: Keys.IS_LOGIN;
}
