import {
	legacy_createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/login/reducerLogin";
import regReducer from "./auth/register/reducerRegister";

const rootReducer = combineReducers({
	register: regReducer,
	login: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
