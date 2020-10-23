import IStore from "../../../redux/store/IStore";
import * as IActions from "../IActions";
import {} from "./IMainLayoutState";

export interface IMainLayoutProps {
    store: IStore;
    actions: {
        handleLogout: () => IActions.IHandleLogout;
    };
}
