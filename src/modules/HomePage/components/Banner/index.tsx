import React from "react";
import { Box, Button } from "@material-ui/core";
import TicketIcon from "../../../../components/Icons/TicketIcon";
import TheatersIcon from "@material-ui/icons/Theaters";
import { Link, RouteComponentProps } from "react-router-dom";
import { IHomePageProps } from "../../model/IHomePageProps";
import { HOME_PAGE_MODAL } from "../../model/IHomePageState";
import "./Banner.scss";
import bannerImage from "../../../../assets/images/banner.webp";

interface IProps extends RouteComponentProps, IHomePageProps {}

export const Banner: React.FC<IProps> = props => {
    return (
        <React.Fragment>
            <div className="wrapper-banner">
                <div className="wrapper-img">
                    <img src={bannerImage} alt="banner" />
                </div>

                <div className="content-banner">
                    <div className="title-banner">
                        <h1>Tiệc trăng máu</h1>
                        <p>
                            Trong buổi họp mặt của nhóm bạn thân, một thành viên
                            bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm
                            tăng tinh thần “đoàn kết”.
                        </p>
                    </div>
                    <div className="des-banner">
                        <span className="span1">2020</span>
                        <span className="span2">Comedy</span>
                        <span>1hr 55mins</span>
                    </div>
                    <div className="wrapper-button">
                        <Link to="/details">
                            <Button
                                variant="contained"
                                className="button-booking"
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
                                props.actions.toggleModal(
                                    HOME_PAGE_MODAL.TRAILER_MODAL
                                )
                            }
                        >
                            Trailer
                            <TheatersIcon style={{ marginLeft: "10px" }} />
                        </Button>
                    </div>
                </div>
                <Box className="maturity-rating">
                    <Box className="maturity-number">18+</Box>
                </Box>
                <div className="trailer-vignette"></div>
            </div>
        </React.Fragment>
    );
};
