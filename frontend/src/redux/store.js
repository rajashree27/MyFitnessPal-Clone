import {
	legacy_createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunk from "redux-thunk";

import {reducer as appReducer} from "./app/reducer"

const rootReducer = combineReducers({appReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
