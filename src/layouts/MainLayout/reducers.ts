import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { IMainLayoutState, initialState } from "./model/IMainLayoutState";

export const name = "MainLayout";

export const reducer: Reducer<IMainLayoutState> = (
    state: IMainLayoutState = initialState,
    action: ActionTypes
): IMainLayoutState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        case Keys.HANDLE_LOGOUT:
            return onHandleLogout(state, action);
        default:
            return state;
    }
};

//IActions: the interface of current action
const onToggleModal = (
    state: IMainLayoutState,
    action: IActions.IToggleModal
) => {
    return {
        ...state,
    };
};

const onHandleLogout = (
    state: IMainLayoutState,
    action: IActions.IHandleLogout
) => {
    return {
        ...state,
    };
};
