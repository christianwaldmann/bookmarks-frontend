export const CATEGORIES = [
	{ key: "home", label: "Home", route: "/home", sortOrder: 0 },
	{ key: "personal", label: "Personal", route: "/personal", sortOrder: 1 },
	{ key: "career", label: "Career", route: "/career", sortOrder: 2 },
	{ key: "programming", label: "Programming", route: "/programming", sortOrder: 3 },
	{ key: "gaming", label: "Gaming", route: "/gaming", sortOrder: 4 },
];

export function getCategoryByKey(key) {
	return CATEGORIES.find((c) => c.key === key);
}

export function isValidCategory(key) {
	return CATEGORIES.some((c) => c.key === key);
}

export function getCategoryKeys() {
	return CATEGORIES.map((c) => c.key);
}

export function getSortOrderForCategory(currentKey) {
	const remaining = CATEGORIES.filter((c) => c.key !== currentKey)
		.sort((a, b) => a.sortOrder - b.sortOrder)
		.map((c) => c.key);
	return [currentKey, ...remaining];
}
