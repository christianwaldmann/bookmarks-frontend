import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { search } from "../../actions/search";
import ThemeToggle from "../ThemeToggle";

import useEventListener from "../../hooks/useEventListener";
const ESCAPE_KEYS = ["27", "Escape"];

export function DropdownContent(props) {
	function onClickLogout(event) {
		event.preventDefault();
		props.logout();
	}

	function handleKeypress({ key }) {
		if (ESCAPE_KEYS.includes(String(key))) {
			props.closedropdown();
		}
	}

	function onChange(event) {
		props.search(event.target.value);
	}

	useEventListener("keydown", handleKeypress);

	return (
		<div {...props}>
			<div class="mt-2 pt-2 w-screen bg-white dark:bg-gray-850 text-sm">
				<div class="mx-4 block relative text-gray-800 rounded-lg shadow-md">
					<input
						class="h-10 w-full bg-gray-100 dark:bg-gray-900 rounded-lg dark:text-gray-200 px-5 pr-16 text-sm focus:outline-none sm:w-144"
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
				<div class="mt-4 mb-2 block px-4 py-2">
					<span class="block font-bold text-gray-800 dark:text-gray-200">
						{props.username}
					</span>
					<span class="block text-xs font-semibold text-gray-500 dark:text-gray-400">
						{props.email}
					</span>
				</div>
				<div class="border-b dark:border-gray-700 my-2" />
				<ThemeToggle />
				<button
					class="mt-2 w-full text-left flex items-center px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark-hover:text-white"
					onClick={onClickLogout}
				>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						className="logout w-4 h-4"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clipRule="evenodd"
						/>
					</svg>
					<span class="ml-2 text-sm">Sign out</span>
				</button>
			</div>
		</div>
	);
}

DropdownContent.propTypes = {
	logout: PropTypes.func.isRequired,
	search: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	username: state.auth.user.username,
	email: state.auth.user.email,
});

export default connect(mapStateToProps, { logout, search })(DropdownContent);
