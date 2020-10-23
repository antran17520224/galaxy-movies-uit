
import {
    initialState as MainLayoutInitialState,
    name as MainLayout,
} from "../../layouts/MainLayout";

import IStore from "./IStore";

export const initialState: IStore = {
    [MainLayout]: MainLayoutInitialState,
    router: null,
};

export default initialState;
