/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";





//#region IHandleChooseFoods
export interface IHandleChooseFoods extends Action {
    readonly type: Keys.HANDLE_CHOOSE_FOODS;
    payload :{
        priceFood : number;
    }
}
//#endregion


//#region IGetAllFoods
export interface IGetAllFoods extends Action {
    readonly type: Keys.GET_ALL_FOODS;
}
export interface IGetAllFoodsSuccess extends Action {
    readonly type: Keys.GET_ALL_FOODS_SUCCESS;
    payload : any
}
export interface IGetAllFoodsFail extends Action {
    readonly type: Keys.GET_ALL_FOODS_FAIL;
    payload : any
}
//#endregion


