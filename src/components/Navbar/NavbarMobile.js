import React from "react";
import { Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { CATEGORIES } from "../../config/categories";

export default function NavbarMobile(props) {
	const [showDropdown, setShowDropdown] = React.useState(false);

	function toggleDropdown() {
		setShowDropdown(!showDropdown);
	}

	return (
		<nav class="flex flex-col items-left h-full">
			<div className="flex items-end">
				<span class="font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none mr-4 py-3 ml-4">
					Category:
				</span>
				<button
					class="font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-xl text-gray-800 dark:text-gray-300 outline-none flex items-center flex-grow py-3 px-4 focus:outline-none"
					onClick={toggleDropdown}
				>
					<span class="capitalize">{props.activeitem}</span>
					<svg
						class="w-6 h-6 ml-auto"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l4-4 4 4m0 6l-4 4-4-4"
						></path>
					</svg>
				</button>
			</div>
			{showDropdown && (
				<div class="bg-gray-100 dark:bg-gray-900 pb-4 border-b dark:border-gray-700">
					{CATEGORIES.map((cat) => (
						<Link
							key={cat.key}
							to={cat.route}
							class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
							tabIndex="-1"
						>
							{props.activeitem === cat.key ? (
								<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b sm:border-l border-t dark:border-gray-700">
									{cat.label}
								</div>
							) : (
								<div class="py-2 px-4 border-b border-l border-t border-transparent">
									{cat.label}
								</div>
							)}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
