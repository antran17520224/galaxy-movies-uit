import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { DETAILS_MODAL,IDetailsState, initialState } from "./model/IDetailsState";

export const name = "DetailPage";

export const reducer: Reducer<IDetailsState> = (
    state: IDetailsState = initialState,
    action: ActionTypes
): IDetailsState => {
    switch (action.type) {  
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        
        default:
            return state;
    }
};

//#region onToggleModal Reducers
const onToggleModal = (
    state: IDetailsState,
    action: IActions.IToggleModal
) => {
    const { type } = action.payload;
    switch (type) {
        case DETAILS_MODAL.TRAILER_MODAL:
            return {
                ...state,
                isShowTrailer: !state.isShowTrailer
            }
        default:
            return {
                ...state
            }
    }
}
//#endregion
