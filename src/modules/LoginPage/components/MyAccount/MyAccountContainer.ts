import IStore from "../../../../redux/store/IStore";
import * as loginActions from "../../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MyAccount } from "./index";
import { withRouter } from "react-router-dom";

function mapStateToProps(store: IStore) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    const allActions = {
        ...loginActions
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MyAccount)
);

