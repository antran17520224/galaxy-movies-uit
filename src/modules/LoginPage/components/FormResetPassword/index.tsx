import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { ILogInProps } from "../../model/ILoginProps";
import { MODAL_USER_LOGIN } from "../../model/ILoginState";
import "./styles.scss";
interface IProps extends RouteComponentProps, ILogInProps {}

interface IInput {
    password: string;
    confirmPassword: string;
    code: string;
}

export const FormResetPassword: React.FC<IProps> = props => {
    const { handleSubmit, register, errors, watch } = useForm();
    const [isShowPass, setShowPass] = React.useState(false);
    const [isShowConfirmPass, setShowConfirmPass] = React.useState(false);
    const password = React.useRef({});
    password.current = watch("password", "");
    const onSubmit = (data: IInput) => {
        const { password, confirmPassword, code } = data;
        props.actions.resetPassword({
            newPassword: password,
            confirmPassword,
            codeReset: code
        });
    };
    const { isToggleModalResetPassword } = props.store.LoginPage;
    return (
        <Dialog
            open={isToggleModalResetPassword}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Quên mật khẩu</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Vui lòng nhập email để tiến hành reset mật khẩu !
                </DialogContentText>
                <form
                    className="form-dialog"
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="code"
                        label="Code"
                        type="code"
                        fullWidth
                        name="code"
                        variant="outlined"
                        inputRef={register({
                            required: "Code không được bỏ trống"
                        })}
                    />
                    {errors.code && <p>{errors.code.message}</p>}
                    <FormControl
                        className="w-100"
                        margin="normal"
                        variant="outlined"
                    >
                        <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type={isShowPass ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPass(!isShowPass)}
                                        edge="end"
                                    >
                                        {isShowPass ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                            inputRef={register({
                                required: "Mật khẩu không được bỏ trống",
                                maxLength: {
                                    value: 30,
                                    message: "Mật khẩu không được quá 30 ký tự"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Mật khẩu ít nhất 8 ký tự"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i,
                                    message:
                                        "Mật khẩu phải chứa chữ hoa, chữ thường, ký tự đặc biệt và số"
                                }
                            })}
                        />
                    </FormControl>
                    {errors.password && <p>{errors.password.message}</p>}
                    <FormControl
                        variant="outlined"
                        className="w-100"
                        margin="normal"
                    >
                        <InputLabel htmlFor="confirmPassword">
                            Nhập lại mật khẩu
                        </InputLabel>
                        <OutlinedInput
                            id="confirmPassword"
                            name="confirmPassword"
                            type={isShowConfirmPass ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowConfirmPass(
                                                !isShowConfirmPass
                                            )
                                        }
                                        edge="end"
                                    >
                                        {isShowConfirmPass ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                            inputRef={register({
                                required:
                                    "Xác nhận mật khẩu không được bỏ trống",
                                validate: value =>
                                    value === password.current ||
                                    "Mật khẩu nhập lại không chính xác"
                            })}
                        />
                    </FormControl>
                    {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                    )}
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
                                    type: MODAL_USER_LOGIN.MODAL_RESET_PASSWORD
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
