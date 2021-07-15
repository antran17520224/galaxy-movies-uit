import DateFnsUtils from '@date-io/date-fns';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Radio,
	RadioGroup,
	TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RouteComponentProps } from 'react-router-dom';
import { CustomButton } from '../../../../components';
import { ILogInProps } from '../../model/ILoginProps';
import { IRegister, MODAL_USER_LOGIN } from '../../model/ILoginState';

interface IProps extends RouteComponentProps, ILogInProps {}

const RegisterForm: React.FC<IProps> = (props) => {
	const [isShowPass, setShowPass] = React.useState(false);
	const [isShowConfirmPass, setShowConfirmPass] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
	const [gender, setGender] = React.useState('female');

	const { register, handleSubmit, errors, watch } = useForm<IRegister>();

	const password = React.useRef({});
	password.current = watch('password', '');

	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
	};

	const handleChangeGender = (event: any) => {
		setGender(event.target.value);
	};

	const onSubmit = (data: IRegister) => {
		const dataRegister = {
			...data,
			dateOfBirth: selectedDate.toISOString(),
			gender,
		};

		props.actions.toggleModal({
			type: MODAL_USER_LOGIN.MODAL_CONFIRM_REGISTER,
			data: dataRegister,
		});
	};

	const { isProcessing } = props.store.LoginPage;

	return (
		<React.Fragment>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					id="fullName"
					label="Họ Tên"
					variant="outlined"
					fullWidth
					name="fullName"
					inputRef={register({
						required: 'Họ và tên không được bỏ trống',
						maxLength: {
							value: 30,
							message: 'Họ tên không được quá 50 ký tự',
						},
						minLength: {
							value: 2,
							message: 'Họ tên ít nhất 2 ký tự',
						},
						pattern: {
							value: /^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+(?:\s[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+)+$/i,
							message: 'Họ và tên không hợp lệ',
						},
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
						required: 'Email không được bỏ trống',
						maxLength: {
							value: 30,
							message: 'Email không được quá 30 ký tự',
						},
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Email không hợp lệ',
						},
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
							required: 'Mật khẩu không được bỏ trống',
							maxLength: {
								value: 30,
								message: 'Mật khẩu không được quá 30 ký tự',
							},
							minLength: {
								value: 8,
								message: 'Mật khẩu ít nhất 8 ký tự',
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i,
								message:
									'Mật khẩu phải chứa chữ hoa, chữ thường, ký tự đặc biệt và số',
							},
						})}
					/>
				</FormControl>
				{errors.password && <p>{errors.password.message}</p>}
				<FormControl className="form-control text-field" variant="outlined">
					<InputLabel htmlFor="confirmPassword">Nhập lại mật khẩu</InputLabel>
					<OutlinedInput
						id="confirmPassword"
						name="confirmPassword"
						type={isShowConfirmPass ? 'text' : 'password'}
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
							required: 'Xác nhận mật khẩu không được bỏ trống',
							validate: (value: any) =>
								value === password.current || 'Mật khẩu nhập lại không chính xác',
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
								required: 'Số điện thoại không được bỏ trống',
								minLength: {
									value: 10,
									message: 'Số điện thoại ít nhất 10 ký tự',
								},
								pattern: {
									value: /[0-9]$/i,
									message: 'Số điện thoại không hợp lệ',
								},
							})}
						/>
						{errors.phone && <p>{errors.phone.message}</p>}
					</Grid>
					<Grid item xs={6}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								name="dateOfBirth"
								id="date-picker-dialog"
								label="Ngày sinh"
								format="dd/MM/yyyy"
								value={selectedDate}
								onChange={(selectedDate) => handleDateChange(selectedDate as Date)}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
								fullWidth
							/>
						</MuiPickersUtilsProvider>
					</Grid>
				</Grid>
				<TextField
					id="address"
					label="Địa chỉ"
					name="address"
					placeholder="Địa chỉ"
					multiline
					fullWidth
					variant="outlined"
					className="form-control"
					inputRef={register({
						required: 'Địa chỉ không được bỏ trống',
						maxLength: {
							value: 300,
							message: 'Địa chỉ không được quá 300 ký tự',
						},
					})}
				/>
				{errors.address && <p>{errors.address.message}</p>}
				<FormControl component="fieldset" className="form-control">
					<FormLabel component="legend">Giới tính</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="gender"
						value={gender}
						onChange={handleChangeGender}
						className="radio-group"
					>
						<FormControlLabel value="female" control={<Radio />} label="Nữ" />
						<FormControlLabel value="male" control={<Radio />} label="Nam" />
						<FormControlLabel value="other" control={<Radio />} label="Khác" />
					</RadioGroup>
				</FormControl>
				<CustomButton
					type="submit"
					fullWidth
					variant="contained"
					className="btn-login btn-register"
					label="Đăng ký"
				/>
			</form>
		</React.Fragment>
	);
};

export default RegisterForm;
