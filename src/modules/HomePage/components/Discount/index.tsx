import React, { Component } from "react";
import Slider from "react-slick";
import promotion1 from '../../../../assets/images/img-promotion/promotion-1.jpg';
import promotion2 from '../../../../assets/images/img-promotion/promotion-2.jpg';
import promotion3 from '../../../../assets/images/img-promotion/promotion-3.jpg';
import promotion4 from '../../../../assets/images/img-promotion/promotion-4.jpg';
import './Discount.scss';
interface IProps {}

const Discount: React.FC<IProps> = props => {
    const slideProps = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, 
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            
        ]
    };

    return (
        <React.Fragment>
            <div className="wrapper-discount-promotion">
                <h1 className="discount-header">Khuyến mãi</h1>
                <Slider {...slideProps}>
                    <div className="wrapper-image-promotion">
                        <img src={promotion1} alt="img-promotion"/>
                    </div>
                    <div className="wrapper-image-promotion">
                        <img src={promotion2} alt="img-promotion"/>
                    </div>
                    <div className="wrapper-image-promotion">
                        <img src={promotion3} alt="img-promotion"/>
                    </div>
                    <div className="wrapper-image-promotion">
                        <img src={promotion4} alt="img-promotion"/>
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    );
};

export default Discount;
