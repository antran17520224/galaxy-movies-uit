import IStore from "../../../redux/store/IStore";
import * as UserActions from '../actions'

export interface IUserProps {
    store: IStore;
    actions: typeof UserActions;
}
