import {
    Avatar,
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import clsx from 'classnames';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, RouteComponentProps } from 'react-router-dom';
import { CustomButton } from '../../../components';
import { ILogInProps } from '../model/ILoginProps';
import useStyles from './styles';
import './LoginPage.scss';
interface IProps extends RouteComponentProps, ILogInProps { }
interface Inputs {
    email: string,
    password: string,
    remember: boolean,
}

const LoginPage: React.FC<IProps> = (props) => {

    const [isShowPass, setShowPass] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false)
    const { register, handleSubmit, errors } = useForm<Inputs>();

    const classes = useStyles();

    const onSubmit = (data: Inputs) => {
        console.log(data);
    }

    return (
        <React.Fragment>
            <div className="wrapper-login-page">
                <div className="wrapper-form">
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                        </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
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
                        <FormControl className={clsx(classes.textField, classes.marginTop)} variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={isShowPass ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPass(!isShowPass)}
                                            edge="end"
                                        >
                                            {isShowPass ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                                inputRef={register({
                                    required: "Bạn phải nhập mật khẩu",
                                    maxLength: {
                                        value: 20,
                                        message: 'Mật khẩu phải ít hơn 20 ký tự'
                                    }
                                })}
                            />
                        </FormControl>
                        {errors.password && <p>{errors.password.message}</p>}
                        <FormControlLabel
                            className={classes.marginTop}
                            control={<Checkbox value={true} color="primary" name="remember" />}
                            label="Nhớ tài khoản"
                            inputRef={register()}
                        />
                        <CustomButton
                            type="submit"
                            label="Đăng nhập"
                            variant="contained"
                            loading={isLoading}
                            color="primary"
                            fullWidth
                            className={clsx(classes.submit, classes.textButton)}
                        />

                        <CustomButton
                            type="submit"
                            // loading={isLoading}
                            fullWidth
                            variant="contained"
                            className={clsx(classes.submit, classes.colorButtonFaceBook, classes.textButton)}
                            label="Facebook"
                        />
                        <CustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={clsx(classes.submit, classes.colorButtonGoogle, classes.textButton)}
                            label="Google"
                        />

                    </form>
                    <Box className={classes.forgotPassword}>
                        <Typography onClick={() => { }} >
                            Quên mật khẩu
                        </Typography>
                    </Box>
                    <Divider style={{
                        marginTop: '10px',
                        width: '100%'
                    }} />
                    <Box className="text-align-center">
                        <CustomButton
                            fullWidth
                            variant="contained"
                            className={clsx(classes.submit, classes.createAccount, classes.textButton)}
                            label="Tạo tài khoản"
                        />
                    </Box>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;