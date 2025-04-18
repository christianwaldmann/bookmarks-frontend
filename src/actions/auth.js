import axios from "axios";
import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAIL,
} from "./types";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({ type: USER_LOADING });

	axios
		.get("/auth/user", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type: AUTH_ERROR,
			});
		});
};

// Login user
export const login = (username, password) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request body
	const body = JSON.stringify({ username, password });

	axios
		.post("/auth/login", body, config)
		.then((res) => {
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		})
		.catch((err) => {
		    const errorMsg =
		        err.response?.data?.detail ||
		        err.response?.data?.error ||
		        "Login failed. Please try again.";

			dispatch({
			    type: LOGIN_FAIL,
			    payload: { error: errorMsg },
			});
		});
};

// Logout user
export const logout = () => (dispatch, getState) => {
	axios
		.post("/auth/logout", null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: LOGOUT_SUCCESS,
			});
		})
		.catch((err) => console.log(err));
};

// Register user
export const register = ({ username, password, email }) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request Body
	const body = JSON.stringify({ username, email, password });

	axios
		.post("/auth/register", body, config)
		.then((res) => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
		    const errorMsg =
		        err.response?.data?.detail ||
		        err.response?.data?.error ||
		        "Registration failed. Please check your details and try again.";

			dispatch({
			    type: REGISTER_FAIL,
			    payload: { error: errorMsg },
			});
		});
};

// Delete user
export const delete_user = () => (dispatch, getState) => {
	axios
		.delete("auth/delete", tokenConfig(getState))
		.then(() => {
			dispatch({ type: DELETE_USER_SUCCESS });
		})
		.catch((err) => {
			console.log(err);
			console.log(tokenConfig(getState));
			dispatch({
				type: DELETE_USER_FAIL,
			});
		});
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
	// Get token from state
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to headers config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}

	return config;
};
