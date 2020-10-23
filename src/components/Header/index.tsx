import React from "react";
import { Menu, Badge, Layout } from "antd";
import { SettingOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export const HeaderBar = () => {
    const [selectedKey, setSelectedKey] = React.useState("dashboard");

    const handleClick = (e) => {
        setSelectedKey(e.key);
    };
    return (
        <React.Fragment>
            <div className="header_dash__container">
                <Header>
                    <Menu
                        theme="light"
                        onClick={handleClick}
                        selectedKeys={[selectedKey]}
                        mode="horizontal"
                    >
                        <Menu.Item key="dashboard">Dashboard</Menu.Item>
                        <Menu.Item key="statistic">Statistic</Menu.Item>
                        <span className="mr-auto" />
                        <Menu.Item key="settings">
                            <SettingOutlined />
                        </Menu.Item>
                        <SubMenu
                            key="notifications"
                            title={
                                <Badge count={5} offset={[0, 0]}>
                                    <BellOutlined />
                                </Badge>
                            }
                        >
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="account" icon={<UserOutlined />}>
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
            </div>
        </React.Fragment>
    );
};
