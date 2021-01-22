import IStore from "../../../redux/store/IStore";
import * as ResultActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import ResultPage from "./ResultPage";
import { withRouter } from "react-router-dom";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    const allActions = {
        ...ResultActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ResultPage)
);
