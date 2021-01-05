import { HOME_PAGE_MODAL, IMovie } from './model/IHomePageState';
/**
 * @file All actions interface will be listed here
 */

import { Action } from "redux";
import Keys from "./actionTypeKeys";
import { IError } from "../../common";



//#region  IHandleClear IActions
export interface IHandleClear extends Action {
    readonly type: Keys.HANDLE_CLEAR;
    payload: {
        type: string;
    };
}

//#endregion

//#region Toggle Modals
export interface IToggleModal extends Action {
    readonly type: Keys.TOGGLE_MODAL;
    payload : {
        type: HOME_PAGE_MODAL,
        code? : string;
    }
}
//#endregion


//#region GET All Movies IActions
export interface IGetAllMovies extends Action {
	readonly type: Keys.GET_ALL_MOVIES;
}
export interface IGetAllMoviesSuccess extends Action {
	readonly type: Keys.GET_ALL_MOVIES_SUCCESS;
	payload: any;
}
export interface IGetAllMoviesFail extends Action {
	readonly type: Keys.GET_ALL_MOVIES_FAIL;
	payload: IError[];
}
//#endregion

//#region IGetMoviesByStatus IActions
export interface IGetMoviesByStatus extends Action {
    readonly type: Keys.GET_MOVIES_BY_STATUS;
    payload : {
        status : string
    }
}
export interface IGetMoviesByStatusSuccess extends Action {
	readonly type: Keys.GET_MOVIES_BY_STATUS_SUCCESS;
	payload: {
        data : any,
        status : string;
    }
}
export interface IGetMoviesByStatusFail extends Action {
	readonly type: Keys.GET_MOVIES_BY_STATUS_FAIL;
	payload: IError[];
}
//#endregion

//#region HandleCurrentMovies IActions
export interface IHandleCurrentMovies extends Action {
    readonly type: Keys.HANDLE_CURRENT_MOVIE;
    payload : {
        currentMovie : IMovie
    }
}
//#endregion
