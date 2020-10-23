import { applyMiddleware, createStore, Store } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory, History } from "history";

// For Dev
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";

import IStore from "./IStore";
// import initialState from "./initialState";

interface IConfigStore {
    store: Store<IStore>;
    history: History;
}

function configureStore(): IConfigStore {
    const sagaMiddleware = createSagaMiddleware();
    const history: History = createBrowserHistory();

    const store = createStore<IStore>(
        connectRouter(history)(rootReducer(history)),
        composeWithDevTools(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history), // for dispatching history actions
                logger
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return {
        history,
        store,
    };
}

export const storeConfig = configureStore();
