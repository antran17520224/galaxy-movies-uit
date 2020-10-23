
import {
    IMainLayoutState,
    name as MainLayoutState,
} from "../../layouts/MainLayout";

export default interface IStore {
    [MainLayoutState]: IMainLayoutState;
    router:  any;
}
