import { combineReducers } from "redux";
import errors from "./errors";
import auth from "./auth";
import bookmarks from "./bookmarks";
import search from "./search";
import { LOGOUT_SUCCESS } from "../actions/types";

const appReducer = combineReducers({ errors, auth, bookmarks, search });

const rootReducer = (state, action) => {
	// Reset all states on logout
	if (action.type === LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
