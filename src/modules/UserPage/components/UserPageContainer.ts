import IStore from "../../../redux/store/IStore";
import * as UserActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import { withRouter } from "react-router-dom";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
    const allActions = {
        ...UserActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default withRouter(
    connect<{}, {}>(mapStateToProps, mapDispatchToProps)(UserPage)
);
