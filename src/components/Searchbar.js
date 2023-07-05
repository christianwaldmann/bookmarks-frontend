import React, { Fragment } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { search } from "../actions/search";
import { logout } from "../actions/auth";
import DropdownMenu from "./Dropdown/DropdownMenu";

function Searchbar(props) {
	function onChange(event) {
		props.search(event.target.value);
	}

	function onClickLogout(event) {
		event.preventDefault();
		props.logout();
	}

	return (
		<Fragment>
			{/* Default / Desktop View */}
			<div class="hidden sm:block">
				<div class="sm:h-16 w-full flex justify-center px-2 py-3 border-b border-gray-400 dark:border-gray-700">
					<div class="flex-grow flex items-center">
						<Link
							to=""
							class="ml-3 text-gray-700 dark:text-gray-300 font-semibold"
						>
							Bookmarks
						</Link>
					</div>
					<div class="block lg:inline-block lg:mt-0 relative text-gray-800 rounded-lg shadow-md">
						<input
							class="bg-gray-100 dark:bg-gray-900 rounded-lg dark:text-gray-200 h-full px-5 pr-16 text-sm focus:outline-none sm:w-144"
							type="search"
							name="search"
							placeholder="Search"
							onChange={onChange}
							autoFocus
						></input>
						<button
							type="submit"
							class="absolute right-0 top-0 mt-3 mr-4 focus:outline-none"
							tabIndex="-1"
						>
							<svg
								class="text-gray-600 h-4 w-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								id="Capa_1"
								x="0px"
								y="0px"
								viewBox="0 0 56.966 56.966"
								width="512px"
								height="512px"
							>
								<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
							</svg>
						</button>
					</div>
					<div class="flex-grow flex items-center justify-end">
						<DropdownMenu />
					</div>
				</div>
			</div>
			{/* Mobile View */}
			<div class="w-screen sm:hidden py-4 border-b border-gray-400 dark:border-gray-700">
				{/* <div class="sm:h-16 w-full flex justify-end px-2 py-3 border-b border-gray-400 dark:border-gray-700"> */}
				<DropdownMenu />
				{/* </div> */}
			</div>
		</Fragment>
	);
}

Searchbar.propTypes = {
	search: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	username: state.auth.user.username,
});

export default connect(mapStateToProps, { search, logout })(Searchbar);
