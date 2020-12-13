import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import { useForm } from "react-hook-form";
import { RouteComponentProps } from 'react-router-dom';
import { CustomButton } from '../../../../components';
import { ILogInProps } from '../../model/ILoginProps';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

// import FacebookLogin from 'react-facebook-login';


interface IProps extends RouteComponentProps, ILogInProps { }
interface Inputs {
    fullName: string,
    phone: string,
    dateOfBirth: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const RegisterForm: React.FC<IProps> = (props) => {

    const [isShowPass, setShowPass] = React.useState(false);
    const [isShowConfirmPass, setShowConfirmPass] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>();


    const { register, handleSubmit, errors, watch } = useForm<Inputs>();
    const password = React.useRef({});
    password.current = watch("password", "");

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const onSubmit = (data: Inputs) => {
        console.log(data);
    }
    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                <TextField
                    id="fullName"
                    label="Họ Tên"
                    variant="outlined"
                    fullWidth
                    name="fullName"
                    inputRef={register({
                        required: "Bạn phải nhập họ tên",
                        maxLength: {
                            value: 30,
                            message: "Họ tên không được quá 50 ký tự"
                        },
                        minLength: {
                            value: 2,
                            message: "Họ tên ít nhất 2 ký tự"
                        },
                        pattern: {
                            value: /^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+(?:\s[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+)+$/i,
                            message: "Họ tên không hợp lệ"
                        }
                    })}
                />
                {errors.fullName && <p>{errors.fullName.message}</p>}
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    className="form-control"
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
                <FormControl className="form-control text-field" variant="outlined">
                    <InputLabel htmlFor="password">Mật khẩu</InputLabel>
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
                                value: 30,
                                message: 'Mật khẩu không được quá 30 ký tự'
                            },
                            minLength : {
                                value : 8,
                                message: 'Mật khẩu ít nhất 8 ký tự'
                            }
                        })}
                    />
                </FormControl>
                {errors.password && <p>{errors.password.message}</p>}
                <FormControl className="form-control text-field" variant="outlined">
                    <InputLabel htmlFor="confirmPassword">Nhập lại mật khẩu</InputLabel>
                    <OutlinedInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type={isShowPass ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowConfirmPass(!isShowConfirmPass)}
                                    edge="end"
                                >
                                    {isShowConfirmPass ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                        inputRef={register({
                            required: "Bạn phải nhập xác nhận mật khẩu",
                            validate: value =>
                                value === password.current || "Mật khẩu nhập lại không chính xác"
                        })}
                    />
                </FormControl>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <Grid container className="form-control" spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="phone"
                            label="Số điện thoại"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            inputRef={register({
                                required: "Bạn phải nhập số điện thoại",
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại ít nhất 10 ký tự"
                                },
                                pattern: {
                                    value: /[0-9]$/i,
                                    message: "Số điện thoại không hợp lệ"
                                }

                            })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                id="date-picker-dialog"
                                label="Ngày sinh"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>


                {/* 
                add textField for address or not
                css background */}
                <CustomButton
                    type="submit"
                    // loading={isLoading}
                    fullWidth
                    variant="contained"
                    className="btn-login btn-register"
                    label="Đăng ký"
                />
            </form>
        </React.Fragment>
    )
}

export default RegisterForm;