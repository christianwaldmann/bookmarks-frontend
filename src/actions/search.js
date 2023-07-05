import axios from "axios";
import { SEARCH_VALUE_ENTERED, CLEAR_SEARCH_VALUE } from "./types";
import { tokenConfig } from "./auth";

// GET bookmarks
export const search = (value) => (dispatch, getState) => {
	const { bookmarks } = getState();

	dispatch({
		type: SEARCH_VALUE_ENTERED,
		payload: {
			search_value: value,
			bookmarks_filtered_by_search: bookmarks.bookmarks.filter((item) => {
				return item.text
					.toLowerCase()
					.includes(value.toLocaleLowerCase());
			}),
		},
	});
};

// CLEAR search value
export const clearSearchValue = () => (dispatch) => {
	dispatch({
		type: CLEAR_SEARCH_VALUE,
		payload: "",
	});
};
