import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { DETAILS_MODAL, ISession } from "./model/IDetailsState";

//#region toggleModal Actions
export const toggleModal = (data: {
    codeTrailer? : string;
    type: DETAILS_MODAL;
    coordinate? : {
        lat : number;
        lng : number;
    }
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};
//#endregion

//#region getSessionByMovieId Actions
export const getSessionByMovieId = (data: {
    movieId? : string;
}): IActions.IGetSessionByMovieId => {
    return {
        type: Keys.GET_SESSION_BY_MOVIE_ID,
        payload: {
            ...data
        }
    };
};
export const getSessionByMovieIdSuccess = (res : any): IActions.IGetSessionByMovieIdSuccess => {
    return {
        type: Keys.GET_SESSION_BY_MOVIE_ID_SUCCESS,
        payload: res
    };
};
export const getSessionByMovieIdFail = (res : any): IActions.IGetSessionByMovieIdFail => {
    return {
        type: Keys.GET_SESSION_BY_MOVIE_ID_FAIL,
        payload: res
    };
};
//#endregion

export const handleClearSessionRecords = (): IActions.IHandleClearSessionRecords => {
    return {
        type: Keys.HANDLE_CLEAR_SESSION_RECORD,
    };
};

export const handleCurrentSession = (data : {
    currentSession : ISession;
}): IActions.IHandleCurrentSession => {
    return {
        type: Keys.HANDLE_CURRENT_SESSION,
        payload : {
            ...data
        }
    };
};

