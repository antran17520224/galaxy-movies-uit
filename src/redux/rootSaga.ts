/**
 * @file root sagas
 */

import { all } from "redux-saga/effects";

// Place for sagas' app
import { sagas as LoginSaga } from "../modules/LoginPage";
import {sagas as HomePageSaga} from '../modules/HomePage';
import {sagas as DetailsPageSaga} from '../modules/Details';

/*----Sagas List-----------------*/
export default function* rootSaga() {
    yield all([
        LoginSaga(),
        HomePageSaga(),
        DetailsPageSaga()
    ]);
}
