import { SwipeableDrawer } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HdIcon from '@material-ui/icons/Hd';
import HomeIcon from '@material-ui/icons/Home';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'classnames';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMainLayoutProps } from '../../model/IMainLayoutProps';
import useStyles from './styles';

interface IProps extends RouteComponentProps, IMainLayoutProps {}
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
		event: React.KeyboardEvent | React.MouseEvent
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
		<div className={classes.list} role="presentation">
			<List>
				<a href="/" onClick={props.actions.toggleSideBar}>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText>Trang chủ</ListItemText>
					</ListItem>
				</a>
				<a href="/#showing" onClick={props.actions.toggleSideBar}>
					<ListItem button>
						<ListItemIcon>
							<LocalMoviesIcon />
						</ListItemIcon>
						<ListItemText>Phim đang chiếu</ListItemText>
					</ListItem>
				</a>
				<a href="/#coming-soon" onClick={props.actions.toggleSideBar}>
					<ListItem button>
						<ListItemIcon>
							<HdIcon />
						</ListItemIcon>
						<ListItemText>Phim sắp chiếu</ListItemText>
					</ListItem>
				</a>
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const { isToggleSideBar } = props.store.MainLayout;

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
	);
};

export default SideBar;
