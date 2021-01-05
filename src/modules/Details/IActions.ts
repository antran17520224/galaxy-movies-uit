/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { DETAILS_MODAL } from "./model/IDetailsState";

//#region IToggleModal
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        type: DETAILS_MODAL;
        codeTrailer? : string;
    };
}
//#endregion

