import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";

export const handleLogout = (): IActions.IHandleLogout => {
    return {
        type: Keys.HANDLE_LOGOUT,
    };
};
