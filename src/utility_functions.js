export function groupBy(arr, property) {
	// Split array into chunks by specified property
	return arr.reduce(function (memo, x) {
		if (!memo[x[property]]) {
			memo[x[property]] = [];
		}
		memo[x[property]].push(x);
		return memo;
	}, {});
}

export function capitalizeFirstLetter(string) {
	// Capitalize the first letter of a word
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sortObjectPropertiesByPredefinedOrder(obj, order) {
	// Sort object properties by a specified, predefined order
	const ordered = {};
	Object.keys(obj)
		.sort(function (a, b) {
			return order.indexOf(a) - order.indexOf(b);
		})
		.forEach(function (key) {
			ordered[key] = obj[key];
		});
	return ordered;
}

export function isObjectEmpty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
}

export function sortBookmarks(bookmarks) {
	return bookmarks.sort((a, b) => a.text.localeCompare(b.text));
}
