/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IHandleClear
    | IActions.IPostEmployeeLogin
    | IActions.IPostEmployeeLoginSuccess
    | IActions.IPostEmployeeLoginFail
    | IActions.IGetPermissions
    | IActions.IGetPermissionsSuccess
    | IActions.IGetPermissionsFail

export default ActionTypes;
