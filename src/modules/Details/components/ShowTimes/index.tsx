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
import { DETAILS_MODAL } from "../../model/IDetailsState";

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
    const { currentMovie } = props.store.HomePage;
    const { sessionRecords } = props.store.DetailPage;
    const [arrayDate, setArrayDate] = React.useState<any[]>([]);
    const [arrayDayAndMonth, setArrayDayAndMonth] = React.useState<any[]>([]);
    const [isLoadDate, setIsLoadDate] = React.useState(true);
    const [arrayIndexTabPanel, setIndexTabPanel] = React.useState([]);
    const [load, setLoad] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        if (isLoadDate) {
            for (let i = 0; i < 14; i++) {
                arrayDate.push(moment().add(i, "days").format("dddd"));
                arrayDayAndMonth.push(
                    moment().add(i, "days").format("L").slice(0, -5).replace("/", "-")
                );
                setArrayDate(arrayDate);
                setArrayDayAndMonth(arrayDayAndMonth);
                if (i === 13) {
                    setIsLoadDate(false);
                }
            }
            props.actions.getSessionByMovieId({
                movieId: currentMovie._id
            });
        }
        if (sessionRecords.length > 0) {
            sessionRecords.map((session, index) => {
                console.log('date showing',moment(session.date).format("L").slice(0, -5).replace("/", "-"))
                arrayDayAndMonth.map((day, index) => {
                    if (
                        day ===
                        moment(session.date).format("L").slice(0, -5).replace("/", "-")
                    ) {
                        arrayIndexTabPanel.push(index);
                        setIndexTabPanel(arrayIndexTabPanel);
                    }
                });
            });
            setLoad(true);
        }
    }, [sessionRecords.length, isLoadDate,load]);

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
                        {arrayIndexTabPanel.length > 0 &&
                            sessionRecords.map((session, index) => {
                                return (
                                    <TabPanel
                                        key={index}
                                        value={value}
                                        index={arrayIndexTabPanel[index]}
                                    >
                                        <div className="wrapper-list-showtimes">
                                            <Grid container className="wrapper-showtime">
                                                <Grid
                                                    item
                                                    lg={3}
                                                    xs={8}
                                                    className="theater"
                                                >
                                                    <div className="text">
                                                        <h2 className="theater-name">
                                                            {
                                                                session.cinema_id
                                                                    .cinema_Name
                                                            }
                                                        </h2>
                                                        <p className="theater-location">
                                                            {session.cinema_id.address}
                                                        </p>
                                                    </div>

                                                    <div className="wrapper-button-location">
                                                        <Button
                                                            variant="contained"
                                                            className="button-location"
                                                            onClick={() => {
                                                                props.actions.toggleModal({
                                                                    type : DETAILS_MODAL.MAP_MODAL,
                                                                    lat : 10.880372439554417,
                                                                    long :106.8063153318776
                                                                })
                                                            }}
                                                        >
                                                            <LocationOnIcon /> Xem vị trí
                                                        </Button>
                                                    </div>
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={1}
                                                    xs={1}
                                                    className="class-and-theater"
                                                >
                                                    <>
                                                        <span className="theater-name">{session.theaters_id.theaters_Name}</span>
                                                        <span className="classify">{currentMovie.maturity}+</span>
                                                    </>
                                                    
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={6}
                                                    xs={12}
                                                    className="wrapper-time"
                                                >
                                                    <div className="wrapper-button-time">
                                                        <Link to={`/ticketing/${session.movie_id.name}/${session.theaters_id.theaters_Name}/${session.date}`}>
                                                            <Button
                                                                variant="outlined"
                                                                className="button-time"
                                                            >
                                                                {session.time}
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </TabPanel>
                                );
                            })}
                    </AppBar>
                </div>
            </div>
        </React.Fragment>
    );
};
