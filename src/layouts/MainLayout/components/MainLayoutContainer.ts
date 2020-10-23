import IStore from "../../../redux/store/IStore";
import * as mainLayoutActions from "../actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import MainLayout from "./MainLayout";
import { RouteConfig } from "../../../routes";
import { RouteProps } from "react-router-dom";

interface IProps {
    routes: RouteConfig[];
    router: RouteProps;
}

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
)<IProps>(MainLayout);
