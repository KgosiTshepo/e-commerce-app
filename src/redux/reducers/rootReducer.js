import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import collectionsReducer from "./collectionsReducer";
import directoryReducer from "./directoryReducer";
import userReducer from "./userReducer";

/* persistReducer holds the reducer we want to persist
 * storage is the type of caching we get from the browser
 * persistConfig is the object we want to persist to storage
 */

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["items"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: persistReducer(persistConfig, cartReducer),
	directory: directoryReducer,
	collections: collectionsReducer,
});

export default rootReducer;
