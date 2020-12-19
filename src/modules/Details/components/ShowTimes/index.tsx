import { Button, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import moment from "moment";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { TabPanel } from "../../../../components/TabPanel";
import { IDetailsProps } from "../../model/IDetailsProps";
import "./ShowTimes.scss";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface IProps extends RouteComponentProps, IDetailsProps {}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    selected: {
        color: "#00fbff"
    },
    root: {
        fontSize: "12px",
        fontWeight: 600,
        minWidth: "130px"
    },
    indicator: {
        backgroundColor: "#00fbff"
    },
    flexContainer: {
        display: "flex",
        justifyContent: "center"
    },
    rootTab: {}
}));
export const ShowTimes: React.FC<IProps> = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const [arrayDate, setArrayDate] = React.useState<any[]>([]);
    const [arrayDayAndMonth, setArrayDayAndMonth] = React.useState<any[]>([]);
    const [isLoadDate, setIsLoadDate] = React.useState(true);
    React.useEffect(() => {
        if (isLoadDate) {
            for (let i = 0; i < 14; i++) {
                arrayDate.push(moment().add(i, "days").format("dddd"));
                arrayDayAndMonth.push(
                    moment()
                        .add(i, "days")
                        .format("L")
                        .slice(0, -5)
                        .replace("/", "-")
                );
                setArrayDate(arrayDate);
                setArrayDayAndMonth(arrayDayAndMonth);
                if (i === 13) {
                    setIsLoadDate(false);
                }
            }
        }
    }, [arrayDate.length, arrayDayAndMonth.length]);
    return (
        <React.Fragment>
            <div className="wrapper-booking">
                <h2 className="title-showtimes">Lịch chiếu</h2>
                <div className="wrapper-tabs">
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            className="tabs"
                            indicatorColor="primary"
                            classes={{
                                indicator: classes.indicator
                            }}
                        >
                            {arrayDate.map((date, index) => {
                                return (
                                    <Tab
                                        key={index}
                                        label={
                                            <div className="date-tab">
                                                <p>{date}</p>
                                                <p>{arrayDayAndMonth[index]}</p>
                                            </div>
                                        }
                                        classes={{
                                            selected: classes.selected,
                                            root: classes.root
                                        }}
                                        {...a11yProps(index)}
                                    />
                                );
                            })}
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div className="wrapper-list-showtimes">
                            <Grid container className="wrapper-showtime">
                                <Grid item xs={3} className="theater">
                                    <div className="text">
                                        <h2 className="theater-name">
                                            BHD Star Bitexco
                                        </h2>
                                        <p className="theater-location">
                                            Tang 3 & 4, TTTM ICON 68, 2 Hai
                                            Trieu, Quan 1,TP.HCM
                                        </p>
                                    </div>

                                    <div className="wrapper-button-location">
                                        <Button
                                            variant="contained"
                                            className="button-location"
                                        >
                                            <LocationOnIcon /> Xem vị trí
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={1} className="classify">
                                    <div>
                                        <span>3+</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} className="wrapper-time">
                                    <div className="wrapper-button-time">
                                        <Link to="/ticketing">
                                            <Button
                                                variant="outlined"
                                                className="button-time"
                                            >
                                                17:05
                                            </Button>
                                        </Link> 
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container className="wrapper-showtime">
                                <Grid item xs={3} className="theater">
                                    <div className="text">
                                        <h2 className="theater-name">
                                            BHD Star Bitexco
                                        </h2>
                                        <p className="theater-location">
                                            Tang 3 & 4, TTTM ICON 68, 2 Hai
                                            Trieu, Quan 1,TP.HCM
                                        </p>
                                    </div>

                                    <div className="wrapper-button-location">
                                        <Button
                                            variant="contained"
                                            className="button-location"
                                        >
                                            <LocationOnIcon /> Xem vị trí
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={1} className="classify">
                                    <div>
                                        <span>3+</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} className="wrapper-time">
                                    <div className="wrapper-button-time">
                                        <Link to="/ticketing">
                                            <Button
                                                variant="outlined"
                                                className="button-time"
                                            >
                                                17:05
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container className="wrapper-showtime">
                                <Grid item xs={3} className="theater">
                                    <div className="text">
                                        <h2 className="theater-name">
                                            BHD Star Bitexco
                                        </h2>
                                        <p className="theater-location">
                                            Tang 3 & 4, TTTM ICON 68, 2 Hai
                                            Trieu, Quan 1,TP.HCM
                                        </p>
                                    </div>

                                    <div className="wrapper-button-location">
                                        <Button
                                            variant="contained"
                                            className="button-location"
                                        >
                                            <LocationOnIcon /> Xem vị trí
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={1} className="classify">
                                    <div>
                                        <span>3+</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} className="wrapper-time">
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                    <div className="wrapper-button-time">
                                        <Button
                                            variant="outlined"
                                            className="button-time"
                                        >
                                            17:05
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                </div>
            </div>
        </React.Fragment>
    );
};
