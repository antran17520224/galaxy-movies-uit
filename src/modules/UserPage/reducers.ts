import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { IUserState, initialState } from "./model/IUserState";

export const name = "UserPage";

export const reducer: Reducer<IUserState> = (
    state: IUserState = initialState,
    action: ActionTypes
): IUserState => {
    switch (action.type) {
        

        case Keys.HANDLE_CHOOSE_FOODS:
            return onHandleChooseFoods(state, action);

        case Keys.GET_ALL_FOODS:
            return onGetAllFoods(state, action);
        case Keys.GET_ALL_FOODS_SUCCESS:
            return onGetAllFoodsSuccess(state, action);
        case Keys.GET_ALL_FOODS_FAIL:
            return onGetAllFoodsFail(state, action);


        default:
            return state;
    }
};


//#region onHandleChooseFoods Reducers
const onHandleChooseFoods = (
    state: IUserState,
    action: IActions.IHandleChooseFoods
) => {
    const { priceFood } = action.payload;
    return {
        ...state,
        priceFood
    };
};
//#endregion

//#region onGetAllFoods
const onGetAllFoods = (state: IUserState, action: IActions.IGetAllFoods) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetAllFoodsSuccess = (
    state: IUserState,
    action: IActions.IGetAllFoodsSuccess
) => {
    const { data } = action.payload;

    return {
        ...state,
        isProcessing: false,
        foodRecords: data
    };
};
const onGetAllFoodsFail = (state: IUserState, action: IActions.IGetAllFoodsFail) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion
