/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IToggleModal
    | IActions.IShowNextButton
    | IActions.IHandleChooseSeats
    | IActions.IGetAllFoods
    | IActions.IGetAllFoodsSuccess
    | IActions.IGetAllFoodsFail
    | IActions.IHandleChooseFoods
    | IActions.IConfirmPayment
    | IActions.IConfirmPaymentSuccess
    | IActions.ICreateTicket
    | IActions.ICreateTicketSuccess
    | IActions.ICreateTicketFail
    | IActions.IHandleActiveStep
    | IActions.IGetTicketByIdUser
    | IActions.IGetTicketByIdUserSuccess
   

export default ActionTypes;
