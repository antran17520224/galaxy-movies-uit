import React, { CSSProperties } from "react";
import { Select } from "antd";
import { CustomEmpty } from "../DataDisplay";
import { LabeledValue } from "antd/lib/tree-select";

const { Option } = Select;

export interface ICusSelectProps {
    mode?: "multiple" | "tags";
    showSearch?: boolean;
    disabled?: boolean;
    loading?: boolean;
    virtual?: boolean;
    placeholder?: string;
    optionLabelProp?: string;
    optionFilterProp?: string;
    style?: CSSProperties;
    notFoundContent?: React.ReactNode;
    filterOption?: (input, option) => boolean;
    onSelect?: (e, option) => void;
    onChange?: (value, option: any | Array<any>) => void;
    defaultValue?:
        | string
        | string[]
        | number
        | number[]
        | LabeledValue
        | LabeledValue[];
    value?:
        | string
        | string[]
        | number
        | number[]
        | LabeledValue
        | LabeledValue[];
}

interface IProps {
    selectProps: any;
    options: Array<{ _id?: string; name?: string | React.ReactNode }>;
}

export const CustomSelect: React.FC<IProps> = ({
    selectProps,
    options,
}: IProps) => {
    return (
        <Select {...selectProps}>
            {options &&
                options.map((option) => {
                    return (
                        <Option
                            key={option._id}
                            value={option._id}
                            label={option.name}
                        >
                            {option.name}
                        </Option>
                    );
                })}
        </Select>
    );
};
