import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    Link
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { CustomButton } from "../../../../components";
import { ILogInProps } from "../../model/ILoginProps";
import { MODAL_USER_LOGIN } from "../../model/ILoginState";

// import FacebookLogin from 'react-facebook-login';

interface IProps extends RouteComponentProps, ILogInProps {}
interface Inputs {
    email: string;
    password: string;
    remember: boolean;
}

const LoginForm: React.FC<IProps> = props => {
    const [isShowPass, setShowPass] = React.useState(false);

    const { register, handleSubmit, errors } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        const { email, password,remember } = data;
        props.actions.userLogin({
            email,
            password,
            remember : remember ? true : false 
        });
    };
    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    inputRef={register({
                        required: "Bạn phải nhập Email",
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
                <FormControl
                    className="form-control text-field"
                    variant="outlined"
                >
                    <InputLabel htmlFor="password">Password</InputLabel>
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
                            required: "Bạn phải nhập mật khẩu",
                        })}
                    />
                </FormControl>
                {errors.password && <p>{errors.password.message}</p>}
                <FormControlLabel
                    className="mt-8"
                    control={
                        <Checkbox
                            value={true}
                            color="primary"
                            name="remember"
                        />
                    }
                    label="Nhớ tài khoản"
                    inputRef={register()}
                />
                <CustomButton
                    type="submit"
                    label="Đăng nhập"
                    variant="contained"
                    // loading={isLoading}
                    color="primary"
                    fullWidth
                    className="btn-login btn-normal"
                />
            </form>
            <Box className="forgot-pass">
                <Link
                    onClick={() =>
                        props.actions.toggleModal({
                            type: MODAL_USER_LOGIN.MODAL_FORGOT_PASSWORD
                        })
                    }
                    variant="body2"
                    style={{
                        cursor : 'pointer',
                    }}
                >
                    Quên mật khẩu
                </Link>
            </Box>
        </React.Fragment>
    );
};

export default LoginForm;
