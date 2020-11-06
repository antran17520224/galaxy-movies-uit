import * as React from "react";
import { Provider, connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { storeConfig } from "./redux/store/configureStore.dev";
import { AuthLayout } from "./layouts/index";
import MainLayout from "./layouts/MainLayout/components/MainLayoutContainer";
import { mainRoutes, authRoutes, otherRoutes } from "./routes";
// import { ILogInState } from "./modules/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { validateMessages } from "./common";
import { LoadingScreen } from "./components";
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/vi_VN";
import "moment/locale/vi";
import { ILogInState } from "./modules/LoginPage";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./common/Theme";

interface IProps {
    LoginState: ILogInState;
    router: any;
}

class App extends React.Component<IProps, {}> {
    render() {
        const LoginState = this.props.LoginState as ILogInState;
        const { isLoading, accessToken } = LoginState;
        console.log("isLoading", isLoading)
        return (
            <React.Fragment>
                <ConnectedRouter history={storeConfig.history}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <React.Suspense fallback={<LoadingScreen size="large" />}>
                            {isLoading ? (
                                <LoadingScreen size="large" />
                            ) : accessToken !== null ? (
                                <MainLayout
                                    routes={mainRoutes}
                                    router={this.props.router}
                                />
                            ) : (
                                        <AuthLayout routes={authRoutes} />
                                    )}
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
            <ConfigProvider locale={locale} form={{ validateMessages }}>
                <AppWithState />
            </ConfigProvider>
        </Provider>
    );
};

export default AppWithRedux;
