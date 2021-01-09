import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";
import { ITicketingProps } from "../../../model/ITicketingProps";
import "./Seats.scss";

interface IProps extends ITicketingProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootButton: {
            color: "#fff",
            border: "1px solid #fff"
        },
        groupRoot: {
            margin: "0px auto",
            "& .Mui-disabled": {
                backgroundColor: "#505050",
                color: "#fff"
            },
            "& .Mui-selected": {
                backgroundColor: "#24baef",
                color: "#fff"
            },
            "& .Mui-selected:hover": {
                backgroundColor: "#24baef",
                color: "#fff"
            }
        },
        groupRootDes: {
            "& .Mui-disabled": {
                backgroundColor: "#505050",
                color: "#fff"
            }
        }
    })
);
export const Seats: React.FC<IProps> = props => {
    const [localSeat, setLocalSeat] = React.useState(() => []);
    const [currentPrice, setCurrentPrice] = React.useState<number>(95000);
    const [isShowButton, setIsShowButton] = React.useState(false);

    const classes = useStyles();
    
    const { seats } = props.store.TicketingPage;

    const handleChooseSeats = (event, newSeats) => {
        if (localSeat.length <= 9) {
            console.log("true");
            setLocalSeat(newSeats);
        }
    };
    console.log("seats", seats);
    React.useEffect(() => {
        if (localSeat.length > 0 && !isShowButton) {
            setIsShowButton(true);
            props.actions.showNextButton(true);
        }
        props.actions.handleChooseSeats({
            seats: localSeat
        });
        if (localSeat.length === 0) {
            setIsShowButton(false);
            props.actions.showNextButton(false);
        }
    }, [localSeat.length, isShowButton]);

    return (
        <React.Fragment>
            <div className="wrapper-seats-page">
                <div className="title-screen">
                    <h1>Screen</h1>
                </div>
                <div className="screen"></div>
                <div className="wrapper-description-seats">
                    <div className="checked">
                        <span className="icon-checked">A</span>
                        <span className="title-checked">Đang chọn</span>
                    </div>
                    <div className="empty">
                        <span className="icon-empty">A</span>
                        <span className="title-empty">Còn trống</span>
                    </div>
                    <div className="occupied">
                        <span className="icon-occupied">A</span>
                        <span className="title-occupied">Đã bán</span>
                    </div>
                </div>
                <div className="wrapper-seats">
                    <Grid container>
                        <Grid item xs={12} className="grid-item">
                            <ToggleButtonGroup
                                value={localSeat}
                                onChange={handleChooseSeats}
                                aria-label="text formatting"
                                classes={{
                                    root: classes.groupRoot
                                }}
                            >
                                <ToggleButton
                                    value="A1"
                                    aria-label="A1"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A1
                                </ToggleButton>
                                <ToggleButton
                                    value="A2"
                                    aria-label="A2"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A2
                                </ToggleButton>
                                <ToggleButton
                                    value="A3"
                                    aria-label="A3"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A3
                                </ToggleButton>
                                <ToggleButton
                                    value="A4"
                                    aria-label="A4"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A4
                                </ToggleButton>
                                <ToggleButton
                                    value="A5"
                                    aria-label="A5"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A5
                                </ToggleButton>
                                <ToggleButton
                                    value="A6"
                                    aria-label="A6"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A6
                                </ToggleButton>
                                <ToggleButton
                                    value="A7"
                                    aria-label="A7"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A7
                                </ToggleButton>
                                <ToggleButton
                                    value="A8"
                                    aria-label="A8"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A8
                                </ToggleButton>
                                <ToggleButton
                                    value="A9"
                                    aria-label="A9"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A9
                                </ToggleButton>
                                <ToggleButton
                                    value="A10"
                                    aria-label="A10"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A10
                                </ToggleButton>
                                <ToggleButton
                                    value="A11"
                                    aria-label="A11"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A11
                                </ToggleButton>
                                <ToggleButton
                                    value="A12"
                                    aria-label="A12"
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                >
                                    A12
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>

                    <div className="note">* Lưu ý bạn chỉ có thể chọn tối đa 10 ghế</div>
                </div>
            </div>
        </React.Fragment>
    );
};
