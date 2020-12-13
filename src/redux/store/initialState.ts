
import {
    initialState as MainLayoutInitialState,
    name as MainLayout,
} from "../../layouts/MainLayout";
import {
    initialState as LoginInitialState,
    name as LoginPage,
} from "../../modules/LoginPage";
import {
    initialState as HomePageInitialState,
    name as HomePage,
} from "../../modules/HomePage";
import IStore from "./IStore";

export const initialState: IStore = {
    [MainLayout]: MainLayoutInitialState,
    [LoginPage]: LoginInitialState,
    [HomePage]: HomePageInitialState,
    router: null,
};

export default initialState;
