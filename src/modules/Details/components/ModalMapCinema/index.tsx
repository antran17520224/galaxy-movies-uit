import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IDetailsProps } from "../../model/IDetailsProps";
import { DETAILS_MODAL } from "../../model/IDetailsState";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { YOUR_KEY_APP } from "../../../../common";
interface IProps extends RouteComponentProps, IDetailsProps {}

export const ModalMapCinema: React.FC<IProps> = (props: IProps) => {
    const { toggleMapModal } = props.store.DetailPage;

    const coordinate = {
        lat: 10.880372439554417,
        lng: 106.8063153318776
    };
    const containerStyle = {
        width: "80%",
        height: "80%"
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="trailer-modal"
            open={toggleMapModal}
            onClose={() =>
                props.actions.toggleModal({
                    type: DETAILS_MODAL.MAP_MODAL,
                    long: 0,
                    lat: 0
                })
            }
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <>
                <Fade in={toggleMapModal}>
                    <LoadScript id="script-loader" googleMapsApiKey={YOUR_KEY_APP}>
                        <GoogleMap
                            center={coordinate}
                            zoom={10}
                            mapContainerStyle={containerStyle}
                        >
                            <Marker
                                position={{
                                    lat: 10.880372439554417,
                                    lng: 106.8063153318776
                                }}
                            />
                        </GoogleMap>
                    </LoadScript>
                </Fade>
            </>
        </Modal>
    );
};
