import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './Trailer.scss';
import { RouteComponentProps } from 'react-router-dom';
import { IHomePageProps } from '../../model/IHomePageProps';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { HOME_PAGE_MODAL } from '../../model/IHomePageState';
import YouTube from 'react-youtube';

interface IProps extends RouteComponentProps, IHomePageProps { }


export const TrailerModal: React.FC<IProps> = (props: IProps) => {
    const [open, setOpen] = React.useState(false);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const videoOnPlay = (e) => {
        // e.target.pauseVideo();
        console.log("event Play", e)
    }

    const {
        isShowTrailerModal
    } = props.store.HomePage;

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="trailer-modal"
                open={isShowTrailerModal}
                onClose={() => props.actions.toggleModal(HOME_PAGE_MODAL.TRAILER_MODAL)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isShowTrailerModal}>
                    <YouTube
                        className="youtube-iframe"
                        videoId="wXUdkQ0XiNA"
                        opts={{
                            playerVars: {
                                autoplay: 1,
                            }
                        }}
                        onPlay={videoOnPlay}
                    />
                </Fade>
            </Modal>
        </div>
    );
}