import { Box, Button, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import bannerImage from "../../../assets/images/banner.webp";
import { IDetailsProps } from "../model/IDetailsProps";
import "./Details.scss";
import posterDetails from "../../../assets/images/poster-movies-details/details.jpg";
import TheatersIcon from "@material-ui/icons/Theaters";
import TicketIcon from "../../../components/Icons/TicketIcon";
import { DETAILS_MODAL } from "../model/IDetailsState";
import { TrailerModal } from "./Trailer";
import { ShowTimes } from "./ShowTimes";
interface IProps extends RouteComponentProps, IDetailsProps {}

const DetailsPage: React.FC<IProps> = props => {
    const scrollToRef = ref => window.scrollTo({
        behavior : 'smooth',
        top : ref.current.offsetTop,
        left : 0
    });

    const myRef = useRef();
    const executeScroll = () => scrollToRef(myRef);
    return (
        <React.Fragment>
            <div className="wrapper-details-page">
                <div className="wrapper-banner">
                    <div className="wrapper-img">
                        <img src={bannerImage} alt="banner" />
                    </div>

                    <Box className="maturity-rating">
                        <Box className="maturity-number">18+</Box>
                    </Box>
                    <div className="trailer-vignette"></div>
                </div>
                <div className="wrapper-details">
                    <Grid container className="wrapper-grid">
                        <Grid item xs={3} className="grid-image">
                            <div className="wrapper-details-image">
                                <img
                                    src={posterDetails}
                                    alt="khong loi thoat"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6} className="grid-description">
                            <div className="wrapper-details-description">
                                <div id="#name-movies"></div>
                                <h2>Tiệc trăng máu</h2>
                                <p>
                                    Trong buổi họp mặt của nhóm bạn thân, một
                                    thành viên bất ngờ đề xuất trò chơi chia sẻ
                                    điện thoại nhằm tăng tinh thần “đoàn kết”.
                                </p>
                                <div className="film-info">
                                    <ul>
                                        <li className="classify">
                                            <div>Phân loại</div>
                                            <div className="classify-details">
                                                C18 - Phim dành cho khán giả từ 18
                                                tuổi trở lên
                                            </div>
                                        </li>
                                        <li className="director">
                                            <div>Đạo diễn</div>
                                            <div>Trấn Thành</div>
                                        </li>
                                        <li>
                                            <div>Diễn viên</div>
                                            <div className="cast">
                                                Trấn Thành, Trường Giang, Ngô
                                                Kiến Huy,Thu Trang, Tiến
                                                Luật,...
                                            </div>
                                        </li>
                                        <li className="kind">
                                            <div>Thể loại</div>
                                            <div>
                                                Hành động, Hài hước, tâm lý,
                                                tình cảm
                                            </div>
                                        </li>

                                        <li className="launch">
                                            <div>Khởi chiếu</div>
                                            <div>20-11-2020</div>
                                        </li>
                                        <li className="time">
                                            <div>Thời lượng</div>
                                            <div>120 phút</div>
                                        </li>
                                        <li className="language">
                                            <div>Ngôn ngữ</div>
                                            <div>Phụ đề tiếng Việt</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wrapper-button">
                                    <Button
                                        variant="contained"
                                        className="button-booking"
                                        onClick={executeScroll}
                                    >
                                        Mua vé ngay
                                        <span style={{ marginLeft: "10px" }}>
                                            <TicketIcon />
                                        </span>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className="button-trailer"
                                        onClick={() =>
                                            props.actions.toggleModal({
                                                type:
                                                    DETAILS_MODAL.TRAILER_MODAL
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
                        </Grid>
                    </Grid>
                </div>
            </div>
            <TrailerModal {...props} />
            <div ref={myRef}></div>
            <ShowTimes {...props} />
        </React.Fragment>
    );
};

export default DetailsPage;
