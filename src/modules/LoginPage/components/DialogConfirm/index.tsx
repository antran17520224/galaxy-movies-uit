import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { URL_CINEMA } from '../../../../common';
import { ILogInProps } from '../../model/ILoginProps';
import { IRegister, MODAL_USER_LOGIN } from '../../model/ILoginState';

interface IProps extends RouteComponentProps, ILogInProps {}

export const DialogConfirm: React.FC<IProps> = (props) => {
	const { isToggleModalConfirmRegister, dataToRegister } = props.store.LoginPage;
	const onAcceptCreate = () => {
		props.actions.toggleModal({
			type: MODAL_USER_LOGIN.MODAL_CONFIRM_REGISTER,
		});
		props.actions.userRegister(dataToRegister as IRegister);
	};

	return (
		<Dialog
			open={isToggleModalConfirmRegister}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{`${URL_CINEMA} says`}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Vui lòng xác nhận <strong>{dataToRegister?.email}</strong> là email của bạn.
					Chúng tôi sẽ đoạn gửi mã xác nhận đến địa chỉ email này
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() =>
						props.actions.toggleModal({
							type: MODAL_USER_LOGIN.MODAL_CONFIRM_REGISTER,
						})
					}
					variant="contained"
				>
					Từ chối
				</Button>
				<Button onClick={onAcceptCreate} autoFocus variant="contained" color="primary">
					Chấp nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
};
