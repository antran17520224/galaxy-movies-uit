import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import "./Seats.scss";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import imgBooked from "../../../../assets/images/poster-movies-home/5.jpg";

interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootButton: {
            color: "#fff",
            border: "1px solid #fff"
        },
        groupRoot: {
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
    const classes = useStyles();
    const handleFormat = (event, newSeats) => {
        setSeats(newSeats);
    };
    console.log("seats", seats);
    return (
        <div className="wrapper-seats-page">
            <Grid container>
                <Grid item xs={3}>
                    <div className="wrapper-movie-being-booked">
                        <div className="wrapper-image">
                            <img src={imgBooked} alt="img-movies" />
                        </div>
                        <div className="name-movie">Tiệc trăng máu</div>
                        <div className="name-theater">Rạp GM - Tân bình</div>
                        <div className="time-showing">17:50</div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="title-screen">Screen</div>
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
                            <Grid item xs={12}>
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
                                        disabled
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
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <ToggleButtonGroup
                                    value={seats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton value="B1" aria-label="B1">
                                        B1
                                    </ToggleButton>
                                    <ToggleButton value="B2" aria-label="B2">
                                        B2
                                    </ToggleButton>
                                    <ToggleButton value="B3" aria-label="B3">
                                        B3
                                    </ToggleButton>
                                    <ToggleButton value="B4" aria-label="B4">
                                        B4
                                    </ToggleButton>
                                    <ToggleButton value="B5" aria-label="B5">
                                        B5
                                    </ToggleButton>
                                    <ToggleButton value="B6" aria-label="B6">
                                        B6
                                    </ToggleButton>
                                    <ToggleButton value="B7" aria-label="B7">
                                        B7
                                    </ToggleButton>
                                    <ToggleButton value="B8" aria-label="B8">
                                        B8
                                    </ToggleButton>
                                    <ToggleButton value="B9" aria-label="B9">
                                        B9
                                    </ToggleButton>
                                    <ToggleButton value="B10" aria-label="B10">
                                        B10
                                    </ToggleButton>
                                    <ToggleButton value="B11" aria-label="B11">
                                        B11
                                    </ToggleButton>
                                    <ToggleButton value="B12" aria-label="B12">
                                        B12
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="wrapper-cart">
                                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
