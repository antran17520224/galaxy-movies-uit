/**
 * @file index
 * Please import some config when register new module
 * Some base file neeed to update
 * * src/redux/rootReducers.js
 * * src/redux/rootSagas.js
 */

import sagas from "./sagas";
import { reducer, name } from "./reducers";
import { IHomePageState, initialState } from "./model/IHomePageState";

export { name, sagas, initialState };
    export type { IHomePageState };

export default reducer;