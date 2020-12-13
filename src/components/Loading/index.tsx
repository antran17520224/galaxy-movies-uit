import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface IProps {
    time: number;
}

export const LoadingScreen: React.FC<IProps> = ({ time }) => {
    const [isLoading, setLoading] = React.useState(true);
    setTimeout(() => {
        setLoading(false);
    }, time);
    return isLoading ? (
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
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                transition: "0.3s all ease",
            }}
        >
            <CircularProgress color="secondary" />
        </div>
    ) : null;
};
