import React, { Component } from "react";
import { ThemeContext } from "../ThemeContext";

export const ThemeToggle = (props) => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	function isDark() {
		return theme === "mode-dark";
	}

	return (
		<button
			class="w-full px-4 py-2 flex items-center text-left text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark-hover:text-white cursor-pointer"
			onClick={() => {
				setTheme(isDark() ? "mode-light" : "mode-dark");
			}}
		>
			{theme === "mode-light" ? (
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			) : (
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
					<path
						fillRule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clipRule="evenodd"
					/>
				</svg>
			)}
			<span class="ml-2 text-sm">
				{theme === "mode-light" ? (
					<div>Dark theme</div>
				) : (
					<div>Light theme</div>
				)}
			</span>
		</button>
	);
};

export default ThemeToggle;
