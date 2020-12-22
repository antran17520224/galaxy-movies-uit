import React from "react";
import foodsImg1 from "../../../../../assets/images/foods/1.png";
import foodsImg2 from "../../../../../assets/images/foods/2.png";
import foodsImg3 from "../../../../../assets/images/foods/3.png";
import foodsImg4 from "../../../../../assets/images/foods/4.png";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./Food.scss";
interface IProps {}

export const Foods: React.FC<IProps> = props => {
    const [amountOfFoods, setAmountOfFoods] = React.useState(0);
    React.useEffect(() => {}, [amountOfFoods]);
    const handleIncreaseAmount = () => {
        if (amountOfFoods < 4) {
            setAmountOfFoods(amountOfFoods + 1);
        }
    };
    const handleDecreaseAmount = () => {
        if (amountOfFoods <= 4 && amountOfFoods > 0) {
            setAmountOfFoods(amountOfFoods - 1);
        }
    };
    return (
        <React.Fragment>
            <div className="wrapper-foods">
                <div className="foods">
                    <div className="img-food">
                        <img src={foodsImg1} alt="foods" />
                    </div>
                    <div className="wrapper-foods-name">
                        <h2 className="name">JUNGLE BROWN COMBO</h2>
                        <div className="description">
                            1 bình Jungle Brown + 1 nước + 1 bắp Caramel và
                            Chocolate
                        </div>
                        <div className="note">
                            ***Nhận trong ngày xem phim***
                        </div>
                        <div className="price">
                            Giá : <span> 230000 đ</span>
                        </div>
                    </div>
                    <div className="wrapper-button">
                        <span className="add">
                            <AddIcon onClick={handleIncreaseAmount} />
                        </span>
                        <span className="amount">{amountOfFoods}</span>
                        <span className="sub">
                            <RemoveIcon onClick={handleDecreaseAmount} />
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
