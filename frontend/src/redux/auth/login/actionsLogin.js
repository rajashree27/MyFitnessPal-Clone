import {
	LOGIN_FAILURE,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./actionTypesLogin";
import axios from "axios";

export const loginAPI = (creds) => (dispatch) => {
	dispatch({ type: LOGIN_LOADING });

	let data = {
		email: creds.email,
		password: creds.password,
	};

	data = JSON.stringify(data);

	const headers = {
		"Content-Type": "application/json",
	};

	axios
		.post("https://smooth-flavor-1645.herokuapp.com/auth/login", data, {
			headers: headers,
		})
		.then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r.data }))
		.catch(() => dispatch({ type: LOGIN_FAILURE }));
};

export const logoutAPI = () => ({ type: LOGOUT });