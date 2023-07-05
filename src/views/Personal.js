import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import BookmarkContainer from "../components/BookmarkContainer";
import Searchbar from "../components/Searchbar";
import {
	groupBy,
	capitalizeFirstLetter,
	sortObjectPropertiesByPredefinedOrder,
} from "../utility_functions";
import "../Scrollbar.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBookmarks } from "../actions/bookmarks";
import { clearSearchValue } from "../actions/search";

export class Personal extends Component {
	componentDidMount() {
		this.props.clearSearchValue();
		this.props.getBookmarks();
	}

	static propTypes = {
		bookmarks: PropTypes.array.isRequired,
		search_value: PropTypes.array.isRequired,
		bookmarks_filtered_by_search: PropTypes.string.isRequired,
		getBookmarks: PropTypes.func.isRequired,
		deleteBookmark: PropTypes.func.isRequired,
		clearSearchValue: PropTypes.func.isRequired,
	};

	render() {
		// 1. Split data by category and get object with unique categories as properties
		let bookmarks_split_by_category_obj = groupBy(
			this.props.bookmarks_filtered_by_search,
			"category"
		);

		// 2. Sort properties by predefined order
		let bookmarks_split_by_category_obj_sorted =
			sortObjectPropertiesByPredefinedOrder(
				bookmarks_split_by_category_obj,
				["personal", "home", "career", "programming", "gaming"]
			);

		// 3. Transform object with properties to array with subarrays
		let bookmarks_split_by_category_arr_sorted = Object.entries(
			bookmarks_split_by_category_obj_sorted
		).map(([k, v]) => v);

		return (
			<div class="h-full flex flex-col">
				<Searchbar
					handleSearchbarValueChanged={
						this.props.handleSearchbarValueChanged
					}
				/>
				<div
					class="flex flex-grow flex-col sm:flex-row"
					style={{ height: "calc(100vh - 10000px)" }}
				>
					<div class="bg-gray-100 dark:bg-gray-900 sm:h-full h-auto sm:w-1/3 border-r dark:border-gray-700 w-full">
						<div class="ml-auto md:w-56 sm:pt-10">
							<Navbar activeitem={"personal"} />
						</div>
					</div>
					<div class="flex p-2 w-full sm:w-auto">
						{this.props.search_value !== "" ? (
							[
								// Search view
								bookmarks_split_by_category_arr_sorted.length ? (
									<div></div>
								) : (
									<div class="mt-12 ml-12 text-2xl text-center font-bold text-gray-700 dark:text-gray-400">
										No bookmark found for this search
									</div>
								),
								<div class="scrollbox overflow-y-scroll">
									<div
										class="scrollbox-content -mt-10"
										style={{
											height: "calc(100vh - 80px)",
										}}
									>
										{bookmarks_split_by_category_arr_sorted.map(
											(item) => {
												return item.length ? (
													<Fragment>
														<div class="block mx-2 mb-2 mt-10 rounded text-lg font-bold dark:text-gray-600">
															{capitalizeFirstLetter(
																item[0].category
															)}
														</div>
														<BookmarkContainer
															bookmarks={item}
															category={
																item[0].category
															}
														/>
													</Fragment>
												) : (
													<div> </div>
												);
											}
										)}
									</div>
								</div>,
							]
						) : (
							// Default view
							<div class="scrollbox overflow-y-scroll w-full sm:w-auto">
								<div
									class="scrollbox-content"
									style={{
										height: "calc(100vh - 130px)",
									}}
								>
									<BookmarkContainer
										bookmarks={this.props.bookmarks}
										category={"personal"}
										bflagShowAddBookmarkButton={true}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	bookmarks: state.bookmarks.bookmarks_personal,
	search_value: state.search.search_value,
	bookmarks_filtered_by_search: state.search.bookmarks_filtered_by_search,
});

export default connect(mapStateToProps, { getBookmarks, clearSearchValue })(
	Personal
);
