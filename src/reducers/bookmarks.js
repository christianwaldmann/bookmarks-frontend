import {
	GET_BOOKMARKS,
	ADD_BOOKMARK,
	DELETE_BOOKMARK,
	UPDATE_BOOKMARK,
} from "../actions/types";
import { sortBookmarks } from "../utility_functions";
import { CATEGORIES } from "../config/categories";

function buildInitialState() {
	const state = { bookmarks: [] };
	CATEGORIES.forEach((cat) => {
		state[`bookmarks_${cat.key}`] = [];
	});
	return state;
}

function categorizeBookmarks(bookmarks) {
	const categorized = { bookmarks };
	CATEGORIES.forEach((cat) => {
		categorized[`bookmarks_${cat.key}`] = bookmarks.filter(
			(item) => item.category === cat.key
		);
	});
	return categorized;
}

export default function (state = buildInitialState(), action) {
	switch (action.type) {
		case GET_BOOKMARKS:
			return {
				...state,
				...categorizeBookmarks(sortBookmarks(action.payload)),
			};
		case ADD_BOOKMARK:
			const bookmarks_after_add = sortBookmarks([
				...state.bookmarks,
				action.payload,
			]);
			return {
				...state,
				...categorizeBookmarks(bookmarks_after_add),
			};
		case DELETE_BOOKMARK:
			const bookmarks_after_delete = sortBookmarks(
				state.bookmarks.filter((item) => item.id !== action.payload)
			);
			return {
				...state,
				...categorizeBookmarks(bookmarks_after_delete),
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
				...categorizeBookmarks(bookmarks_after_update),
			};
		default:
			return state;
	}
}
