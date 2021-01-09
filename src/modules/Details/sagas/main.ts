import { call, put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
import * as SessionApi from '../../../api/session'
import { message } from "antd";


//#region Handle handleGetSessionByMovieId
function* handleGetSessionByMovieId(action) {
    try {
        let res = yield call(SessionApi.getSessionByMovieId,action.payload);
        yield delay(500);
        if (res.status === 200) {
            yield put(actions.getSessionByMovieIdSuccess(res.data));
        } else {
            message.error('Lấy lịch chiếu thất bại !')
        }
    } catch (error) {
        yield put(actions.getSessionByMovieIdFail(error));
    }
}
//#endregion
/*-----------------------------------------------------------------*/
function* watchGetSessionByMovieId() {
    yield takeEvery(Keys.GET_SESSION_BY_MOVIE_ID, handleGetSessionByMovieId);
}
/*-----------------------------------------------------------------*/
export default [watchGetSessionByMovieId];
