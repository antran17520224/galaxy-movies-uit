import { call, put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
import { message } from "antd";
import * as FoodAPi from "../../../api/food";
import * as TicketApi from "../../../api/ticket";

//Handle handleGetAllFoods
function* handleGetAllFoods(action) {
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


/*-----------------------------------------------------------------*/
function* watchGetAllFoods() {
    yield takeEvery(Keys.GET_ALL_FOODS, handleGetAllFoods);
}

/*-----------------------------------------------------------------*/
export default [watchGetAllFoods];
