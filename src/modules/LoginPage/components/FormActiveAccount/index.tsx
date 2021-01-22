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
import "./styles.scss";

interface IProps extends RouteComponentProps, ILogInProps {}

interface IInput {
    code: string;
}

export const FormActiveAccount: React.FC<IProps> = props => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data: IInput) => {
        const { code } = data;
        props.actions.activeAccount({
            code: code.trim()
        });
    };
    const { isToggleModalActiveAccount } = props.store.LoginPage;
    return (
        <Dialog
            open={isToggleModalActiveAccount}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Active</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Vui lòng dán đoạn mã tại email vào bên gửi để tiến hành kích
                    hoạt tài khoản !
                </DialogContentText>
                <form className="form-dialog" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="code"
                        label="Code"
                        type="code"
                        fullWidth
                        name="code"
                        inputRef={register({
                            required: "Code không được bỏ trống"
                        })}
                    />
                    {errors.code && <p>{errors.code.message}</p>}
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
                                    type: MODAL_USER_LOGIN.MODAL_ACTIVE_ACCOUNT
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
                            Đăng ký
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
