import React from "react";
import { Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { CATEGORIES } from "../../config/categories";

export default function NavbarDesktop(props) {
	return (
		<nav class="flex flex-col items-left h-full">
			{CATEGORIES.map((cat) => (
				<Link
					key={cat.key}
					to={cat.route}
					class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
					tabIndex="-1"
				>
					{props.activeitem === cat.key ? (
						<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
							{cat.label}
						</div>
					) : (
						<div class="py-2 px-4 border-b border-l border-t border-transparent">
							{cat.label}
						</div>
					)}
				</Link>
			))}
		</nav>
	);
}
