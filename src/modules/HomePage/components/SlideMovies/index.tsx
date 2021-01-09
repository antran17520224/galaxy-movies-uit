import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TheatersIcon from "@material-ui/icons/Theaters";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import TicketIcon from "../../../../components/Icons/TicketIcon";
import { IHomePageProps } from "../../model/IHomePageProps";
import { HOME_PAGE_MODAL } from "../../model/IHomePageState";
import "./SlideMovies.scss";
interface IProps extends IHomePageProps {}

const SlideMovies: React.FC<IProps> = props => {
    const { movieShowing, movieComingSoon } = props.store.HomePage;

    React.useEffect(() => {
        props.actions.getMoviesByStatus({
            status: "showing"
        });
        props.actions.getMoviesByStatus({
            status: "coming-soon"
        });
    }, []);

    const slideProps = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className="wrapper-slider">
                <div id="showing" className="wrapper-showing">
                    <div className="header-title">Phim đang chiếu</div>
                    <Slider {...slideProps}>
                        {movieShowing.map((movie,index) => (
                            <div className="wrapper-movies" key={index}>
                                <div className="wrapper-poster">
                                    <img src={movie.smallImage} alt="Movies" />
                                    <div className="wrapper-button">
                                        <Link to={`/details/${movie.name}`}>
                                            <Button
                                                variant="contained"
                                                className="button-booking"
                                                onClick={() => {
                                                    props.actions.handleCurrentMovie({
                                                        currentMovie: movie
                                                    });
                                                }}
                                            >
                                                Đặt vé
                                                <span style={{ marginLeft: "10px" }}>
                                                    <TicketIcon />
                                                </span>
                                            </Button>
                                        </Link>

                                        <Button
                                            variant="contained"
                                            className="button-trailer"
                                            onClick={() =>
                                                props.actions.toggleModal({
                                                    type: HOME_PAGE_MODAL.TRAILER_MODAL,
                                                    code : movie.trailer
                                                })
                                            }
                                        >
                                            Trailer
                                            <TheatersIcon
                                                style={{
                                                    marginLeft: "5px",
                                                    fontSize: "18px"
                                                }}
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <div className="wrapper-description">
                                    <div className="des-k-y-m">
                                        <span className="des-year">
                                            {moment(movie.launchDate).format("YYYY")}
                                        </span>
                                        <span className="des-kind">{movie.genre}</span>
                                        <span className="des-maturity">
                                            {movie.maturity}+
                                        </span>
                                    </div>
                                    <h3 className="des-name">{movie.name}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="nextArrow">
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="prevArrow">
                        <ArrowBackIosIcon />
                    </div>
                </div>

                <div id="coming-soon" className="wrapper-showing">
                    <div className="header-title">Phim sắp chiếu</div>
                    <Slider {...slideProps}>
                        {movieComingSoon.map((movie,index) => (
                            <div className="wrapper-movies" key={index}>
                                <div className="wrapper-poster">
                                    <img src={movie.smallImage} alt="Movies" />
                                    <div className="wrapper-button">
                                        <Link to={`/details/${movie.name}`}>
                                            <Button
                                                variant="contained"
                                                className="button-booking"
                                                onClick={() => {
                                                    props.actions.handleCurrentMovie({
                                                        currentMovie: movie
                                                    });
                                                }}
                                            >
                                                Đặt vé
                                                <span style={{ marginLeft: "10px" }}>
                                                    <TicketIcon />
                                                </span>
                                            </Button>
                                        </Link>

                                        <Button
                                            variant="contained"
                                            className="button-trailer"
                                            onClick={() =>
                                                props.actions.toggleModal({
                                                    type: HOME_PAGE_MODAL.TRAILER_MODAL,
                                                    code : movie.trailer
                                                })
                                            }
                                        >
                                            Trailer
                                            <TheatersIcon
                                                style={{
                                                    marginLeft: "5px",
                                                    fontSize: "18px"
                                                }}
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <div className="wrapper-description">
                                    <div className="des-k-y-m">
                                        <span className="des-year">
                                            {moment(movie.launchDate).format("YYYY")}
                                        </span>
                                        <span className="des-kind">{movie.genre}</span>
                                        <span className="des-maturity">
                                            {movie.maturity}+
                                        </span>
                                    </div>
                                    <h3 className="des-name">{movie.name}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="nextArrow">
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="prevArrow">
                        <ArrowBackIosIcon />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SlideMovies;
