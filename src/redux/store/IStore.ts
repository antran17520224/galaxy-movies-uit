
import {
    IMainLayoutState,
    name as MainLayoutState,
} from "../../layouts/MainLayout";
import {
    ILogInState,
    name as LoginPageState,
} from "../../modules/LoginPage";

export default interface IStore {
    [MainLayoutState]: IMainLayoutState;
    [LoginPageState]: ILogInState;
    router:  any;
}
