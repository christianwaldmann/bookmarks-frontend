import axios from "axios";
import {
	GET_BOOKMARKS,
	ADD_BOOKMARK,
	DELETE_BOOKMARK,
	UPDATE_BOOKMARK,
} from "./types";
import { tokenConfig } from "./auth";

// GET bookmarks
export const getBookmarks = () => (dispatch, getState) => {
	axios
		.get("/bookmarks", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: GET_BOOKMARKS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

// ADD bookmark
export const addBookmark = (bookmark) => (dispatch, getState) => {
	axios
		.post(`/bookmarks`, bookmark, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: ADD_BOOKMARK,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

// DELETE bookmark
export const deleteBookmark = (id) => (dispatch, getState) => {
	axios
		.delete(`/bookmarks/${id}`, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: DELETE_BOOKMARK,
				payload: id,
			});
		})
		.catch((err) => console.log(err));
};

// UPDATE bookmark
export const updateBookmark = (id, bookmark) => (dispatch, getState) => {
	axios
		.put(`/bookmarks/${id}`, bookmark, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: UPDATE_BOOKMARK,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
