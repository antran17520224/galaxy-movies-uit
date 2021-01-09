import { Reducer } from "redux";
import Keys from "./actionTypeKeys";
import ActionTypes from "./actionTypes";
import * as IActions from "./IActions";
import { DETAILS_MODAL, IDetailsState, initialState } from "./model/IDetailsState";

export const name = "DetailPage";

export const reducer: Reducer<IDetailsState> = (
    state: IDetailsState = initialState,
    action: ActionTypes
): IDetailsState => {
    switch (action.type) {
        case Keys.TOGGLE_MODAL:
            return onToggleModal(state, action);
        case Keys.GET_SESSION_BY_MOVIE_ID:
            return onGetSessionByMovieId(state, action);
        case Keys.GET_SESSION_BY_MOVIE_ID_SUCCESS:
            return onGetSessionByMovieIdSuccess(state, action);
        case Keys.GET_SESSION_BY_MOVIE_ID_FAIL:
            return onGetSessionByMovieIdFail(state, action);

        case Keys.HANDLE_CLEAR_SESSION_RECORD:
            return onHandleClear(state, action);

        case Keys.HANDLE_CURRENT_SESSION:
            return onHandleCurrentSession(state, action);

        default:
            return state;
    }
};

const onHandleCurrentSession = (
    state: IDetailsState,
    action: IActions.IHandleCurrentSession
) => {
    const { currentSession } = action.payload;
    return {
        ...state,
        sessionRecords: [],
        currentSession
    };
};

//#region onToggleModal Reducers
const onToggleModal = (state: IDetailsState, action: IActions.IToggleModal) => {
    const { type, codeTrailer, lat, long } = action.payload;
    const coordinate = {
        lat,
        long
    };
    switch (type) {
        case DETAILS_MODAL.TRAILER_MODAL:
            return {
                ...state,
                isShowTrailer: !state.isShowTrailer,
                codeTrailer
            };
        case DETAILS_MODAL.MAP_MODAL:
            return {
                ...state,
                toggleMapModal: !state.toggleMapModal,
                coordinate
            };
        default:
            return {
                ...state
            };
    }
};
//#endregion

//#region handleClear Reducers
const onHandleClear = (
    state: IDetailsState,
    action: IActions.IHandleClearSessionRecords
) => {
    return {
        ...state,
        sessionRecords: []
    };
};
//#endregion

//#region onGetSessionByMovieId
const onGetSessionByMovieId = (
    state: IDetailsState,
    action: IActions.IGetSessionByMovieId
) => {
    return {
        ...state,
        isProcessing: true
    };
};
const onGetSessionByMovieIdSuccess = (
    state: IDetailsState,
    action: IActions.IGetSessionByMovieIdSuccess
) => {
    const { data } = action.payload;

    return {
        ...state,
        isProcessing: false,
        sessionRecords: data
    };
};
const onGetSessionByMovieIdFail = (
    state: IDetailsState,
    action: IActions.IGetSessionByMovieIdFail
) => {
    return {
        ...state,
        isProcessing: false
    };
};
//#endregion
