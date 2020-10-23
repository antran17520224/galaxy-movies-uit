import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouteConfig } from "../../../routes";
import { Layout } from "antd";

const { Footer, Content } = Layout;

interface IProps {
    routes: RouteConfig[];
}

export class AuthLayout extends React.Component<IProps, {}> {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <Content>
                    <Switch>
                        {this.props.routes.map((item) => (
                            <Route
                                key={item.path}
                                path={item.path}
                                component={item.component}
                            />
                        ))}

                        {this.props.routes.length > 0 ? (
                            <Redirect to={this.props.routes[0].path} />
                        ) : null}
                    </Switch>

                    {this.props.children}
                </Content>
            </React.Fragment>
        );
    }
}
export default AuthLayout;
