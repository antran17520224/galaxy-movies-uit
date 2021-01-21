import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";





//#region handleChooseFoods Actions
export const handleChooseFoods = (data: {
    priceFood: number;
}): IActions.IHandleChooseFoods => {
    return {
        type: Keys.HANDLE_CHOOSE_FOODS,
        payload: {
            ...data
        }
    };
};
//#endregion


//#region getAllFoods Actions

export const getAllFoods = (): IActions.IGetAllFoods => {
    return {
        type: Keys.GET_ALL_FOODS
    };
};
export const getAllFoodsSuccess = (res): IActions.IGetAllFoodsSuccess => {
    return {
        type: Keys.GET_ALL_FOODS_SUCCESS,
        payload: res
    };
};
export const getAllFoodsFail = (res): IActions.IGetAllFoodsFail => {
    return {
        type: Keys.GET_ALL_FOODS_FAIL,
        payload: res
    };
};
//#endregion
//continue foods page.
