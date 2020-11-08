import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IStore from "../../../redux/store/IStore";
import * as mainLayoutActions from "../actions";
import MainLayout from "./MainLayout";

function mapStateToProps(store: IStore) {
    return {
        store: store,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
    const allActions = {
        ...mainLayoutActions,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
    };
}

export default connect<{}, {}>(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);
