import React from "react";
import { LoadingCustom } from "../../../components";
import { IHomePageProps } from "../model/IHomePageProps";
import { Banner } from "./Banner";
import Discount from "./Discount";
import "./HomePage.scss";
import SlideMovies from "./SlideMovies";
import { TrailerModal } from "./Trailer";

const HomePage: React.FC<IHomePageProps> = props => {
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
