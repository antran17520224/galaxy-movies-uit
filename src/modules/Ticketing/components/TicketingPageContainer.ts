import IStore from "../../../redux/store/IStore";
import * as ticketingActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import TicketingPage from "./TicketingPage";
import { withRouter } from "react-router-dom";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
    const allActions = {
        ...ticketingActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default withRouter(
    connect<{}, {}>(mapStateToProps, mapDispatchToProps)(TicketingPage)
);
