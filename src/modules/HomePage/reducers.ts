import { Reducer } from "redux";
import { IHomePageState, initialState } from ".";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";

export const name = "HomePage";

export const reducer: Reducer<IHomePageState> = (
    state: IHomePageState = initialState,
    action: ActionTypes
): IHomePageState => {
    switch (action.type) {

     
       
        default:
            return state;
    }
};

//IActions: the interface of current action

