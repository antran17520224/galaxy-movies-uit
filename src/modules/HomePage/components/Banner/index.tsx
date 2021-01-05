import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import TicketIcon from "../../../../components/Icons/TicketIcon";
import TheatersIcon from "@material-ui/icons/Theaters";
import { Link, RouteComponentProps } from "react-router-dom";
import { IHomePageProps } from "../../model/IHomePageProps";
import { HOME_PAGE_MODAL } from "../../model/IHomePageState";
import "./Banner.scss";
import bannerImage from "../../../../assets/images/banner.webp";
import moment from "moment";
interface IProps extends RouteComponentProps, IHomePageProps {}

export const Banner: React.FC<IProps> = props => {
    useEffect(() => {
        props.actions.getMoviesByStatus({
            status: "banner"
        });
    }, []);
    const { movieBanner } = props.store.HomePage;
    return (
        movieBanner !== null && (
            <React.Fragment>
                <div className="wrapper-banner">
                    <div className="wrapper-img">
                        {/* <img src={movieBanner.bigImage} alt="banner" /> */}
                        <img src={bannerImage} alt="banner" />
                    </div>

                    <div className="content-banner">
                        <div className="title-banner">
                            <h1>{movieBanner.name}</h1>
                            <p>{movieBanner.description}</p>
                        </div>
                        <div className="des-banner">
                            <span className="span1">
                                {moment(movieBanner.launchDate).format("YYYY")}
                            </span>
                            <span className="span2">{movieBanner.genre}</span>
                            <span>
                                {Math.floor(parseInt(movieBanner.time) / 60)}hr{" "}
                                {parseInt(movieBanner.time) % 60}mins
                            </span>
                        </div>
                        <div className="wrapper-button">
                            <Link to={`/details/${movieBanner.name}`}>
                                <Button
                                    variant="contained"
                                    className="button-booking"
                                    onClick={()=> {
                                        props.actions.handleCurrentMovie({
                                            currentMovie : movieBanner
                                        })
                                    }}
                                >
                                    Đặt vé
                                    <span style={{ marginLeft: "14px" }}>
                                        <TicketIcon />
                                    </span>
                                </Button>
                            </Link>

                            <Button
                                variant="contained"
                                className="button-trailer"
                                onClick={() =>
                                    props.actions.toggleModal({
                                        type : HOME_PAGE_MODAL.TRAILER_MODAL,
                                        code : movieBanner.trailer
                                    })
                                }
                            >
                                Trailer
                                <TheatersIcon style={{ marginLeft: "10px" }} />
                            </Button>
                        </div>
                    </div>
                    <Box className="maturity-rating">
                        <Box className="maturity-number">
                            {movieBanner.maturity}+
                        </Box>
                    </Box>
                    <div className="trailer-vignette"></div>
                </div>
            </React.Fragment>
        )
    );
};
