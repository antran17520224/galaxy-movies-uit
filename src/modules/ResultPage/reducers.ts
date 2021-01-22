import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { IResultState, initialState } from "./model/IResultState";

export const name = "ResultPage";

export const reducer: Reducer<IResultState> = (
    state: IResultState = initialState,
    action: ActionTypes
): IResultState => {
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
    state: IResultState,
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
const onGetAllFoods = (state: IResultState, action: IActions.IGetAllFoods) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetAllFoodsSuccess = (
    state: IResultState,
    action: IActions.IGetAllFoodsSuccess
) => {
    const { data } = action.payload;

    return {
        ...state,
        isProcessing: false,
        foodRecords: data
    };
};
const onGetAllFoodsFail = (state: IResultState, action: IActions.IGetAllFoodsFail) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion
