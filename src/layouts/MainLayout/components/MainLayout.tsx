import * as React from "react";
import { Link, Switch, Route, Redirect, RouteProps } from "react-router-dom";
import { Layout, Menu, BackTop, Space, Tooltip, Divider } from "antd";
import { RouteConfig } from "../../../routes";
import {
    UnorderedListOutlined,
    ControlOutlined,
    BarChartOutlined,
    KeyOutlined,
    CalculatorOutlined,
    ExportOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import { HeaderBar } from "../../../components";
// import { isGranted } from "../../../services/checkPermission";
import { IMainLayoutProps } from "../model/IMainLayoutProps";

import "./MainLayout.scss";

const { Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

interface IProps extends IMainLayoutProps {
    routes: RouteConfig[];
    router: RouteProps;
}

interface IMenuItem {
    key: string;
    title: string;
    icon?: React.ReactNode;
    permission?: string;
    children?: Array<IMenuItem>;
}

const menuList: Array<IMenuItem> = [
    {
        key: "sub1",
        icon: <CalculatorOutlined />,
        title: "Nghiệp vụ",
        children: [
            {
                key: "/verify",
                title: "Duyệt KYC - Rút/Nạp tiền",
                permission: "companyBanking",
            },
            {
                key: "/shop-owner",
                title: "Quản lý chủ shop",
                permission: "companyBanking",
            },
        ],
    },
];

export class MainLayout extends React.Component<IProps> {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    renderMenuItem = () => {
        return menuList.map((item) => {
            if (item["children"] !== undefined) {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {item["children"].map((child) => {
                            return (
                                <Menu.Item key={child.key}>
                                    <Link to={child.key}>{child.title}</Link>
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                );
            }
        });
    };

    render() {
        const { routes } = this.props;

        return (
            <React.Fragment>
                <HeaderBar />
                <Layout className="workspace">
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        width={250}
                    >
                        <Menu
                            theme="light"
                            defaultSelectedKeys={[
                                this.props.router.location.pathname,
                            ]}
                            mode="inline"
                        >
                            {this.renderMenuItem()}
                        </Menu>
                        <Divider className="m-0" />
                        <div className="py-3 px-4 bg-white slider_actions">
                            <div className="d-flex justify-content-center">
                                <Space
                                    align="center"
                                    direction="horizontal"
                                    size={24}
                                >
                                    <Tooltip placement="top" title="Trợ giúp">
                                        <ProfileOutlined />
                                    </Tooltip>
                                    <Tooltip placement="top" title="Đăng xuất">
                                        <ExportOutlined
                                            onClick={() =>
                                                this.props.actions.handleLogout()
                                            }
                                        />
                                    </Tooltip>
                                </Space>
                            </div>
                        </div>
                    </Sider>
                    <Layout>
                        <Content>
                            <div className="page__inner">
                                <Switch>
                                    {routes.map((item) => {
                                        return (
                                            <Route
                                                key={item.path}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        );
                                    })}
                                    {routes.length > 0 ? (
                                        <Redirect
                                            to={`${routes[0].path}`}
                                        />
                                    ) : null}
                                    <Redirect from="*" to="/404" />
                                </Switch>
                                {this.props.children}
                            </div>
                        </Content>
                    </Layout>
                    <BackTop />
                </Layout>
            </React.Fragment>
        );
    }
}

export default MainLayout;
