/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { TICKETING_MODAL } from "./model/ITicketingState";

//#region IToggleModal
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        currentMovie? : any,
        type: TICKETING_MODAL;
    };
}
//#endregion

//#region IShowNextButton
export interface IShowNextButton extends Action {
    readonly type: Keys.IS_SHOW_NEXT_BUTTON;
    payload :{
        isShow : boolean;
    }
}
//#endregion

//#region IHandleChooseSeats
export interface IHandleChooseSeats extends Action {
    readonly type: Keys.HANDLE_CHOOSE_SEATS;
    payload :{
        seats : string[];
    }
}
//#endregion

//#region IHandleChooseFoods
export interface IHandleChooseFoods extends Action {
    readonly type: Keys.HANDLE_CHOOSE_FOODS;
    payload :{
        priceFood : number;
        arrayQuantity : number[]
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

//#region IConfirmPayment
export interface IConfirmPayment extends Action {
    readonly type: Keys.CONFIRM_PAYMENT;
    payload :{
        amount : number;
        bankCode : string;
        orderDescription : string;
        orderType : string;
    }
}

export interface IConfirmPaymentSuccess extends Action {
    readonly type: Keys.CONFIRM_PAYMENT_SUCCESS;
    payload : any
}
//#endregion

//#region ICreateTicket
export interface ICreateTicket extends Action {
    readonly type: Keys.CREATE_TICKET;
    payload :{
        sessionId : string,
        quantityFood? : string[],
        totalPrice : number,
        seatCodes : string[],
        foodId? : string[]
    }
}

//#endregion
