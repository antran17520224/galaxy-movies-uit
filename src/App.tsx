import { ThemeProvider } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/vi_VN";
import { ConnectedRouter } from "connected-react-router";
import "moment/locale/vi";
import * as React from "react";
import { connect, Provider } from "react-redux";
import { validateMessages } from "./common";
import theme from "./common/Theme";
import { LoadingScreen } from "./components";
import { AuthLayout } from "./layouts/index";
import MainLayout from "./layouts/MainLayout/components/MainLayoutContainer";
import { ILogInState } from "./modules/LoginPage";
import { storeConfig } from "./redux/store/configureStore.dev";
import { authRoutes, mainRoutes } from "./routes";

interface IProps {
    LoginState: ILogInState;
    router: any;
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
                        <React.Suspense fallback={<LoadingScreen size="large" />}>
                            {isLoading ? (
                                <LoadingScreen size="large" />
                            ) : accessToken === null ? (
                                <MainLayout
                                    routes={mainRoutes}
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
