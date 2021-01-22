import Keys from "./actionTypeKeys";
import * as IActions from "./IActions";
import { HOME_PAGE_MODAL, IMovie } from "./model/IHomePageState";

//#region POST Employee Login Actions

//#region Get Permissions Actions
export const toggleModal = (data : {
    type: HOME_PAGE_MODAL,
    code? : string
}): IActions.IToggleModal => {
    return {
        type: Keys.TOGGLE_MODAL,
        payload: {
            ...data
        }
    };
};

//#endregion

//#region GET All Movies Actions
export const getAllMovies = (): IActions.IGetAllMovies => {
    return {
        type: Keys.GET_ALL_MOVIES
    };
};

export const getAllMoviesSuccess = (
    res: any
): IActions.IGetAllMoviesSuccess => {
    return {
        type: Keys.GET_ALL_MOVIES_SUCCESS,
        payload: res
    };
};

export const getAllMoviesFail = (res: any): IActions.IGetAllMoviesFail => {
    return {
        type: Keys.GET_ALL_MOVIES_FAIL,
        payload: res
    };
};
//#endregion

//#region getMoviesByStatus Actions
export const getMoviesByStatus = (data: {
    status: string;
}): IActions.IGetMoviesByStatus => {
    return {
        type: Keys.GET_MOVIES_BY_STATUS,
        payload: {
            ...data
        }
    };
};

export const getMoviesByStatusSuccess = (res: {
    data: any;
    status: string;
}): IActions.IGetMoviesByStatusSuccess => {
    return {
        type: Keys.GET_MOVIES_BY_STATUS_SUCCESS,
        payload: {
            ...res
        }
    };
};

export const getMoviesByStatusFail = (
    res: any
): IActions.IGetMoviesByStatusFail => {
    return {
        type: Keys.GET_MOVIES_BY_STATUS_FAIL,
        payload: res
    };
};
//#endregion

export const handleCurrentMovie = (data : {
    currentMovie : IMovie
}): IActions.IHandleCurrentMovies => {
    return {
        type: Keys.HANDLE_CURRENT_MOVIE,
        payload: {
            ...data
        }
    };
};
