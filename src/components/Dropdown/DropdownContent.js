import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";

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

	useEventListener("keydown", handleKeypress);

	return (
		<div {...props}>
			<button
				class="fixed inset-0 w-full h-full bg-transparent cursor-default focus:outline-none"
				onClick={props.closedropdown}
				tabIndex="-1"
			></button>
			<div class="absolute right-0 mt-2 py-2 w-56 bg-white dark:bg-gray-850 rounded border-l border-r border-b dark:border-gray-750 shadow-lg text-sm">
				<DropdownContent.Header>
					<DropdownContent.Username>
						{props.username}
					</DropdownContent.Username>
					<DropdownContent.Email>{props.email}</DropdownContent.Email>
				</DropdownContent.Header>
				<DropdownContent.Separator />
				<ThemeToggle />
				<DropdownContent.SettingsButton to="/settings" />
				<DropdownContent.Separator />
				<DropdownContent.LogoutButton onClick={onClickLogout} />
			</div>
		</div>
	);
}

DropdownContent.Header = function DropdownHeader(props) {
	return <div class="block px-4 py-1">{props.children}</div>;
};

DropdownContent.Username = function DropdownUsername(props) {
	return (
		<span class="block font-bold text-gray-800 dark:text-gray-200">
			{props.children}
		</span>
	);
};

DropdownContent.Email = function DropdownEmail(props) {
	return (
		<span class="block text-xs font-semibold text-gray-500 dark:text-gray-400">
			{props.children}
		</span>
	);
};

DropdownContent.SettingsButton = function DropdownContentSettingsButton(props) {
	return (
		<Link
			{...props}
			class="w-full text-left flex items-center px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark-hover:text-white"
		>
			<svg
				className="w-4 h-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
			<span class="ml-2 text-sm">Settings</span>
		</Link>
	);
};

DropdownContent.LogoutButton = function DropdownContentLogoutButton(props) {
	return (
		<button
			{...props}
			class="w-full text-left flex items-center px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark-hover:text-white"
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
	);
};

DropdownContent.Separator = function DropdownContentSeparator() {
	return <div class="border-b dark:border-gray-700 my-2" />;
};

DropdownContent.propTypes = {
	logout: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	username: state.auth.user.username,
	email: state.auth.user.email,
});

export default connect(mapStateToProps, { logout })(DropdownContent);
