import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers/rootReducer";

/* persistStore creates a persistor for a given store. This allows the browser to cache our redux store.
 * persistor holds the persisted version of the store.
 */

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
