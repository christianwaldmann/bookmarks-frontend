import React from "react";

export default function SubmitButton(props) {
	return !props.disabled ? (
		// Default state
		<button
			type="submit"
			class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded text-white bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
		>
			{props.text}
		</button>
	) : (
		// Disabled state
		<button
			type="submit"
			class="group relative w-full flex justify-center py-2 px-4 cursor-not-allowed border border-transparent text-sm leading-5 font-medium rounded text-white bg-blue-200 dark:bg-blue-300 focus:outline-none"
		>
			<span class="absolute left-0 inset-y-0 flex items-center pl-3">
				<svg
					class="h-5 w-5 text-gray-100 group-hover:text-blue-400 transition ease-in-out duration-150"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			{props.text}
		</button>
	);
}
