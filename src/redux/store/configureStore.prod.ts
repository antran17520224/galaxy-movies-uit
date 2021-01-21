import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

import IStore from './IStore';

export default function configureStore(history: History): Store<IStore, any> {
	const sagaMiddleware = createSagaMiddleware();

	// Init middlewares
	const middlewares = [sagaMiddleware, routerMiddleware(history)];

	// Init enhancer
	const enhancer = applyMiddleware(...middlewares);

	const store = createStore(rootReducer(history), enhancer);

	sagaMiddleware.run(rootSaga);

	return store;
}
