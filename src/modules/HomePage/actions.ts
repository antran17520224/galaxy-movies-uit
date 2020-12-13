import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { HOME_PAGE_MODAL } from "./model/IHomePageState";

//#region POST Employee Login Actions

//#region Get Permissions Actions
export const toggleModal = (type : HOME_PAGE_MODAL): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload : {
            type
        }
    };
};

//#endregion
