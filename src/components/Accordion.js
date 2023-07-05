import React, { useContext, createContext, useState } from "react";

const ToggleContext = createContext();

export default function Accordion({ children }) {
	return (
		<div className="max-w-2xl mx-auto flex flex-col mt-12">{children}</div>
	);
}

Accordion.Item = function AccordionItem({ children }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<div
				className={
					"w-full mt-6 p-4 rounded-lg " +
					(toggleShow ? "bg-gray-100 dark:bg-gray-850" : "")
				}
			>
				{children}
			</div>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);
	return (
		<button
			onClick={() => setToggleShow((toggleShow) => !toggleShow)}
			class="group pb-3 focus:outline-none inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 hover:text-gray-600 dark:text-gray-200 dark-hover:text-gray-400"
		>
			{children}
			{toggleShow ? (
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M5 15l7-7 7 7"
					></path>
				</svg>
			) : (
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			)}
		</button>
	);
};

Accordion.Body = function AccordionBody({ children }) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? (
		<div className="w-full py-3 text-gray-800 dark:text-gray-200">
			{children}
		</div>
	) : null;
};
