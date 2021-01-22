import { Reducer } from "redux";
import { IHomePageState, initialState } from ".";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { HOME_PAGE_MODAL } from "./model/IHomePageState";

export const name = "HomePage";

export const reducer: Reducer<IHomePageState> = (
    state: IHomePageState = initialState,
    action: ActionTypes
): IHomePageState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        case Keys.GET_ALL_MOVIES:
            return onGetAllMovies(state, action);
        case Keys.GET_ALL_MOVIES_SUCCESS:
            return onGetAllMoviesSuccess(state, action);
        case Keys.GET_ALL_MOVIES_FAIL:
            return onGetAllMoviesFail(state, action);

        case Keys.GET_MOVIES_BY_STATUS:
            return onGetMoviesByStatus(state, action);
        case Keys.GET_MOVIES_BY_STATUS_SUCCESS:
            return onGetMoviesByStatusSuccess(state, action);
        case Keys.GET_MOVIES_BY_STATUS_FAIL:
            return onGetMoviesByStatusFail(state, action);
        case Keys.HANDLE_CURRENT_MOVIE: 
            return onHandleCurrentMovie(state, action);
        default:
            return state;
    }
};

//IActions: the interface of current action

const onHandleCurrentMovie = (
    state: IHomePageState,
    action: IActions.IHandleCurrentMovies
) => {
    const { currentMovie } = action.payload;

    return {
        ...state,
        currentMovie
    };
};

//#region onToggleModal Reducers
const onToggleModal = (
    state: IHomePageState,
    action: IActions.IToggleModal
) => {
    const { type, code } = action.payload;
    switch (type) {
        case HOME_PAGE_MODAL.TRAILER_MODAL:
            return {
                ...state,
                codeTrailer: code as string, 
                isShowTrailerModal: !state.isShowTrailerModal
            };
        default:
            return {
                ...state
            };
    }
};
//#endregion
//#region GetAllMovies
const onGetAllMovies = (
    state: IHomePageState,
    action: IActions.IGetAllMovies
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetAllMoviesSuccess = (
    state: IHomePageState,
    action: IActions.IGetAllMoviesSuccess
) => {
    const { data } = action.payload;

    return {
        ...state,
        isProcessing: false,
        isSearching: false,
        movieRecords: data
    };
};
const onGetAllMoviesFail = (
    state: IHomePageState,
    action: IActions.IGetAllMoviesFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion

//#region GetAllMovies
const onGetMoviesByStatus = (
    state: IHomePageState,
    action: IActions.IGetMoviesByStatus
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetMoviesByStatusSuccess = (
    state: IHomePageState,
    action: IActions.IGetMoviesByStatusSuccess
) => {
    const { data, status } = action.payload;
    switch (status.trim()) {
        case "banner": {
            return {
                ...state,
                movieBanner: data[0],
                isProcessing: false
            };
        }
        case "showing": {
            return {
                ...state,
                movieShowing : data,
            }
        }
        case "coming-soon" : {
            return {
                ...state,
                movieComingSoon : data,
            }
        }
        default: {
            return {
                ...state,
                isProcessing: false
            };
        }
    }
};
const onGetMoviesByStatusFail = (
    state: IHomePageState,
    action: IActions.IGetMoviesByStatusFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion
