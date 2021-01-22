import IStore from "../../../redux/store/IStore";
import * as homeActions from '../actions'

export interface IHomePageProps {
    store: IStore;
    actions: typeof homeActions;
}
