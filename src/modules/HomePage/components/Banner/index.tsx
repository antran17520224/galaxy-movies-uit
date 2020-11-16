import React from 'react';
import { Button } from '@material-ui/core';
import TicketIcon from '../../../../components/Icons/TicketIcon';
import TheatersIcon from '@material-ui/icons/Theaters';
export const Banner: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <div className="wrapper-banner">
                <img src="https://demo2.madrasthemes.com/vodi-html/assets/img/1920x676/img3.jpg" alt="banner" />
                <div className="content-banner">
                    <div className="title-banner">
                        <h1>Tiệc trăng máu</h1>
                    </div>
                    <div className="des-banner">
                        <span className="span1">2020</span>
                        <span className="span2">Comedy</span>
                        <span>1hr 55mins</span>

                    </div>
                    <div className="wrapper-button">
                        <Button variant="contained" className="button-booking">
                            Đặt vé
                                <span style={{ marginLeft: '14px' }} >
                                <TicketIcon />
                            </span>
                        </Button>
                        <Button variant="contained" className="button-trailer">
                            Trailer
                        <TheatersIcon style={{ marginLeft: '10px' }} />
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}