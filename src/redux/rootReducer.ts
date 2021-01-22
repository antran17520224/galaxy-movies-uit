/**
 * @file Root reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import IStore from "./store/IStore";

// Place for reducers' app
import MainLayout, {name as nameOfMainLayout} from "../layouts/MainLayout";
import LoginPage, { name as nameOfLoginPage } from "../modules/LoginPage";
import HomePage, { name as nameOfHomePage } from "../modules/HomePage";
import DetailsPage, { name as nameOfDetailsPage } from "../modules/Details";
import TicketingPage, { name as nameOfTicketingPage } from "../modules/Ticketing";
import ResultPage, { name as nameOfResultPage } from "../modules/ResultPage";


/*----Reducers List-----------------*/
const reducers = {
    [nameOfMainLayout]: MainLayout,
    [nameOfLoginPage]: LoginPage,
    [nameOfHomePage]: HomePage,
    [nameOfDetailsPage]: DetailsPage,
    [nameOfTicketingPage]: TicketingPage,
    [nameOfResultPage]: ResultPage,

};

const rootReducer = (history) =>
    combineReducers<IStore>({
        ...reducers,
        router: connectRouter(history),
    });

export default rootReducer;
