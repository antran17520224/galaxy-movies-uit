import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { DETAILS_MODAL } from "./model/IDetailsState";

//#region toggleModal Actions
export const toggleModal = (data: {
    currentMovie?: any;
    type: DETAILS_MODAL;
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};
//#endregion
