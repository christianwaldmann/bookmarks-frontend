import { SEARCH_VALUE_ENTERED, CLEAR_SEARCH_VALUE } from "../actions/types";
import { BookmarkItem } from "../components/BookmarkItem";

const initialState = {
	search_value: "",
	bookmarks_filtered_by_search: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_VALUE_ENTERED:
			return {
				...state,
				search_value: action.payload.search_value,
				bookmarks_filtered_by_search:
					action.payload.bookmarks_filtered_by_search,
			};
		case CLEAR_SEARCH_VALUE:
			return {
				...state,
				search_value: action.payload,
			};
		default:
			return state;
	}
}
