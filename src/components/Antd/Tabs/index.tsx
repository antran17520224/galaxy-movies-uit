import * as React from "react";
import { TabsProps } from "antd/lib/tabs";
import { Tabs } from "antd";

interface ICusTabsProps extends TabsProps {
    children: React.ReactNode;
    defaultActiveKey?: string;
    activeKey? : string;
    onTabClick?: (key: any, event: any) => any;
    onChange?: (activeKey: any) => any;
}

export const CustomTabs: React.FC<ICusTabsProps> = (props: ICusTabsProps) => (
    <Tabs {...props}>{props.children}</Tabs>
);
