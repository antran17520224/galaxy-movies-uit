import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { TICKETING_MODAL, ITicketingState, initialState } from "./model/ITicketingState";

export const name = "TicketingPage";

export const reducer: Reducer<ITicketingState> = (
    state: ITicketingState = initialState,
    action: ActionTypes
): ITicketingState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);

        case Keys.IS_SHOW_NEXT_BUTTON:
            return onShowNextButton(state, action);

        case Keys.HANDLE_CHOOSE_SEATS:
            return onHandleChooseSeats(state, action);

        case Keys.HANDLE_CHOOSE_FOODS:
            return onHandleChooseFoods(state, action);

        case Keys.GET_ALL_FOODS:
            return onGetAllFoods(state, action);
        case Keys.GET_ALL_FOODS_SUCCESS:
            return onGetAllFoodsSuccess(state, action);
        case Keys.GET_ALL_FOODS_FAIL:
            return onGetAllFoodsFail(state, action);

        case Keys.CREATE_TICKET:
            return onCreateTicket(state, action);
        case Keys.CREATE_TICKET_SUCCESS:
            return onCreateTicketSuccess(state, action);
        case Keys.CREATE_TICKET_FAIL:
            return onCreateTicketFail(state, action);

        case Keys.CONFIRM_PAYMENT:
            return onConfirmPayment(state, action);
        case Keys.CONFIRM_PAYMENT_SUCCESS:
            return onConfirmPaymentSuccess(state, action);
        case Keys.HANDLE_ACTIVE_STEP:
            return onHandleActiveStep(state, action);

        case Keys.GET_TICKET_BY_USER_ID:
            return onGetTicketByUserId(state, action);
        case Keys.GET_TICKET_BY_USER_ID_SUCCESS:
            return onGetTicketByUserIdSuccess(state, action);

        default:
            return state;
    }
};

//#region onToggleModal Reducers
const onToggleModal = (state: ITicketingState, action: IActions.IToggleModal) => {
    const { type } = action.payload;
    switch (type) {
        // case TICKETING_MODAL.TRAILER_MODAL:
        //     return {
        //         ...state,
        //         // isShowTrailer: !state.isShowTrailer
        //     }
        default:
            return {
                ...state
            };
    }
};
//#endregion

//#region onShowNextButton Reducers

const onConfirmPayment = (
    state: ITicketingState,
    action: IActions.IConfirmPayment
) => {
    return {
        ...state,
    };
};
//#endregion

const onConfirmPaymentSuccess = (
    state: ITicketingState,
    action: IActions.IConfirmPaymentSuccess
) => {
    const linkPayment = action.payload;
    return {
        ...state,
        linkPayment,
        activeStep: 3

    };
};
//#endregion

//#region onShowNextButton Reducers
const onShowNextButton = (state: ITicketingState, action: IActions.IShowNextButton) => {
    const { isShow } = action.payload;
    return {
        ...state,
        isShowNextButton: isShow
    };
};
//#endregion

//#region onHandleChooseSeats Reducers
const onHandleChooseSeats = (
    state: ITicketingState,
    action: IActions.IHandleChooseSeats
) => {
    const { seats } = action.payload;
    return {
        ...state,
        seats
    };
};
//#endregion

//#region onHandleChooseFoods Reducers
const onHandleChooseFoods = (
    state: ITicketingState,
    action: IActions.IHandleChooseFoods
) => {
    const { priceFood, arrayQuantity } = action.payload;
    return {
        ...state,
        priceFood,
        quantityFood: arrayQuantity
    };
};
//#endregion

const onHandleActiveStep = (
    state: ITicketingState,
    action: IActions.IHandleActiveStep
) => {
    const { activeStep } = action.payload;

    return {
        ...state,
        activeStep
    };
};
const onGetTicketByUserId = (
    state: ITicketingState,
    action: IActions.IGetTicketByIdUser
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetTicketByUserIdSuccess = (
    state: ITicketingState,
    action: IActions.IGetTicketByIdUserSuccess
) => {
    const ticketsByUserId = action.payload;

    return {
        ...state,
        isProcessing: false,
        ticketsByUserId
    };
};
//#region onGetAllFoods
const onGetAllFoods = (state: ITicketingState, action: IActions.IGetAllFoods) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetAllFoodsSuccess = (
    state: ITicketingState,
    action: IActions.IGetAllFoodsSuccess
) => {
    const { data } = action.payload;

    return {
        ...state,
        isProcessing: false,
        foodRecords: data
    };
};
const onGetAllFoodsFail = (state: ITicketingState, action: IActions.IGetAllFoodsFail) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion

//#region onCreateTicket
const onCreateTicket = (state: ITicketingState, action: IActions.ICreateTicket) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onCreateTicketSuccess = (
    state: ITicketingState,
    action: IActions.ICreateTicketSuccess
) => {
    const idTicket = action.payload;
    return {
        ...state,
        isProcessing: true,
        isCreateTicketSuccess: true,
        idTicket,
    };
};
const onCreateTicketFail = (
    state: ITicketingState,
    action: IActions.ICreateTicketFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
// #endregion
