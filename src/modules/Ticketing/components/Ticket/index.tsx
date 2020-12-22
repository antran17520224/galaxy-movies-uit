import { Grid } from "@material-ui/core";
import React from "react";
import imgBooked from "../../../../assets/images/poster-movies-home/5.jpg";
import "./Ticket.scss";
interface IProps {}

export const Ticket: React.FC<IProps> = props => {
    const [seats, setSeats] = React.useState(() => ["A1,A2,A3"]);
    const [currentPrice, setCurrentPrice] = React.useState<number>(95000);

    return (
        <React.Fragment>
            <Grid container className="wrapper-ticket">
                <div className="bg-top-ticket"></div>
                    <Grid item xs={4} className="wrapper-movie-being-booked">
                        <div className="wrapper-image">
                            <img src={imgBooked} alt="img-movies" />
                        </div>
                    </Grid>
                    <Grid item xs={4} className="ticket-theater">
                        <div className="name-theater">
                            Tên rạp : <span>Rạp GM - Tân bình</span>
                        </div>
                        <div className="time-showing">
                            Suất chiếu : <span>17:50</span>
                        </div>
                        <div className="date-showing">
                            Ngày chiếu : <span>20/12/2020</span>
                        </div>
                    </Grid>
                    <Grid item xs={4} className="cart">
                        <div className="seat-picking">
                            Ghế đang chọn :
                            {seats.map((seat, index) => {
                                if (index === 0) {
                                    return (
                                        <span
                                            style={{
                                                marginLeft: "20px"
                                            }}
                                            key={index}
                                        >{`${seat}`}</span>
                                    );
                                } else {
                                    return (
                                        <span
                                            key={index}
                                        >{`,\xa0${seat} `}</span>
                                    );
                                }
                            })}
                        </div>
                        <div className="combo-food">
                            Combo food :
                            <span
                                style={{
                                    marginLeft: "20px"
                                }}
                            >
                                {new Intl.NumberFormat().format(
                                    currentPrice * seats.length
                                )}
                                đ
                            </span>
                        </div>
                        <div className="total-price">
                            Tổng tiền :
                            <span
                                style={{
                                    marginLeft: "20px"
                                }}
                            >
                                {new Intl.NumberFormat().format(
                                    currentPrice * seats.length
                                )}{" "}
                                đ
                            </span>
                        </div>
                    </Grid>
                <div className="bg-bottom-ticket"></div>
            </Grid>
        </React.Fragment>
    );
};
