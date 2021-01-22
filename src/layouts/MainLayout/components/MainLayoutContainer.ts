import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import IStore from '../../../redux/store/IStore';
import * as mainLayoutActions from '../actions';
import MainLayout from './MainLayout';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...mainLayoutActions,
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MainLayout)
);

