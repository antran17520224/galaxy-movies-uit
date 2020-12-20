import IStore from "../../../redux/store/IStore";
import * as ticketingActions from '../actions'

export interface ITicketingProps {
    store: IStore;
    actions: typeof ticketingActions;
}
