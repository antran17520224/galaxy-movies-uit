import IStore from "../../../redux/store/IStore";
import * as detailsActions from '../actions'

export interface IDetailsProps {
    store: IStore;
    actions: typeof detailsActions;
}
