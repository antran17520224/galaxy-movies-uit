import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Slider from "react-slick";
import { IHomePageProps } from "../model/IHomePageProps";
import "./HomePage.scss";
import { Banner } from "./Banner";
import { TrailerModal } from "./Trailer";
import SlideMovies from "./SlideMovies";
import Discount from "./Discount";
import { LoadingCustom } from "../../../components";

interface IProps extends RouteComponentProps, IHomePageProps {}

const HomePage: React.FC<IProps> = props => {
    const { isProcessing } = props.store.HomePage;
    return (
        <React.Fragment>
            <LoadingCustom spinning={isProcessing} opacity={1} />
            <Banner {...props} />
            <div className="w-100">
                <TrailerModal {...props} />
            </div>
            <SlideMovies {...props} />
            <Discount {...props} />
            
        </React.Fragment>
    );
};

export default HomePage;
