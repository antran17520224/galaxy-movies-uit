import * as React from "react";
import { Empty } from "antd";
import { ReactNode } from "react-redux";
import { CSSProperties } from "react";
import { TableProps } from "antd/lib/table";
import { Table } from "antd";
import { ColumnsType, ExpandableConfig } from "antd/lib/table/interface";
import { IColumn } from "../../../common";

interface ICusTreeSelectProps {
    image?: string | ReactNode;
    description?: string | ReactNode;
    imageStyle?: CSSProperties;
}

export const CustomEmpty: React.FC<ICusTreeSelectProps> = (
    emptyProps: ICusTreeSelectProps
) => <Empty {...emptyProps} />;

interface ICusTableProps extends TableProps<any> {
    rowKey?: string;
    locale?: object;
    loading?: boolean;
    bordered?: boolean;
    childrenColumnName?: string;
    expandable?: ExpandableConfig<{
        expandedRowKeys?: React.ReactText[];
        defaultExpandAllRows?: boolean;
        expandRowByClick?: boolean;
        expandedRowRender?: (
            record: any,
            index,
            indent,
            expanded
        ) => React.ReactNode;
    }>;
    pagination?: object;
    columns: ColumnsType<IColumn>;
    dataSource: any;
    scroll?: {
        x?: string | number;
        y?: string | number;
        scrollToFirstRowOnChange?: boolean;
    };
}

export const CustomTable: React.FC<ICusTableProps> = (
    tableProps: ICusTableProps
) => <Table {...tableProps} />;
