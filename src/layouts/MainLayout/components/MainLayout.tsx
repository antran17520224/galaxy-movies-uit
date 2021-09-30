import { Box } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom';
import { RouteConfig } from '../../../routes';
import { IMainLayoutProps } from '../model/IMainLayoutProps';
import SideBar from './Drawer';
import Footer from './Footer';
import Header from './Header';
import useStyles from './styles';

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
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			'#top'
		);
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
	const { isRememberAccount, accessToken } = props.store.LoginPage;
	const { pathname } = useLocation();

	const [isFixed, setIsFixed] = React.useState(false);

	React.useEffect(() => {
		pathname === '/' ? setIsFixed(true) : setIsFixed(false);
		if (isRememberAccount && accessToken) {
			setInterval(() => {
				localStorage.removeItem('accessToken');
			}, 60 * 60 * 24 * 30 * 12);
		}
	}, [pathname]);

	return (
		<React.Fragment>
			<div id="top"></div>
			<Header {...props} isFixed={isFixed} />

			<Box>
				<SideBar {...props} />
			</Box>
			<Switch>
				{props.routes?.map((item) => (
					<Route
						key={item.path}
						path={item.path}
						component={item.component}
						exact={item.exact}
					/>
				))}
				<Redirect from="*" to="/" />
			</Switch>

			<Footer />
			<ScrollTop {...props}>
				<Fab
					color="secondary"
					size="small"
					aria-label="scroll back to top"
					style={{ outline: 'none', zIndex: 99 }}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
};

export default MainLayout;
