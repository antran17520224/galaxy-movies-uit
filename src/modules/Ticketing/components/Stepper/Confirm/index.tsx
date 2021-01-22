import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { ITicketingProps } from "../../../model/ITicketingProps";
import "./Confirm.scss";

export const ConfirmTicket: React.FC<ITicketingProps> = props => {
    const {
        linkPayment,
        seats,
        priceFood,
        quantityFood,
        foodRecords
    } = props.store.TicketingPage;
    const [temptFoodId, setFoodId] = React.useState<string[]>([]);
    const [temptQuantityFood, setTemptQuantityFood] = React.useState<number[]>([]);

    const { currentSession } = props.store.DetailPage;
    const { userInfo } = props.store.LoginPage;
    const { isCreateTicketSuccess, idTicket } = props.store.TicketingPage;

    React.useEffect(() => {
        quantityFood.map((amount, index) => {
            if (amount !== 0) {
                temptFoodId.push(foodRecords[index]._id);
                setFoodId(temptFoodId);
                temptQuantityFood.push(amount);
                setTemptQuantityFood(temptQuantityFood);
            }
        });
        window.scroll(20, 0);
        if (!userInfo) {
            window.location.assign("http://localhost:4050/");
        }
        if (isCreateTicketSuccess) {
            props.actions.confirmPayment({
                amount: currentSession?.price as number * seats.length + priceFood,
                bankCode: "NCB",
                orderDescription: idTicket,
                orderType: "test",
                orderInfo: "test"
            });
        }
    }, [linkPayment, isCreateTicketSuccess]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => {
        if (temptFoodId.length > 0) {
            props.actions.createTicket({
                seatCodes: seats,
                sessionId: currentSession?._id as string,
                totalPrice: currentSession?.price as number * seats.length + priceFood,
                foodId: temptFoodId,
                quantityFood: temptQuantityFood,
                movieId: currentSession?.movie_id._id as string,
                theatersId: currentSession?.theaters_id._id as string,
                cinemaId: currentSession?.cinema_id._id as string
            });
        } else {
            props.actions.createTicket({
                seatCodes: seats,
                sessionId: currentSession?._id  as string,
                totalPrice: currentSession?.price  as number * seats.length + priceFood,
                movieId: currentSession?.movie_id._id  as string,
                theatersId: currentSession?.theaters_id._id  as string,
                cinemaId: currentSession?.cinema_id._id  as string
            });
        }
    };
    return (
        userInfo && (
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
                            control={
                                <Checkbox value={true} color="primary" name="accept" />
                            }
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
        )
    );
};
