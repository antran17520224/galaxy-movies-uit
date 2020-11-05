/**
 * @file index
 * Please import some config when register new module
 * Some base file neeed to update
 * * src/redux/rootReducers.js
 * * src/redux/rootSagas.js
 */

import sagas from "./sagas";
import { reducer, name } from "./reducers";
import { ILogInState, initialState } from "./model/ILoginState";

export { name, sagas, ILogInState, initialState };

export default reducer;