import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import YouTube from "react-youtube";
import { IDetailsProps } from "../../model/IDetailsProps";
import { DETAILS_MODAL } from "../../model/IDetailsState";
import "./Trailer.scss";

interface IProps extends RouteComponentProps, IDetailsProps {}

export const TrailerModal: React.FC<IProps> = (props: IProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const videoOnPlay = e => {
        // e.target.pauseVideo();
        console.log("event Play", e);
    };

    const { isShowTrailer } = props.store.DetailPage;

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="trailer-modal"
                open={isShowTrailer}
                onClose={() =>
                    props.actions.toggleModal({
                        type : DETAILS_MODAL.TRAILER_MODAL
                    })
                }
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={isShowTrailer}>
                    <YouTube
                        className="youtube-iframe"
                        videoId="wXUdkQ0XiNA"
                        opts={{
                            playerVars: {
                                autoplay: 1
                            }
                        }}
                        onPlay={videoOnPlay}
                    />
                </Fade>
            </Modal>
        </div>
    );
};
