import {
	legacy_createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/login/reducerLogin";
import regReducer from "./auth/register/reducerRegister";
import {reducer as appReducer} from "./app/reducer"


const rootReducer = combineReducers({
	register: regReducer,
	login: authReducer,
  appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
