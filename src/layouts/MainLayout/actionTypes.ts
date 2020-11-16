/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IToggleSideBar
    | IActions.IHandleLogout
    | IActions.IIsLogin

export default ActionTypes;
