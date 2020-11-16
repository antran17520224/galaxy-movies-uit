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
        case Keys.TOGGLE_SIDE_BAR:
            return onToggleSideBar(state, action);
        case Keys.HANDLE_LOGOUT:
            return onHandleLogout(state, action);
        case Keys.IS_LOGIN:
            return onIsLogin(state, action);
        default:
            return state;
    }
};

//IActions: the interface of current action
const onToggleSideBar = (
    state: IMainLayoutState,
    action: IActions.IToggleSideBar
) => {
    return {
        ...state,
        isToggleSideBar : !state.isToggleSideBar,
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

const onIsLogin = (
    state: IMainLayoutState,
    action: IActions.IIsLogin
) => {
    return {
        ...state,
    }
}
