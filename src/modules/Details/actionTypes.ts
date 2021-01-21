/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IToggleModal
    | IActions.IGetSessionByMovieId
    | IActions.IGetSessionByMovieIdSuccess
    | IActions.IGetSessionByMovieIdFail
    | IActions.IHandleClearSessionRecords
    | IActions.IHandleCurrentSession

   

export default ActionTypes;
