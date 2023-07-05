import React from "react";
import { Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export default function NavbarDesktop(props) {
	return (
		<nav class="flex flex-col items-left h-full">
			<Link
				to="/home"
				class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
				tabIndex="-1"
			>
				{props.activeitem === "home" ? (
					<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
						Home
					</div>
				) : (
					<div class="py-2 px-4 border-b border-l border-t border-transparent">
						Home
					</div>
				)}
			</Link>
			<Link
				to="/personal"
				class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
				tabIndex="-1"
			>
				{props.activeitem === "personal" ? (
					<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
						Personal
					</div>
				) : (
					<div class="py-2 px-4 border-b border-l border-t border-transparent">
						Personal
					</div>
				)}
			</Link>
			<Link
				to="/career"
				class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
				tabIndex="-1"
			>
				{props.activeitem === "career" ? (
					<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
						Career
					</div>
				) : (
					<div class="py-2 px-4 border-b border-l border-t border-transparent">
						Career
					</div>
				)}
			</Link>
			<Link
				to="/programming"
				class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
				tabIndex="-1"
			>
				{props.activeitem === "programming" ? (
					<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
						Programming
					</div>
				) : (
					<div class="py-2 px-4 border-b border-l border-t border-transparent">
						Programming
					</div>
				)}
			</Link>
			<Link
				to="/gaming"
				class="w-full font-semibold hover:bg-gray-300 dark-hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-600 outline-none"
				tabIndex="-1"
			>
				{props.activeitem === "gaming" ? (
					<div class="bg-white dark:bg-gray-850 text-blue-500 py-2 px-4 border-b border-l border-t dark:border-gray-700">
						Gaming
					</div>
				) : (
					<div class="py-2 px-4 border-b border-l border-t border-transparent">
						Gaming
					</div>
				)}
			</Link>
		</nav>
	);
}
