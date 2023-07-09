import React from "react";

export default function Footer() {
	return (
		<footer class="">
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex">
				<a
					href="https://github.com/christianwaldmann?tab=repositories&q=bookmarks"
					className="mx-4 text-gray-500 hover:text-gray-900 dark-hover:text-white text-sm"
				>
					GitHub
				</a>
				<a
					href="https://status.christianw.de/status/christianw"
					className="mx-4 text-gray-500 hover:text-gray-900 dark-hover:text-white text-sm"
				>
					Status
				</a>
				<a
					href="https://api.bookmarks.christianw.de/v1/docs"
					className="mx-4 text-gray-500 hover:text-gray-900 dark-hover:text-white text-sm"
				>
					API Docs
				</a>
			</div>
		</footer>
	);
}
