/**
 * @file root sagas
 */

import { all } from "redux-saga/effects";

// Place for sagas' app
import { sagas as LoginSaga } from "../modules/LoginPage";
import {sagas as HomePageSaga} from '../modules/HomePage';

/*----Sagas List-----------------*/
export default function* rootSaga() {
    yield all([
        LoginSaga(),
        HomePageSaga(),
    ]);
}
