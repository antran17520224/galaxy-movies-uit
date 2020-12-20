import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { TICKETING_MODAL } from "./model/ITicketingState";

//#region toggleModal Actions
export const toggleModal = (data: {
    currentMovie?: any;
    type: TICKETING_MODAL;
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};
//#endregion
