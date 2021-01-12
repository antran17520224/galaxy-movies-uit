import * as React from "react";
import { Spin } from "antd";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.scss";
interface IProps {
    component?: React.ReactNode;
    size?: "small" | "large" | "default";
    backdrop?: boolean;
}

export const LoadingScreen: React.FC<IProps> = ({
    size,
    component,
    backdrop
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
                zIndex: 10
            }}
        >
            {component ? component : <Spin size={size} />}
        </div>
    );
};
export const LoadingComponent: React.FC<ILoadingProps> = ({
    spinning
}: ILoadingProps) => {
    return spinning ? (
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
                backgroundColor: "rgba(250,250,250,0.7)",
                zIndex: 10
            }}
        >
            <CircularProgress />
        </div>
    ) : null;
};
interface ILoadingProps {
    spinning?: boolean;
    opacity? : number
}
export const LoadingCustom: React.FC<ILoadingProps> = ({
    spinning,opacity
}: ILoadingProps) => {
    return spinning ? (
        <React.Fragment>
            <div className="wrapper-loading-custom" style={{
                opacity : opacity
            }}>
                <div className="arc"></div>
                <h1>
                    <span>LOADING</span>
                </h1>
            </div>
        </React.Fragment>
    ) : null;
};
export const LoadingResult: React.FC<ILoadingProps> = ({
    spinning,opacity
}: ILoadingProps) => {
    return spinning ? (
        <React.Fragment>
            <div className="wrapper-loading-custom" style={{
                opacity : opacity
            }}>
                <div className="arc"></div>
                <h1>
                    <span>Đang xử lý thanh toán</span>
                </h1>
            </div>
        </React.Fragment>
    ) : null;
};