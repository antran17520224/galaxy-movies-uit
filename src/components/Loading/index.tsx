import * as React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { blue } from "@ant-design/colors";

interface IProps {
    component?: React.ReactNode;
    size?: "small" | "large" | "default";
    backdrop?: boolean;
}

export const LoadingScreen: React.FC<IProps> = ({
    size,
    component,
    backdrop,
}: IProps) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: backdrop
                    ? "rgba(250,250,250,0.7)"
                    : "transparent",
                zIndex: 10,
            }}
        >
            {component ? component : <Spin size={size} />}
        </div>
    );
};
