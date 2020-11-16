import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import clsx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import { IMainLayoutProps } from '../../layouts/MainLayout/model/IMainLayoutProps';
import { SwipeableDrawer } from '@material-ui/core';

interface IProps extends RouteComponentProps, IMainLayoutProps { }
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const SideBar: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const {
        isToggleSideBar
    } = props.store.MainLayout;
    
    return (
        <SwipeableDrawer
            anchor="left"
            open={isToggleSideBar}
            onOpen={props.actions.toggleSideBar}
            onClose={props.actions.toggleSideBar}
            variant="temporary"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            {list()}
        </SwipeableDrawer>
    )
}

export default SideBar;