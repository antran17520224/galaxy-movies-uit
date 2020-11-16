import { Box } from "@material-ui/core";
import * as React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import SideBar from "../../../components/Drawer";
import Header from "../../../components/Header";
import { RouteConfig } from "../../../routes";
import { IMainLayoutProps } from "../model/IMainLayoutProps";
import useStyles from './styles';
import clsx from 'classnames';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';


interface IProps extends RouteComponentProps, IMainLayoutProps {
    routes?: RouteConfig[];
    window?: () => Window;
    children?: React.ReactElement;
}

function ScrollTop(props: IProps) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#top',);
        console.log("anchor", anchor)
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}
const MainLayout: React.FC<IProps> = (props) => {

    const classes = useStyles();
    const { accessToken } = props.store.LoginPage;
    return (
        <React.Fragment>
            <div id="top"></div>
            <Header {...props} />

            <Box>
                <SideBar {...props} />
            </Box>
            <Switch>
                {props.routes.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        component={item.component}
                    />
                ))}

                {/* {props.routes.length > 0 ? (
                    <Redirect to={props.routes[0].path} />
                ) : null} */}
                {
                    accessToken !== null && (
                        <Redirect to="/" />
                    )
                }
            </Switch>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}

export default MainLayout;

