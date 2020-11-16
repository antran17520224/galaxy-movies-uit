import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";

export const handleLogout = (): IActions.IHandleLogout => {
    return {
        type: Keys.HANDLE_LOGOUT,
    };
};

export const toggleSideBar = () : IActions.IToggleSideBar => {
    return {
        type: Keys.TOGGLE_SIDE_BAR
    }
}

export const isLogin = () :IActions.IIsLogin => {
    return {
        type : Keys.IS_LOGIN
    }
}
