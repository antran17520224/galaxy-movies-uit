import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { IAuthLayoutState, initialState } from "./model/IAuthLayoutState";

export const name = "AuthLayout";

export const reducer: Reducer<IAuthLayoutState> = (
    state: IAuthLayoutState = initialState,
    action: ActionTypes
): IAuthLayoutState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        default:
            return state;
    }
};

//IActions: the interface of current action
const onToggleModal = (
    state: IAuthLayoutState,
    action: IActions.IToggleModal
) => {
    return {
        ...state,
    };
};
