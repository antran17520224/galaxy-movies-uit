import IStore from "../../../redux/store/IStore";
import * as IActions from "../IActions";
import * as loginActions from '../actions'
import { ILogInState, IEmployeeInfo } from "./ILoginState";

export interface ILogInProps {
    store: IStore;
    actions: typeof loginActions;
}
