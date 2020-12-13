import { Reducer } from "redux";
import { IHomePageState, initialState } from ".";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { HOME_PAGE_MODAL } from "./model/IHomePageState";

export const name = "HomePage";

export const reducer: Reducer<IHomePageState> = (
    state: IHomePageState = initialState,
    action: ActionTypes
): IHomePageState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);

        default:
            return state;
    }
};

//IActions: the interface of current action

//#region onToggleModal Reducers
const onToggleModal = (
    state: IHomePageState,
    action: IActions.IToggleModal
) => {
    const { type } = action.payload;
    switch (type) {
        case HOME_PAGE_MODAL.TRAILER_MODAL:
            return {
                ...state,
                isShowTrailerModal: !state.isShowTrailerModal
            }
        default:
            return {
                ...state
            }

    }
}
//#endregion
