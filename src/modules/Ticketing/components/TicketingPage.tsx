import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Ticketing.scss";
import { ITicketingProps } from "../model/ITicketingProps";
import { CustomizedSteppers } from "./Stepper";

interface IProps extends RouteComponentProps, ITicketingProps {}

const TicketingPage: React.FC<IProps> = props => {
    return (
        <React.Fragment>
            <div className="wrapper-ticketing-page">
                <CustomizedSteppers {...props} />
            </div>
        </React.Fragment>
    );
};

export default TicketingPage;
