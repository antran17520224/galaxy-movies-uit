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

//#region showNextButton Actions

export const showNextButton = (isShow: boolean): IActions.IShowNextButton => {
    return {
        type: Keys.IS_SHOW_NEXT_BUTTON,
        payload: {
            isShow
        }
    };
};
//#endregion

//#region handleChooseSeats Actions

export const handleChooseSeats = (data: {
    seats: string[];
}): IActions.IHandleChooseSeats => {
    return {
        type: Keys.HANDLE_CHOOSE_SEATS,
        payload: {
            ...data
        }
    };
};
//#endregion
