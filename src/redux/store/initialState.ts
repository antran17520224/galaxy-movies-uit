import IStore from "./IStore";

import {
    initialState as MainLayoutInitialState,
    name as MainLayout
} from "../../layouts/MainLayout";
import {
    initialState as LoginInitialState,
    name as LoginPage
} from "../../modules/LoginPage";
import {
    initialState as HomePageInitialState,
    name as HomePage
} from "../../modules/HomePage";
import {
    initialState as DetailsPageInitialState,
    name as DetailsPage
} from "../../modules/Details";
import {
    initialState as TicketingPageInitialState,
    name as TicketingPage
} from "../../modules/Ticketing";
import {
    initialState as ResultPageInitialState,
    name as ResultPage
} from "../../modules/ResultPage";
import {
    initialState as UserPageInitialState,
    name as UserPage
} from "../../modules/UserPage";

export const initialState: IStore = {
    [MainLayout]: MainLayoutInitialState,
    [LoginPage]: LoginInitialState,
    [HomePage]: HomePageInitialState,
    [DetailsPage]: DetailsPageInitialState,
    [TicketingPage]: TicketingPageInitialState,
    [ResultPage]: ResultPageInitialState,
    [UserPage]: UserPageInitialState,
    router: null
};

export default initialState;
