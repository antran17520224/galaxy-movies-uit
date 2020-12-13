import {
    Avatar,
    Box,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { useForm } from "react-hook-form";
import { RouteComponentProps } from 'react-router-dom';
import { LoadingScreen } from '../../../components';
import { ILogInProps } from '../model/ILoginProps';
import './LoginPage.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// import FacebookLogin from 'react-facebook-login';


interface IProps extends RouteComponentProps, ILogInProps { }
interface Inputs {
    email: string,
    password: string,
    remember: boolean,
}
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            className="w-100"
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

const LoginPage: React.FC<IProps> = (props) => {

    const [isShowPass, setShowPass] = React.useState(false);
    const [tab, setTab] = React.useState(0);
    const { register, handleSubmit, errors } = useForm<Inputs>();

    const responseFacebook = (response) => {
        console.log(response);
    }

    const handleChange = (event: React.ChangeEvent<{}>, tab: number) => {
        setTab(tab);
    };
    
    return (
        <React.Fragment>
            <LoadingScreen time={1000} />
            <div className="wrapper-login-page">
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
                    <TabPanel value={tab} index={0}>
                        <LoginForm {...props} />
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <RegisterForm {...props} />
                    </TabPanel>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;