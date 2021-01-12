import { ThemeProvider } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from "connected-react-router";
import "moment/locale/vi";
import * as React from "react";
import { connect, Provider } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import theme from "./common/Theme";
import { LoadingScreen } from "./components";
import MainLayout from "./layouts/MainLayout/components/MainLayoutContainer";
import { IMainLayoutProps } from "./layouts/MainLayout/model/IMainLayoutProps";
import { ILogInState } from "./modules/LoginPage";
import { storeConfig } from "./redux/store/configureStore.dev";
import { mainRoutes, RouteConfig } from "./routes";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


interface IProps extends RouteComponentProps, IMainLayoutProps {
    LoginState: ILogInState;
    router: any;
    window?: () => Window;
    routes?: RouteConfig[];
    children?: React.ReactElement;
}
class App extends React.Component<IProps, {}> {
    render() {
        const LoginState = this.props.LoginState as ILogInState;
        const { isLoading, accessToken } = LoginState;
        return (
            <React.Fragment>
                <ConnectedRouter history={storeConfig.history}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer />
                        <React.Suspense fallback={<LoadingScreen size="large" />}>
                            <MainLayout
                                {...this.props}
                                routes={mainRoutes}
                            />
                        </React.Suspense>
                    </ThemeProvider>
                </ConnectedRouter>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => ({
    LoginState: store.LoginPage,
    router: store.router,
});

const AppWithState: React.ComponentClass<{}> = connect<any, any>(
    mapStateToProps,
    null
)(App);

const AppWithRedux: React.FC = () => {
    return (
        <Provider store={storeConfig.store}>
                <AppWithState />
        </Provider>
    );
};

export default AppWithRedux;
