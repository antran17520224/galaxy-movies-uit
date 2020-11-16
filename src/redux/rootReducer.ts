/**
 * @file Root reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import IStore from "./store/IStore";

// Place for reducers' app
import LoginPage, { name as nameOfLoginPage } from "../modules/LoginPage";
import MainLayout, {name as nameOfMainLayout} from "../layouts/MainLayout";


/*----Reducers List-----------------*/
const reducers = {
    [nameOfLoginPage]: LoginPage,
    [nameOfMainLayout]: MainLayout,

};

const rootReducer = (history) =>
    combineReducers<IStore>({
        ...reducers,
        router: connectRouter(history),
    });

export default rootReducer;
