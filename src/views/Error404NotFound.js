import React from "react";
import { Link } from "react-router-dom";

export default function Error404NotFound() {
	return (
		<div class="container mx-auto pt-2 flex justify-center">
			<div>
				<div class="flex justify-center">
					<Link
						class="px-3 py-2 border dark:border-gray-600 bg-gray-100 dark:bg-gray-750 hover:bg-gray-200 dark-hover:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200"
						to="/"
					>
						Return to bookmarks
					</Link>
				</div>
				<h1 class="flex justify-center text-6xl text-gray-800 dark:text-gray-200 mt-8 font-light">
					404
				</h1>
				<div class="flex justify-center text-2xl text-gray-800 dark:text-gray-500">
					Page not found
				</div>
			</div>
		</div>
	);
}
