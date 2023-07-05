import React, { Fragment } from "react";
import DropdownContent from "./DropdownContent";
import DropdownContentMobile from "./DropdownContentMobile";

export default function HeaderDropdownMenu(props) {
	const [dropdownIsOpen, setIsOpen] = React.useState(false);

	function openDropdown() {
		setIsOpen(true);
	}

	function closedropdown() {
		setIsOpen(false);
	}

	function toggleDropdown() {
		setIsOpen(!dropdownIsOpen);
	}

	return (
		<div class="relative w-full">
			<div class="flex justify-end mr-4">
				<button
					class="relative block text-gray-700 hover:text-black dark:text-gray-300 dark-hover:text-white focus:outline-none"
					onClick={toggleDropdown}
				>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-6 h-6"
					>
						{dropdownIsOpen ? (
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						) : (
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						)}
					</svg>
				</button>
			</div>
			{dropdownIsOpen ? (
				<Fragment>
					<DropdownContent
						closedropdown={closedropdown}
						class="hidden sm:block"
					/>
					<DropdownContentMobile
						closedropdown={closedropdown}
						class="block sm:hidden"
					/>
				</Fragment>
			) : (
				<div></div>
			)}
		</div>
	);
}
