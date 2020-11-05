import { Checkbox, FormControlLabel, Grid, Paper } from '@material-ui/core';
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
                        Sign in
                        </Typography>
                    <form className={classes.form}>
                        {/* <Field
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            component={renderTextField}
                        />
                        <Field
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="Password"
                            type={isShowPass ? 'text' : 'password'}
                            id="password"
                            component={renderPasswordField}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        onClick={handleShowPassword}
                                    >
                                        {isShowPass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        /> */}
                        <FormControlLabel
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
                            Sign In
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
                        <Grid container className={classes.margin}>
                            <Grid item xs>
                                <Link to="/forgot-password">
                                    Forgot password?
                                    </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/sign-up">
                                    {"Don't have an account? Sign Up"}
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