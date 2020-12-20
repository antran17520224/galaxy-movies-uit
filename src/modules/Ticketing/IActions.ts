/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { TICKETING_MODAL } from "./model/ITicketingState";

//#region IToggleModal
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        currentMovie? : any,
        type: TICKETING_MODAL;
    };
}
//#endregion

