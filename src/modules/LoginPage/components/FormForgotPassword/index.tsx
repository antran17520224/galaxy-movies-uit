import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { ILogInProps } from "../../model/ILoginProps";
import { MODAL_USER_LOGIN } from "../../model/ILoginState";

interface IProps extends RouteComponentProps, ILogInProps {}

interface IInput {
    email: string;
}

export const FormForgotPassword: React.FC<IProps> = props => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data: IInput) => {
        const { email } = data;
        props.actions.sentMailForgot({ email });
    };
    const { isToggleModalForgotPassword } = props.store.LoginPage;
    return (
        <Dialog
            open={isToggleModalForgotPassword}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Quên mật khẩu</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Vui lòng nhập email để tiến hành reset mật khẩu !
                    <br />
                    Chúng tôi sẽ gửi mã để xác nhận để tiền hành reset mật khẩu !
                </DialogContentText>
                <form className="form-dialog" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="text"
                        fullWidth
                        name="email"
                        inputRef={register({
                            required: "Email không được bỏ trống",
                            maxLength: {
                                value: 30,
                                message: "Email không được quá 30 ký tự"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Email không hợp lệ"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "15px"
                        }}
                    >
                        <Button
                            onClick={() => {
                                props.actions.toggleModal({
                                    type: MODAL_USER_LOGIN.MODAL_FORGOT_PASSWORD
                                });
                            }}
                            variant="contained"
                            style={{
                                margin: "0px 13px"
                            }}
                        >
                            Từ chối
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            Đồng ý
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
