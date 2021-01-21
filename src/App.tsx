import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'moment/locale/vi';
import * as React from 'react';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import theme from './common/Theme';
import { LoadingScreen } from './components';
import MainLayout from './layouts/MainLayout/components/MainLayoutContainer';
import IStore from './redux/store/IStore';
import { mainRoutes } from './routes';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const App: React.FC = (props) => {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ToastContainer />
				<React.Suspense fallback={<LoadingScreen size="large" />}>
					<MainLayout routes={mainRoutes} />
				</React.Suspense>
			</ThemeProvider>
		</React.Fragment>
	);
};

const mapStateToProps = (store: IStore) => ({
	LoginState: store.LoginPage,
	router: store.router,
});
export default connect(mapStateToProps)(App);
