import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
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
import { isValidCategory, getSortOrderForCategory } from "../config/categories";
import Error404NotFound from "./Error404NotFound";

class CategoryPageInner extends Component {
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
		categoryKey: PropTypes.string.isRequired,
	};

	render() {
		const { categoryKey } = this.props;

		if (!isValidCategory(categoryKey)) {
			return <Error404NotFound />;
		}

		const sortOrder = getSortOrderForCategory(categoryKey);

		let bookmarks_split_by_category_obj = groupBy(
			this.props.bookmarks_filtered_by_search,
			"category"
		);

		let bookmarks_split_by_category_obj_sorted =
			sortObjectPropertiesByPredefinedOrder(
				bookmarks_split_by_category_obj,
				sortOrder
			);

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
							<Navbar activeitem={categoryKey} />
						</div>
					</div>
					<div class="flex p-2 w-full sm:w-auto">
						{this.props.search_value !== "" ? (
							[
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
							<div class="scrollbox overflow-y-scroll w-full sm:w-auto">
								<div
									class="scrollbox-content"
									style={{
										height: "calc(100vh - 130px)",
									}}
								>
									<BookmarkContainer
										bookmarks={this.props.bookmarks}
										category={categoryKey}
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

const CategoryPage = withRouter((props) => {
	const categoryKey = props.match.params.category;
	const mapStateToProps = (state) => ({
		bookmarks: state.bookmarks[`bookmarks_${categoryKey}`] || [],
		search_value: state.search.search_value,
		bookmarks_filtered_by_search: state.search.bookmarks_filtered_by_search,
	});

	const Connected = connect(mapStateToProps, { getBookmarks, clearSearchValue })(
		CategoryPageInner
	);

	return <Connected {...props} categoryKey={categoryKey} />;
});

export default CategoryPage;
