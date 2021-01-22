import { message } from 'antd';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as MovieApi from '../../../api/movies';
import * as actions from '../actions';
import Keys from '../actionTypeKeys';



//#region Handle GET All Movies
function* handleGetAllMovies(action: any) {
	try {
		const res = yield call(MovieApi.getAllMovies);
		if (res.status === 200) {
			yield put(actions.getAllMoviesSuccess(res.data));
		} else {
			yield put(actions.getAllMoviesFail(res));
		}
	} catch (error) {
		message.error('Lấy danh sách phim thất bại')
		yield put(actions.getAllMoviesFail(error));
	}
}
//#endregion

//#region handleGetMoviesByStatus
function* handleGetMoviesByStatus(action: any) {
	try {
		const res = yield call(MovieApi.getMoviesByStatus,action.payload);
		if (res.status === 200) {
			yield put(actions.getMoviesByStatusSuccess({
				data : res.data.data,
				status : action.payload.status
			}));
		} else {
			yield put(actions.getMoviesByStatusFail(res));
		}
	} catch (error) {
		message.error('Lấy danh sách phim thất bại')
		yield put(actions.getMoviesByStatusFail(error));
	}
}
//#endregion

/*-----------------------------------------------------------------*/
function* watchGetAllMovies() {
	// yield takeEvery(Keys.GET_ALL_MOVIES, handleGetAllMovies);
}
function* watchGetMoviesByStatus() {
	yield takeEvery(Keys.GET_MOVIES_BY_STATUS, handleGetMoviesByStatus);
}
/*-----------------------------------------------------------------*/

const sagas = [
	watchGetAllMovies,
	watchGetMoviesByStatus
];
export default sagas;
