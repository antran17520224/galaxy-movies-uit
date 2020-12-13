import React from 'react';
import { Button } from '@material-ui/core';
import TicketIcon from '../../../../components/Icons/TicketIcon';
import TheatersIcon from '@material-ui/icons/Theaters';
import { RouteComponentProps } from 'react-router-dom';
import { IHomePageProps } from '../../model/IHomePageProps';
import { HOME_PAGE_MODAL } from '../../model/IHomePageState';
import './Banner.scss';


interface IProps extends RouteComponentProps, IHomePageProps { }


export const Banner: React.FC<IProps> = (props) => {

    // const renderTest = (test :Array<any>) => {
    //     return(
    //         test.map(item => {
    //             return (
    //             <h1>{item}</h1>
    //             )
    //         })
    //     )
    // }
    return (
        <React.Fragment>
            <div className="wrapper-banner">
                <div className="wrapper-img">
                    <img src="https://demo2.madrasthemes.com/vodi-html/assets/img/1920x676/img3.jpg" alt="banner" />
                </div>
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
                        <Button
                            variant="contained"
                            className="button-trailer"
                            onClick={() => props.actions.toggleModal(HOME_PAGE_MODAL.TRAILER_MODAL)}
                        >
                            Trailer
                        <TheatersIcon style={{ marginLeft: '10px' }} />
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}