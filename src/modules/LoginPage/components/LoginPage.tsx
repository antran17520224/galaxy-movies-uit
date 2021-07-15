import { Avatar, Box } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { ILogInProps } from '../model/ILoginProps';
import { USER_PAGE_CLEAR } from '../model/ILoginState';
import { DialogConfirm } from './DialogConfirm';
import { FormActiveAccount } from './FormActiveAccount';
import LoginForm from './LoginForm';
import './LoginPage.scss';
import RegisterForm from './RegisterForm';
import { TabPanel } from '../../../components/TabPanel';
import { LoadingCustom } from '../../../components/Loading';
import { FormForgotPassword } from './FormForgotPassword';
import { FormResetPassword } from './FormResetPassword';

interface IProps extends RouteComponentProps, ILogInProps {}

const LoginPage: React.FC<IProps> = (props) => {
	const [tab, setTab] = React.useState(0);
	const { dataToRegister, isAccountActivated, accessToken, isProcessing } = props.store.LoginPage;
	const handleChange = (event: React.ChangeEvent<any>, tab: number) => {
		setTab(tab);
	};
	const history = useHistory();
	React.useEffect(() => {
		if (isAccountActivated) {
			setTab(0);
			props.actions.handleClear({
				type: USER_PAGE_CLEAR.CLEAR_STATE_ACTIVE,
			});
		}
		if (accessToken) {
			history.push('./');
		}
	}, [isAccountActivated, accessToken]);
	return (
		<React.Fragment>
			<div className="wrapper-login-page">
				<LoadingCustom spinning={isProcessing} text={'Loading'} />
				<div className="wrapper-form">
					<Avatar className="avatar">
						<LockOutlinedIcon />
					</Avatar>
					<Tabs
						value={tab}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChange}
						aria-label="disabled tabs example"
						className="wrapper-tabs"
					>
						<Tab label="Đăng nhập" />
						<Tab label="Đăng ký" />
					</Tabs>
					<TabPanel value={tab} index={0} className="w-100">
						<LoginForm {...props} />
					</TabPanel>
					<TabPanel value={tab} index={1}>
						<RegisterForm {...props} />
					</TabPanel>
				</div>
			</div>
			{dataToRegister && <DialogConfirm {...props} />}
			<FormActiveAccount {...props} />
			<FormForgotPassword {...props} />
			<FormResetPassword {...props} />
		</React.Fragment>
	);
};

export default LoginPage;
