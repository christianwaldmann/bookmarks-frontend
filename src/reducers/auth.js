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
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	isLoading: false,
	user: null,
	error: null,
	hasTriedLogin: false,
	hasTriedRegister: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
				error: null,
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
				error: null,
				hasTriedLogin: true,
				hasTriedRegister: true,
			};
		case LOGIN_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
				error: action.payload ? action.payload.error || "Login failed" : "Login failed",
				hasTriedLogin: true,
				hasTriedRegister: true,
			};
		case REGISTER_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
				error: action.payload ? action.payload.error || "Registration failed" : "Registration failed",
			};
		case AUTH_ERROR:
		case LOGOUT_SUCCESS:
		case DELETE_USER_SUCCESS:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
				error: null,
			};
		default:
			return state;
	}
}
