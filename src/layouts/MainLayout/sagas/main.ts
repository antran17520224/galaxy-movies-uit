import { call, put, takeEvery, delay } from "redux-saga/effects";
import { message } from "antd";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
// import * as BankApi from "../../../api/BankApi";

/*-----------------------------------------------------------------*/
// export function* watchGetConfigBanks() {
//     yield takeEvery(Keys.GET_CONFIG_BANKS, handleGetConfigBanks);
// }
/*-----------------------------------------------------------------*/

function* handleLogoutAccount(){
    localStorage.clear();
    window.location.reload();
}


function* watchLogoutAccount (){
    yield takeEvery(Keys.HANDLE_LOGOUT, handleLogoutAccount);
}

export default [watchLogoutAccount];
