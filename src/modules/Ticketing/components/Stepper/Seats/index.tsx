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
            width: "50px",
            height: "48px"
        },
        groupRoot: {
            margin: "0px auto",
            "& .Mui-disabled": {
                backgroundColor: "#505050",
                color: "#fff",
                width: "50px",
                height: "48px"
            },
            "& .Mui-selected": {
                backgroundColor: "#24baef",
                color: "#fff",
                width: "50px",
                height: "48px"
            },
            "& .Mui-selected:hover": {
                backgroundColor: "#24baef",
                color: "#fff",
                width: "50px",
                height: "48px"
            }
        },
        groupRootDes: {
            "& .Mui-disabled": {
                backgroundColor: "#505050",
                color: "#fff",
                width: "50px",
                height: "48px"
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

    const { currentSession } = props.store.DetailPage;

    const handleChooseSeats = (event, newSeats) => {
        if (localSeat.length === 10) {
            if (newSeats.length < 10) {
                setLocalSeat(newSeats);
            } else {
                window.alert("Bạn chỉ có thể chọn tối đa 10 ghế !");
                const lastSeats = newSeats.pop();
                let temp = localSeat.filter(seat => {
                    return seat !== lastSeats;
                });
                setLocalSeat(temp);
            }
        }
        if (localSeat.length < 10) {
            setLocalSeat(newSeats);
        }
    };
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

    const renderSeats1 = () => {
        let xhtml = null;
        for (let i = 0; i < 12; i++) {}
    };

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
                    <ToggleButtonGroup
                        value={localSeat}
                        onChange={handleChooseSeats}
                        aria-label="text formatting"
                        classes={{
                            root: classes.groupRoot
                        }}
                        style={{
                            display: "inline"
                        }}
                    >
                        {currentSession.theaters_id.seats.map((seat, index) => {
                            return (
                                <ToggleButton
                                    key={index}
                                    value={seat.code}
                                    aria-label={seat.code}
                                    classes={{
                                        root: classes.rootButton
                                    }}
                                    disabled={seat.isBooked === 1 ? true : false}
                                    style={{
                                        border: "1px solid #fff",
                                        borderRadius: "none",
                                        marginLeft: "0"
                                    }}
                                >
                                    {seat.code}
                                </ToggleButton>
                            );
                        })}
                    </ToggleButtonGroup>

                    <div className="note">* Lưu ý bạn chỉ có thể chọn tối đa 10 ghế</div>
                </div>
            </div>
        </React.Fragment>
    );
};
