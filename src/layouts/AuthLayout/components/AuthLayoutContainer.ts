import IStore from "../../../redux/store/IStore";
import * as authLayoutActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthLayout from "./AuthLayout";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
    const allActions = {
        ...authLayoutActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default connect<{}, {}>(mapStateToProps, mapDispatchToProps)(AuthLayout);
