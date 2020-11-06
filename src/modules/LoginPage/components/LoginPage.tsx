import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useStyles from './styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Avatar, Button, IconButton, InputAdornment, Typography, withStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import clsx from 'classnames';
interface IProps extends RouteComponentProps { }


const LoginPage: React.FC<IProps> = (props) => {

    const [isShowPass,setShowPass] = React.useState(false);

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                        </Typography>
                    <form className={classes.form}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <FormControl className={clsx(classes.textField,classes.marginTop)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={isShowPass ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPass(!isShowPass)}
                                            edge="end"
                                        >
                                            {isShowPass ? <Visibility />  : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControlLabel
                            className={classes.marginTop}
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Đăng nhập
                            </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={clsx(classes.submit, classes.colorButtonFaceBook)}
                        >
                            Facebook
                                    </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={clsx(classes.submit, classes.colorButtonGoogle)}
                        >
                            Google
                                    </Button>
                        <Grid container className={classes.marginTop}>
                            <Grid item xs>
                                <Link to="/forgot-password">
                                    Quên mật khẩu
                                    </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/sign-up">
                                    Tạo tài khoản mới
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default LoginPage;