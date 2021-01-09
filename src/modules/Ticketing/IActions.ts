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

//#region IShowNextButton
export interface IShowNextButton extends Action {
    readonly type: Keys.IS_SHOW_NEXT_BUTTON;
    payload :{
        isShow : boolean;
    }
}
//#endregion

//#region IHandleChooseSeats
export interface IHandleChooseSeats extends Action {
    readonly type: Keys.HANDLE_CHOOSE_SEATS;
    payload :{
        seats : string[];
    }
}
//#endregion