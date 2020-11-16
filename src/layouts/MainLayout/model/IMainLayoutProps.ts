import IStore from "../../../redux/store/IStore";
import {} from "./IMainLayoutState";
import * as mainActions from '../actions'

export interface IMainLayoutProps {
    store: IStore;
    actions: typeof mainActions
}
