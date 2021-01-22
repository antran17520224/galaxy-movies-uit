/**
 * @file Type of actions will be listed here
 */

import * as IActions from "./IActions";

type ActionTypes =
    | IActions.IHandleClear

    | IActions.IToggleModal
    | IActions.IGetAllMovies
    | IActions.IGetAllMoviesSuccess
    | IActions.IGetAllMoviesFail

    | IActions.IGetMoviesByStatus
    | IActions.IGetMoviesByStatusSuccess 
    | IActions.IGetMoviesByStatusFail

    | IActions.IHandleCurrentMovies

export default ActionTypes;
