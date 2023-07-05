import React from "react";
import BookmarkItem from "./BookmarkItem";
import AddBookmarkButton from "../components/AddBookmarkButton";

export default function BookmarkContainer(props) {
	const bookmarkitems = props.bookmarks.map((item) => {
		return (
			<BookmarkItem
				text={item.text}
				href={item.url}
				category={props.category}
				id={item.id}
			/>
		);
	});

	return (
		<div class="flex flex-col flex-wrap">
			{bookmarkitems}
			{props.bflagShowAddBookmarkButton ? (
				<AddBookmarkButton category={props.category} />
			) : (
				<div></div>
			)}
		</div>
	);
}
