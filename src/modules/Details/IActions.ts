import { IError } from './../../common/Interface/index';
/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { DETAILS_MODAL, ISession } from "./model/IDetailsState";

//#region IToggleModal
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload: {
        type: DETAILS_MODAL;
        codeTrailer? : string;
        coordinate? : {
            lat : number;
            lng : number;
        }
    };
}
//#endregion
export interface IHandleClearSessionRecords extends Action {
    readonly type: Keys.HANDLE_CLEAR_SESSION_RECORD;
}
//#region IGetSessionByMovieId
export interface IGetSessionByMovieId extends Action {
    readonly type: Keys.GET_SESSION_BY_MOVIE_ID;
    payload: {
        movieId? : string;
    };
}
export interface IGetSessionByMovieIdSuccess extends Action {
    readonly type: Keys.GET_SESSION_BY_MOVIE_ID_SUCCESS;
    payload: any
}
export interface IGetSessionByMovieIdFail extends Action {
    readonly type: Keys.GET_SESSION_BY_MOVIE_ID_FAIL;
    payload: any
}
//#endregion

//#region Handle current Session
export interface IHandleCurrentSession extends Action {
    readonly type: Keys.HANDLE_CURRENT_SESSION;
    payload: {
        currentSession : ISession;
    }
}
//#endregion
