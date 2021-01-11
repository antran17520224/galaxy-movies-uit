/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
   
    | IActions.IGetAllFoods
    | IActions.IGetAllFoodsSuccess
    | IActions.IGetAllFoodsFail
    | IActions.IHandleChooseFoods
   
   

export default ActionTypes;
