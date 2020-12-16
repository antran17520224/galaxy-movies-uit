
import {
    IMainLayoutState,
    name as MainLayoutState,
} from "../../layouts/MainLayout";
import {
    ILogInState,
    name as LoginPageState,
} from "../../modules/LoginPage";
import {
    IHomePageState,
    name as HomePageState,
} from "../../modules/HomePage";
import {
    IDetailsState,
    name as DetailsState,
} from "../../modules/Details";
export default interface IStore {
    [MainLayoutState]: IMainLayoutState;
    [LoginPageState]: ILogInState;
    [HomePageState]: IHomePageState;
    [DetailsState]: IDetailsState;
    router:  any;
}
