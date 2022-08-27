import {
	LOGIN_FAILURE,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./actionTypesLogin";

let token = localStorage.getItem("token");

const initState = {
	loading: false,
	error: false,
	isAuth: !!token,
	token: token,
};

const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_LOADING: {
			return { ...state, loading: true, error: false };
		}
		case LOGIN_SUCCESS: {
            alert("Login successful!")
			localStorage.setItem("token",JSON.stringify(payload.token))
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload.token,
			};
            
		}
		case LOGIN_FAILURE: {
            alert("Login failed. Kindly check email or password!")
			return { ...state, error: true, loading: false, isAuth: false };
		}
		case LOGOUT: {
			localStorage.removeItem("token");
			return { ...state, isAuth: false };
		}
		default:
			return state;
	}
};

export default authReducer;