import React from "react";

// Reference: https://joshwcomeau.com/gatsby/dark-mode/

const getInitialTheme = (_) => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("color-theme");
		if (typeof storedPrefs === "string") {
			return storedPrefs;
		}

		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "mode-dark";
		}
	}

	// If you want to use light theme as the default, return "light" instead
	return "mode-dark";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
	const [theme, setTheme] = React.useState(getInitialTheme);

	const rawSetTheme = (theme) => {
		const root = window.document.documentElement;
		const isDark = theme === "mode-dark";

		root.classList.remove(isDark ? "mode-light" : "mode-dark");
		root.classList.add(theme);

		localStorage.setItem("color-theme", theme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	React.useEffect(
		(_) => {
			rawSetTheme(theme);
		},
		[theme]
	);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
