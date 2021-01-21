import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";

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
