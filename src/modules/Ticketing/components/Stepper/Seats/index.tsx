import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import "./Seats.scss";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { AlertDialog } from "../../DialogWarning";
import { ITicketingProps } from "../../../model/ITicketingProps";

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
    const [seats, setSeats] = React.useState(() => []);
    const [currentPrice, setCurrentPrice] = React.useState<number>(95000);
    const [isMaxLengthOfSeat,setIsMaxLengthOfSeat] = React.useState(false);
    const classes = useStyles();
    const handleFormat = (event, newSeats) => {
        setSeats(newSeats);
        console.log('seats',seats)
    };
    React.useEffect(() => {
        if (seats.length > 0) {
            props.actions.showNextButton(true);
            if(seats.length === 10) {
                setIsMaxLengthOfSeat(true)
            } else {
                setIsMaxLengthOfSeat(false)
            }
        } else {
            props.actions.showNextButton(false);
        }
    }, [seats.length,isMaxLengthOfSeat]);

    return (
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
                            value={seats}
                            onChange={handleFormat}
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
                                disabled={isMaxLengthOfSeat}
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
                                disabled
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

                <div className="note">
                    * Lưu ý bạn chỉ có thể chọn tối đa 10 ghế
                </div>
            </div>
        </div>
    );
};
