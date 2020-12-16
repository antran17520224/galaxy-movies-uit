import IStore from "../../../redux/store/IStore";
import * as detailsActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import DetailsPage from "./DetailsPage";
import { withRouter } from "react-router-dom";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
    const allActions = {
        ...detailsActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default withRouter(
    connect<{}, {}>(mapStateToProps, mapDispatchToProps)(DetailsPage)
);
