import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { IResultProps } from "../model/IResultProps";

interface IProps extends RouteComponentProps, IResultProps {}

const ResultPage: React.FC<IProps> = props => {
    
    
    return (
        <React.Fragment>
            <h1>Hello</h1>
        </React.Fragment>
    );
};

export default ResultPage;
