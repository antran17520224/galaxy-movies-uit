import { Box, Grid, IconButton, Link } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import moment from "moment";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoadingCustom } from "../../../../components/Loading";
import { ILogInProps } from "../../model/ILoginProps";
import { MODAL_USER_LOGIN } from "../../model/ILoginState";
import { FormForgotPassword } from "../FormForgotPassword";
import { FormResetPassword } from "../FormResetPassword";
import avatar from '../../../../assets/images/logo/logo-GM-1.png'

import "./account.scss";
interface IProps extends RouteComponentProps, ILogInProps {}

export const MyAccount: React.FC<IProps> = props => {
    const onChooseImage = (event: any) => {
        props.actions.changeAvatarUser({
            avatar : event.target.files[0]
        })
    };

    const { userInfo, accessToken, isProcessing } = props.store.LoginPage;

    React.useEffect(() => {
        if (!userInfo) {
            window.location.assign("http://localhost:4050/");
        }
    }, [userInfo]);
    return (
        <React.Fragment>
            <LoadingCustom spinning={isProcessing} />
            {userInfo && (
                <div className="wrapper-account-page">
                    <Grid
                        container
                        style={{
                            justifyContent: "flex-end"
                        }}
                        spacing={4}
                    >
                        <Grid item xs={12}>
                            <h1>Thông tin tài khoản</h1>
                            <div className="wrapper-user-info">
                                <div className="wrapper-info">
                                    <div className="box1">
                                        <div className="wrapper-avatar">
                                            <img
                                                src={userInfo.avatarUrl ? `http://datve.herokuapp.com/images/${userInfo.avatarUrl}` : avatar}
                                                alt="avatar"
                                            />
                                        </div>
                                    </div>
                                    <div className="wrapper-input">
                                        <input
                                            accept="image/*"
                                            id="icon-button-file"
                                            type="file"
                                            style={{
                                                display: "none"
                                            }}
                                            onChange={onChooseImage}
                                        />
                                        <label htmlFor="icon-button-file">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                            >
                                                <PhotoCamera />
                                            </IconButton>
                                        </label>
                                    </div>
                                    <ul>
                                        <li>
                                            Họ và tên : <span>{userInfo.fullName}</span>
                                        </li>
                                        <li>
                                            Số điện thoại : <span>{userInfo.phone}</span>
                                        </li>
                                        <li>
                                            Email : <span>{userInfo.email}</span>
                                        </li>
                                        <li>
                                            Địa chỉ : <span>{userInfo.address}</span>
                                        </li>
                                        <li>
                                            Giới tính :{" "}
                                            <span>
                                                {userInfo.gender === "male"
                                                    ? "Nam"
                                                    : "female"
                                                    ? "Nữ"
                                                    : "Khác"}
                                            </span>
                                        </li>
                                        <li>
                                            Ngày sinh :{" "}
                                            <span>
                                                {moment(userInfo.dateOfBirth).format("L")}
                                            </span>
                                        </li>
                                    </ul>
                                    <Box
                                        className="forgot-pass"
                                        style={{
                                            textAlign: "center",
                                            padding: "20px"
                                        }}
                                    >
                                        <Link
                                            onClick={() =>
                                                props.actions.toggleModal({
                                                    type:
                                                        MODAL_USER_LOGIN.MODAL_FORGOT_PASSWORD
                                                })
                                            }
                                            variant="body2"
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "17px"
                                            }}
                                        >
                                            Quên mật khẩu
                                        </Link>
                                    </Box>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )}
            <FormForgotPassword {...props} />
            <FormResetPassword {...props} />
        </React.Fragment>
    );
};
