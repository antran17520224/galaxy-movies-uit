import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Slider from "react-slick";
import { IHomePageProps } from '../model/IHomePageProps';
import './HomePageStyles.scss';
import { Banner } from './Banner';
interface IProps extends RouteComponentProps, IHomePageProps { }

const HomePage: React.FC<IProps> = (props) => {

    const customPaging = (i) => {
        let test = [
            "https://demo2.madrasthemes.com/vodi-html/assets/img/204x120/img3.jpg",
            "https://demo2.madrasthemes.com/vodi-html/assets/img/204x120/img3.jpg",
            "https://demo2.madrasthemes.com/vodi-html/assets/img/204x120/img3.jpg"
        ];
        return (
            <div className="wrapper-dots">
                <a>
                    <img src={`${test[0]}`} alt="test" />
                </a>
            </div>
        )
    }
    const sliderProps = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
        customPaging: customPaging,

    };
    return (
        <React.Fragment>
            <Slider {...sliderProps} >
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
            </Slider>


        </React.Fragment>
    )
}

export default HomePage;