import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';

// For Dev
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

import IStore from './IStore';

export default function configureStore(history: History): Store<IStore, any> {
	const sagaMiddleware = createSagaMiddleware();

	// Init middlewares
	const middlewares = [sagaMiddleware, routerMiddleware(history), logger];

	// Init enhancer
	const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

	const store = createStore(rootReducer(history), enhancer);

	sagaMiddleware.run(rootSaga);

	return store;
}
