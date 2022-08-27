import {
	REGISTER_FAILURE,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from "./actionTypesRegister";

const initState = {
	loading: false,
	error: false,
	isReg: false,
	// token: "",
};

const regReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case REGISTER_LOADING: {
			return { ...state, loading: true, error: false };
		}
		case REGISTER_SUCCESS: {
			alert("Registration successful!");
			return {
				...state,
				loading: false,
				error: false,
				isReg: true,
				// token: payload.message,
			};
		}
		case REGISTER_FAILURE: {
			alert("Registration failed. Please try again!");
			// console.log(payload.e);
			return { ...state, loading: false, error: true, isReg: false };
		}
		default: {
			return state;
		}
	}
};

export default regReducer;