import { DialogContent } from "@material-ui/core";
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
    const { isShowTrailer, codeTrailer } = props.store.DetailPage;
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="trailer-modal"
            open={isShowTrailer}
            onClose={() =>
                props.actions.toggleModal({
                    type: DETAILS_MODAL.TRAILER_MODAL
                })
            }
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <>
                <Fade in={isShowTrailer}>
                    <YouTube
                        className="youtube-iframe"
                        videoId={codeTrailer}
                        opts={{
                            playerVars: {
                                autoplay: 1
                            }
                        }}
                    />
                </Fade>
            </>
        </Modal>
    );
};
