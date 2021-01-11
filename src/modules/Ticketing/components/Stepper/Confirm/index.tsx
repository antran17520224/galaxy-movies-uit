import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { ITicketingProps } from "../../../model/ITicketingProps";
import "./Confirm.scss";

interface IProps extends ITicketingProps {}

export const ConfirmTicket: React.FC<IProps> = props => {
    const {
        linkPayment,
        seats,
        priceFood,
        quantityFood,
        foodRecords
    } = props.store.TicketingPage;
    const [temptFoodId, setFoodId] = React.useState([]);
    const [temptQuantityFood, setTemptQuantityFood] = React.useState([]);
    const { currentSession } = props.store.DetailPage;

    const { userInfo } = props.store.LoginPage;

    React.useEffect(() => {
        if (linkPayment) {
            window.location.href = `${linkPayment}`;
        }
        quantityFood.map((amount, index) => {
            if (amount !== 0) {
                temptFoodId.push(foodRecords[index]._id);
                setFoodId(temptFoodId);
                temptQuantityFood.push(amount);
                setTemptQuantityFood(temptQuantityFood);
            }
        });
        window.scroll(20, 0);
    }, [linkPayment]);
    console.log("temptFoodId", temptFoodId);
    console.log("temptQuantityFood", temptQuantityFood);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => {
        props.actions.confirmPayment({
            amount: currentSession.price * seats.length + priceFood,
            bankCode: "NCB",
            orderDescription: "test",
            orderType: "thanh toan"
        });
        if (temptFoodId.length > 0) {
            props.actions.createTicket({
                seatCodes: seats,
                sessionId: currentSession._id,
                totalPrice: currentSession.price * seats.length + priceFood,
                foodId: temptFoodId,
                quantityFood: temptQuantityFood
            });
        } else {
            props.actions.createTicket({
                seatCodes: seats,
                sessionId: currentSession._id,
                totalPrice: currentSession.price * seats.length + priceFood
            });
        }
    };
    return (
        <div className="wrapper-payment">
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: "30px"
                }}
            >
                Thông tin giỏ hàng
            </h1>
            <div className="wrapper-user-info">
                <span>Tên : {userInfo.fullName}</span>
                <span>Email : {userInfo.email}</span>
                <span>Số điện thoại : {userInfo.phone}</span>
            </div>

            <div className="button-payment">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControlLabel
                        control={<Checkbox value={true} color="primary" name="accept" />}
                        label="Tôi đồng ý điều khoản sử dụng"
                        inputRef={register({
                            required: "Bắt buộc"
                        })}
                    />
                    {errors.accept && <p>{errors.accept.message}</p>}
                    <Button
                        style={{
                            backgroundColor: "rgba(0,212,255,1)",
                            color: "#fff",
                            display: "block",
                            marginTop: "10px"
                        }}
                        variant="outlined"
                        type="submit"
                    >
                        Thanh toán
                    </Button>
                </form>
            </div>
        </div>
    );
};
