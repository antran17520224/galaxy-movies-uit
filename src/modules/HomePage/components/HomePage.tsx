import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Slider from "react-slick";
import { IHomePageProps } from '../model/IHomePageProps';
import './HomePage.scss';
import { Banner } from './Banner';
import { TrailerModal } from './Trailer';
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
        dots: false,
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
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
            </Slider>
            <Slider {...sliderProps} >
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
                <Banner {...props} />
            </Slider>
            <div style={{
                width: '100%'
            }}>
                <TrailerModal {...props} />

            </div>

        </React.Fragment>
    )
}

export default HomePage;