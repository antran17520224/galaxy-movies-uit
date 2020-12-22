import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import {
    TICKETING_MODAL,
    ITicketingState,
    initialState
} from "./model/ITicketingState";

export const name = "TicketingPage";

export const reducer: Reducer<ITicketingState> = (
    state: ITicketingState = initialState,
    action: ActionTypes
): ITicketingState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        case Keys.IS_SHOW_NEXT_BUTTON:
            return onShowNextButton(state, action);
        default:
            return state;
    }
};

//#region onToggleModal Reducers
const onToggleModal = (
    state: ITicketingState,
    action: IActions.IToggleModal
) => {
    const { type } = action.payload;
    switch (type) {
        // case TICKETING_MODAL.TRAILER_MODAL:
        //     return {
        //         ...state,
        //         // isShowTrailer: !state.isShowTrailer
        //     }
        default:
            return {
                ...state
            };
    }
};
//#endregion

//#region onShowNextButton Reducers
const onShowNextButton = (
    state: ITicketingState,
    action: IActions.IShowNextButton
) => {
    const { isShow } = action.payload;
    return {
        ...state,
        isShowNextButton: isShow
    };
};
//#endregion
