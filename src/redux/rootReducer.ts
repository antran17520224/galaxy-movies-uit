/**
 * @file Root reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import IStore from "./store/IStore";

// Place for reducers' app



/*----Reducers List-----------------*/
const reducers = {
};

const rootReducer = (history) =>
    combineReducers<IStore>({
        ...reducers,
        router: connectRouter(history),
    });

export default rootReducer;
