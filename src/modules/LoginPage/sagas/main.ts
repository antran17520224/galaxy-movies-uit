import { toast } from "react-toastify";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "../actions";
import Keys from "../actionTypeKeys";
import * as AuthApi from "../../../api/AuthApi";

//#region handleUserRegister
function* handleUserRegister(action) {
    try {
        const res = yield call(AuthApi.userRegister, action.payload);
        yield delay(500);
        if (res.data.message !== undefined) {
            toast.success("✔️ Vui lòng kiểm tra Email !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined
            });
            yield put(actions.userRegisterSuccess(res.data.data));
        } else {
            toast.error("❌ Kích hoạt thất bại !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined
            });
            toast.error(`❌ Email đã tồn tại !`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined
            });
            throw res;
        }
    } catch (error) {
        yield put(actions.userRegisterFail(error));
    }
}
//#endregion

//#region handleActiveAccount
function* handleActiveAccount(action) {
    try {
        const res = yield call(AuthApi.activeAccount, action.payload);
        yield delay(500);
        if (res.data.message !== undefined) {
            toast.success("✔️ Xác nhận tài khoản thành công !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            // const { accessToken } = res.data.data;
            // localStorage.setItem("accessToken", accessToken);
            yield put(actions.activeAccountSuccess(res.data.data));
        } else {
            toast.error("❌ Kích hoạt thất bại !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            toast.error(`❌ Code nhập không chính xác !`, {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            throw res;
        }
    } catch (error) {
        yield put(actions.activeAccountFail(error));
    }
}
//#endregion

//#region handleUserLogin
function* handleUserLogin(action) {
    try {
        const res = yield call(AuthApi.userLogin, {
            email : action.payload.email,
            password : action.payload.password
        });
        yield delay(500);
        if (res.data.message !== undefined) {
            toast.success("✔️ Đăng nhập thành công !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            const { token } = res.data;
            localStorage.setItem("accessToken", token);
            localStorage.setItem('userInfo',JSON.stringify(res.data.data));
            yield delay(2000);
            yield put(actions.userLoginSuccess(res.data));
        } else {
            toast.error("❌ Tài khoản hoặc mật khẩu không chính xác !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            throw res;
        }
    } catch (error) {
        yield put(actions.userLoginFail(error));
    }
}
//#endregion

//#region handleUserForgotPassword
function* handleUserForgotPassword(action) {
    try {
        const res = yield call(AuthApi.userForgot, action.payload);
        yield delay(500);
        if (res.data.message !== undefined) {
            toast.success("✔️ Vui lòng kiểm tra Email !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            yield put(actions.sentMailForgotSuccess(res.data.data));
        } else {
            toast.error(`❌ Email không tồn tại!`, {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            throw res;
        }
    } catch (error) {
        yield put(actions.sentMailForgotFail(error));
    }
}
//#endregion

//#region handleResetPassword
function* handleResetPassword(action) {
    try {
        const res = yield call(AuthApi.resetPassword, action.payload);
        yield delay(500);
        if (res.data.message !== undefined) {
            toast.success("✔️ Đổi mật khẩu thành công !", {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            yield put(actions.resetPasswordSuccess(res.data.data));
        } else {
            toast.error(`❌ Mã reset không chính xác!`, {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            toast.error(`❌ Thay đổi mật khẩu thất bại!`, {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            throw res;
        }
    } catch (error) {
        yield put(actions.resetPasswordFail(error));
    }
}
//#endregion


/*-----------------------------------------------------------------*/
function* watchUserRegister() {
    yield takeEvery(Keys.USER_REGISTER, handleUserRegister);
}
function* watchActiveAccount() {
    yield takeEvery(Keys.ACTIVE_ACCOUNT, handleActiveAccount);
}
function* watchUserLogin() {
    yield takeEvery(Keys.USER_LOGIN, handleUserLogin);
}
function* watchUserForgotPassword() {
    yield takeEvery(Keys.SENT_MAIL_FORGOT, handleUserForgotPassword);
}
function* watchUserResetPassword() {
    yield takeEvery(Keys.RESET_PASSWORD, handleResetPassword);
}
/*-----------------------------------------------------------------*/
export default [
    watchUserRegister,
    watchActiveAccount,
    watchUserLogin,
    watchUserForgotPassword,
    watchUserResetPassword
];
