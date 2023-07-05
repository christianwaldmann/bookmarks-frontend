import {
	GET_BOOKMARKS,
	ADD_BOOKMARK,
	DELETE_BOOKMARK,
	UPDATE_BOOKMARK,
} from "../actions/types";
import { sortBookmarks } from "../utility_functions";

const initialState = {
	bookmarks: [],
	bookmarks_home: [],
	bookmarks_personal: [],
	bookmarks_career: [],
	bookmarks_programming: [],
	bookmarks_gaming: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_BOOKMARKS:
			return {
				...state,
				bookmarks: sortBookmarks(action.payload),
				bookmarks_home: action.payload.filter(
					(item) => item.category === "home"
				),
				bookmarks_personal: action.payload.filter(
					(item) => item.category === "personal"
				),
				bookmarks_career: action.payload.filter(
					(item) => item.category === "career"
				),
				bookmarks_programming: action.payload.filter(
					(item) => item.category === "programming"
				),
				bookmarks_gaming: action.payload.filter(
					(item) => item.category === "gaming"
				),
			};
		case ADD_BOOKMARK:
			const bookmarks_after_add = sortBookmarks([
				...state.bookmarks,
				action.payload,
			]);
			return {
				...state,
				bookmarks: bookmarks_after_add,
				bookmarks_home: bookmarks_after_add.filter(
					(item) => item.category === "home"
				),
				bookmarks_personal: bookmarks_after_add.filter(
					(item) => item.category === "personal"
				),
				bookmarks_career: bookmarks_after_add.filter(
					(item) => item.category === "career"
				),
				bookmarks_programming: bookmarks_after_add.filter(
					(item) => item.category === "programming"
				),
				bookmarks_gaming: bookmarks_after_add.filter(
					(item) => item.category === "gaming"
				),
			};
		case DELETE_BOOKMARK:
			const bookmarks_after_delete = sortBookmarks(
				state.bookmarks.filter((item) => item.id !== action.payload)
			);
			return {
				...state,
				bookmarks: bookmarks_after_delete,
				bookmarks_home: bookmarks_after_delete.filter(
					(item) => item.category === "home"
				),
				bookmarks_personal: bookmarks_after_delete.filter(
					(item) => item.category === "personal"
				),
				bookmarks_career: bookmarks_after_delete.filter(
					(item) => item.category === "career"
				),
				bookmarks_programming: bookmarks_after_delete.filter(
					(item) => item.category === "programming"
				),
				bookmarks_gaming: bookmarks_after_delete.filter(
					(item) => item.category === "gaming"
				),
			};
		case UPDATE_BOOKMARK:
			const bookmarks_after_update = sortBookmarks(
				state.bookmarks.map((item) =>
					item.id === action.payload.id
						? { id: item.id, ...action.payload }
						: item
				)
			);
			return {
				...state,
				bookmarks: bookmarks_after_update,
				bookmarks_home: bookmarks_after_update.filter(
					(item) => item.category === "home"
				),
				bookmarks_personal: bookmarks_after_update.filter(
					(item) => item.category === "personal"
				),
				bookmarks_career: bookmarks_after_update.filter(
					(item) => item.category === "career"
				),
				bookmarks_programming: bookmarks_after_update.filter(
					(item) => item.category === "programming"
				),
				bookmarks_gaming: bookmarks_after_update.filter(
					(item) => item.category === "gaming"
				),
			};
		default:
			return state;
	}
}
