import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Slider from "react-slick";
import { IHomePageProps } from "../model/IHomePageProps";
import "./HomePage.scss";
import { Banner } from "./Banner";
import { TrailerModal } from "./Trailer";
import SlideMovies from "./SlideMovies";
import Discount from "./Discount";
interface IProps extends RouteComponentProps, IHomePageProps {}

const HomePage: React.FC<IProps> = props => {
    return (
        <React.Fragment>
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
