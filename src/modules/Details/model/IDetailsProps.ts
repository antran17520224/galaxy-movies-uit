import IStore from "../../../redux/store/IStore";
import * as loginActions from '../actions'

export interface IDetailsProps {
    store: IStore;
    actions: typeof loginActions;
}
