import IStore from "../../../redux/store/IStore";
import * as ResultActions from '../actions'

export interface IResultProps {
    store: IStore;
    actions: typeof ResultActions;
}
