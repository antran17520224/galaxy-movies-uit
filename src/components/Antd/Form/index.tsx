import * as React from "react";
import { FormItemProps, FormProps, FormInstance, Rule } from "antd/lib/form";
import { Form, Button, Input } from "antd";
import { NamePath } from "antd/lib/form/interface";
import { EditOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";

interface ICusFormItemProps extends FormItemProps {
    name?: string | React.ReactText[];
    label?: string | React.ReactNode;
    labelCol?: object;
    style?: object;
    rules?: Rule[];
    hasFeedback?: boolean;
    dependencies?: NamePath[];
    validateStatus?: "success" | "error" | "warning" | "validating";
    noStyle?: boolean;
    getValueFromEvent?: (args: any[]) => any;
    children: React.ReactNode;
    shouldUpdate?: (prevValue, curValue) => boolean;
}
interface ICusFormProps extends FormProps {
    form: FormInstance;
    layout?: "horizontal" | "vertical" | "inline";
    name?: string;
    onFinish?: any | Function;
    children: React.ReactNode;
    hideRequiredMark?: boolean;
    scrollToFirstError?: boolean;
    initialValues?: object;
    onValuesChange?: (changedValues: any, allValues: any) => any;
}

export const FormItem: React.FC<ICusFormItemProps> = (
    formItemProps: ICusFormItemProps
) => <Form.Item {...formItemProps}>{formItemProps.children}</Form.Item>;

export const CustomForm: React.FC<ICusFormProps> = (
    formProps: ICusFormProps
) => <Form {...formProps}>{formProps.children}</Form>;

interface ITextEditableProps {
    text: string;
    message: string;
    onChange: Function;
}

export const TextEditable = ({
    text,
    onChange,
    message,
}: ITextEditableProps) => {
    const [value, setValue] = React.useState(text);
    const [edit, setEdit] = React.useState(false);
    const [formInstance] = Form.useForm();

    const onFinish = () => {
        if (formInstance.getFieldValue("value") !== "") {
            setEdit(false);
            setValue(formInstance.getFieldValue("value"));
            onChange(formInstance.getFieldValue("value"));
        }
        setEdit(false);
    };

    return (
        <React.Fragment>
            {edit ? (
                <CustomForm form={formInstance} initialValues={{ value: text }}>
                    <FormItem
                        name="value"
                        rules={[
                            {
                                required: true,
                                message,
                            },
                        ]}
                        children={
                            <Input
                                onBlur={() => {
                                    onFinish();
                                }}
                                onPressEnter={() => {
                                    onFinish();
                                }}
                            />
                        }
                    />
                </CustomForm>
            ) : (
                <div style={{ display: "inline-block" }}>
                    {value}
                    <Button
                        type="text"
                        icon={<EditOutlined style={{ color: blue.primary }} />}
                        onClick={() => setEdit(true)}
                    />
                </div>
            )}
        </React.Fragment>
    );
};
