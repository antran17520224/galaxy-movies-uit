/**
 * @file Root reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import IStore from "./store/IStore";

// Place for reducers' app
import LoginPage, { name as nameOfLoginPage } from "../modules/LoginPage";


/*----Reducers List-----------------*/
const reducers = {
    [nameOfLoginPage]: LoginPage,

};

const rootReducer = (history) =>
    combineReducers<IStore>({
        ...reducers,
        router: connectRouter(history),
    });

export default rootReducer;
