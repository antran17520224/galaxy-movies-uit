
import {
    initialState as MainLayoutInitialState,
    name as MainLayout,
} from "../../layouts/MainLayout";
import {
    initialState as LoginInitialState,
    name as LoginPage,
} from "../../modules/LoginPage";

import IStore from "./IStore";

export const initialState: IStore = {
    [MainLayout]: MainLayoutInitialState,
    [LoginPage]: LoginInitialState,
    router: null,
};

export default initialState;
