import IStore from '../../../redux/store/IStore';
import * as homeActions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { withRouter } from 'react-router-dom';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...homeActions,
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
