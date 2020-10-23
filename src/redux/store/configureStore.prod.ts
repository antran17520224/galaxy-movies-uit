import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore, Store } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";
import IStore from "./IStore";

export const history = createBrowserHistory();

export default function configureStore(): Store<IStore> {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore<IStore>(
        connectRouter(history)(rootReducer(history)),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),  // for dispatching history actions
                sagaMiddleware,
            )
        )
    )

    sagaMiddleware.run(rootSaga);

    return store;
}

