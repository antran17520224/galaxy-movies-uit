import React from "react";
import "./SlideMovies.scss";
import Slider from "react-slick";
import poster1 from "../../../../assets/images/poster-movies-home/1.jpg";
import poster2 from "../../../../assets/images/poster-movies-home/2.jpg";
import poster3 from "../../../../assets/images/poster-movies-home/3.jpg";
import poster4 from "../../../../assets/images/poster-movies-home/4.png";
import poster5 from "../../../../assets/images/poster-movies-home/5.jpg";
import poster6 from "../../../../assets/images/poster-movies-home/6.jpg";
import poster7 from "../../../../assets/images/poster-movies-home/7.jpg";
import poster8 from "../../../../assets/images/poster-movies-home/8.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import TicketIcon from "../../../../components/Icons/TicketIcon";
import { HOME_PAGE_MODAL } from "../../model/IHomePageState";
import TheatersIcon from "@material-ui/icons/Theaters";
import { IHomePageProps } from "../../model/IHomePageProps";

interface IProps extends IHomePageProps {}

const SlideMovies: React.FC<IProps> = props => {
    const slideProps = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
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
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster1} alt="Movies" />
                                <div className="wrapper-button">
                                    <Button
                                        variant="contained"
                                        className="button-booking"
                                    >
                                        Đặt vé
                                        <span style={{ marginLeft: "10px" }}>
                                            <TicketIcon />
                                        </span>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className="button-trailer"
                                        onClick={() =>
                                            props.actions.toggleModal(
                                                HOME_PAGE_MODAL.TRAILER_MODAL
                                            )
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
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>

                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster2} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster3} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster4} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster5} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster6} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster7} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster8} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                    </Slider>
                    <div className="nextArrow">
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="prevArrow">
                        <ArrowBackIosIcon />
                    </div>
                </div>
                {/* next section */}
                <div id="top-rating" className="wrapper-showing">
                    <div className="header-title">Phim top rating</div>
                    <Slider {...slideProps}>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster1} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster3} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster5} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster7} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster2} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster4} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster6} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster8} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                    </Slider>
                    <div className="nextArrow">
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="prevArrow">
                        <ArrowBackIosIcon />
                    </div>
                </div>
                {/* next section */}
                <div id="coming-soon" className="wrapper-showing">
                    <div className="header-title">Phim sắp chiếu</div>
                    <Slider {...slideProps}>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster1} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster2} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster5} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster7} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster4} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster6} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster3} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
                        <div className="wrapper-movies">
                            <div className="wrapper-poster">
                                <img src={poster1} alt="Movies" />
                            </div>
                            <div className="wrapper-description">
                                <div className="des-k-y-m">
                                    <span className="des-year">2020</span>
                                    <span className="des-kind">Hành động</span>
                                    <span className="des-maturity">18+</span>
                                </div>
                                <h3 className="des-name">
                                    The Croods: A New Age
                                </h3>
                            </div>
                        </div>
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
