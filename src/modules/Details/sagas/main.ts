import { call, put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
import { message } from "antd";

//Handle POST Employee Login
// function* handlePostEmployeeLogin(action) {
//     try {
//         let res = yield call(AuthApi.postEmployeeLogin, action.payload);
//         yield delay(500);
//         if (res.status === 200) {
//             const { accessToken, refreshToken } = res.data.data;
//             localStorage.setItem("accessToken", accessToken);
//             localStorage.setItem("refreshToken", refreshToken);
//             message.success("Đăng nhập thành công", 1);
//             // yield put(actions.getPermissions());
//             yield put(actions.postEmployeeLoginSuccess(res.data.data));
//         } else {
//             message.error("Đăng nhập thất bại", 1);
//             yield put(actions.postEmployeeLoginFail(res));
//         }
//     } catch (error) {
//         message.error("Không có kết nối");
//         yield put(actions.postEmployeeLoginFail(error));
//     }
// }

// //Handle Get Permissions
// function* handleGetPermissions(action) {
//     try {
//         let res = yield call(PermissionApi.getPermissions);
//         yield delay(500);
//         if (res.status === 200) {
//             yield put(actions.getPermissionsSuccess(res.data.data));
//         } else {
//             yield put(actions.getPermissionsFail(res));
//         }
//     } catch (error) {
//         yield put(actions.getPermissionsFail(error));
//     }
// }

/*-----------------------------------------------------------------*/
// function* watchPostEmployeeLogin() {
//     yield takeEvery(Keys.POST_EMPLOYEE_LOGIN, handlePostEmployeeLogin);
// }
// function* watchGetPermissions() {
//     yield takeEvery(Keys.GET_PERMISSIONS, handleGetPermissions);
// }
/*-----------------------------------------------------------------*/
export default [];
