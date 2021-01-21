import { call, put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
import { message } from "antd";
import * as FoodAPi from "../../../api/food";
import * as TicketApi from "../../../api/ticket";

//Handle handleGetAllFoods
function* handleGetAllFoods(action : any) {
    try {
        const res = yield call(FoodAPi.getAllFoods);
        yield delay(500);
        if (res.status === 200) {
            yield put(actions.getAllFoodsSuccess(res.data));
        } else {
            yield put(actions.getAllFoodsFail(res));
        }
    } catch (error) {
        yield put(actions.getAllFoodsFail(error));
    }
}

function* handleCreateTicket(action : any) {
    try {
        const res = yield call(TicketApi.createTicket, action.payload);
        if(res.status === 200) {
            yield put(actions.createTicketSuccess(res.data.data._id));
        }else{
            yield put(actions.createTicketFail(res.data.data));

        }
    } catch (error) {
        yield put(actions.getAllFoodsFail(error));
    }
}

function* handleConfirmPayment(action : any) {
    try {
        const res = yield call(TicketApi.confirmPayment, action.payload);
        if(res.status === 200) {
            yield put(actions.confirmPaymentSuccess(res.data.data));
        }
    } catch (error) {
        yield put(actions.getAllFoodsFail(error));
    }
}
function* handleGetTicketByUserId(action : any) {
    try {
        const res = yield call(TicketApi.getTicketByUserId);
        if(res.status === 200) {
            yield put(actions.getTicketByIdUserSuccess(res.data.data));
        }
    } catch (error) {
        yield put(actions.getAllFoodsFail(error));
    }
}
/*-----------------------------------------------------------------*/
function* watchGetAllFoods() {
    yield takeEvery(Keys.GET_ALL_FOODS, handleGetAllFoods);
}
function* watchCreateTicket() {
    yield takeEvery(Keys.CREATE_TICKET, handleCreateTicket);
}
function* watchConfirmPayment() {
    yield takeEvery(Keys.CONFIRM_PAYMENT, handleConfirmPayment);
}
function* watchGetTicketByUserId() {
    yield takeEvery(Keys.GET_TICKET_BY_USER_ID, handleGetTicketByUserId);
}
/*-----------------------------------------------------------------*/
export default [watchGetAllFoods, watchCreateTicket,watchConfirmPayment,watchGetTicketByUserId];
