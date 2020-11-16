import IStore from "../../../redux/store/IStore";
import * as loginActions from '../actions'

export interface ILogInProps {
    store: IStore;
    actions: typeof loginActions;
}
