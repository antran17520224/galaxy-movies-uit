import IStore from "../../../redux/store/IStore";
import * as IActions from "../IActions";
import {} from "./IAuthLayoutState";

export interface IBankCardProps {
    store: IStore;
    actions: {
        // toggleModal: (data: { type: BANK_CARD_MODAL }) => IActions.IToggleModal;
    };
}
