import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { IUserProps } from "../model/IUserProps";

interface IProps extends RouteComponentProps, IUserProps {}

const UserPage: React.FC<IProps> = props => {
    

    React.useEffect(() => {
        
    });
    return (
        <React.Fragment>
            <h1>Hello</h1>
        </React.Fragment>
    );
};

export default UserPage;
