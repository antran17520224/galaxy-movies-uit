import * as React from "react";
import { TreeSelect, Tree } from "antd";
import { TreeSelectProps } from "antd/lib/tree-select";
import { TreeProps } from "antd/lib/tree";

const { SHOW_PARENT, SHOW_ALL, SHOW_CHILD } = TreeSelect;

interface ICusTreeSelectProps extends TreeSelectProps<any> {
    treeData: any;
    value?: any;
    onChange?: any | Function;
    loadData?: any;
    treeCheckable?: boolean;
    showCheckedStrategy:
        | typeof SHOW_PARENT
        | typeof SHOW_ALL
        | typeof SHOW_CHILD;
    placeholder: string;
    treeNodeFilterProp?: string;
    treeDefaultExpandAll?: boolean;
    style?: object;
}

export const CustomTreeSelect: React.FC<ICusTreeSelectProps> = (
    treeSelectProps: ICusTreeSelectProps
) => <TreeSelect {...treeSelectProps} />;

interface ICusTreeProps extends TreeProps {
    autoExpandParent?: boolean;
    checkable?: boolean;
    disabled?: boolean;
    treeData: any;
    checkedKeys?: string[] | { checked: string[]; halfChecked: string[] };
    selectedKeys?: string[];
    onCheck?: any;
    onSelect?: (
        selectedKeys: string[],
        e: {
            selected: boolean;
            selectedNodes;
            node;
            event;
        }
    ) => void;
}

export const CustomTree: React.FC<ICusTreeProps> = (
    treeProps: ICusTreeProps
) => <Tree {...treeProps} />;
