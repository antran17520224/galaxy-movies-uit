import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { TICKETING_MODAL } from "./model/ITicketingState";

//#region toggleModal Actions
export const toggleModal = (data: {
    currentMovie?: any;
    type: TICKETING_MODAL;
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region showNextButton Actions

export const showNextButton = (isShow: boolean): IActions.IShowNextButton => {
    return {
        type: Keys.IS_SHOW_NEXT_BUTTON,
        payload: {
            isShow
        }
    };
};
//#endregion

//#region handleChooseSeats Actions
export const handleChooseSeats = (data: {
    seats: string[];
}): IActions.IHandleChooseSeats => {
    return {
        type: Keys.HANDLE_CHOOSE_SEATS,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region handleChooseFoods Actions
export const handleChooseFoods = (data: {
    priceFood: number;
    arrayQuantity : number[]
}): IActions.IHandleChooseFoods => {
    return {
        type: Keys.HANDLE_CHOOSE_FOODS,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region confirmPayment Actions
export const confirmPayment = (data: {
    amount: number;
    bankCode: string;
    orderDescription: string;
    orderType: string;
}): IActions.IConfirmPayment => {
    return {
        type: Keys.CONFIRM_PAYMENT,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region createTicket Actions
export const createTicket = (data: {
    sessionId: string;
    quantityFood?: string[];
    totalPrice: number;
    seatCodes: string[];
    foodId?: string[];
}): IActions.ICreateTicket => {
    return {
        type: Keys.CREATE_TICKET,
        payload: {
            ...data
        }
    };
};
//#endregion
export const confirmPaymentSuccess = (res): IActions.IConfirmPaymentSuccess => {
    return {
        type: Keys.CONFIRM_PAYMENT_SUCCESS,
        payload: res
    };
};
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
