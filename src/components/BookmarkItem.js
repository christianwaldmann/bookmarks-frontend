import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Modal from "react-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBookmark, updateBookmark } from "../actions/bookmarks";
import Alert from "react-s-alert";

export function BookmarkItem(props) {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const [deleteConfirmationModalIsOpen, deleteConfirmationModalSetIsOpen] =
		React.useState(false);

	function openDeleteConfirmationModal() {
		deleteConfirmationModalSetIsOpen(true);
	}

	function closeDeleteConfirmationModal() {
		deleteConfirmationModalSetIsOpen(false);
	}

	function onClickUpdate(event) {
		event.preventDefault();

		const data = new FormData(event.target);

		const data_json = JSON.stringify({
			text: data.get("text"),
			url: data.get("url"),
			category: props.category,
		});

		props.updateBookmark(props.id, data_json);

		Alert.info("Bookmark updated!", {
			effect: "slide",
			position: "bottom-left",
		});
	}

	function onClickDelete() {
		props.deleteBookmark(props.id);

		Alert.error("Bookmark deleted!", {
			effect: "slide",
			position: "bottom-left",
		});

		closeDeleteConfirmationModal();
	}

	return (
		<div class="sm:w-64 w-full">
			<div class="m-2">
				<ContextMenuTrigger id={props.id}>
					<a
						class="
						block outline-none rounded text-sm px-4 border border-gray-400 shadow-sm
						focus:outline focus:border-blue-400 hover:border-blue-400 focus:text-blue-500 dark-focus:text-blue-500 hover:text-blue-500
						dark:text-gray-400 dark:border-gray-600 dark-hover:border-blue-400 dark-hover:text-blue-500 dark-focus:border-blue-400
						"
						href={props.href}
						style={{ height: 46 }}
					>
						<div class="textBox flex items-center h-full w-full overflow-hidden whitespace-no-wrap">
							{props.text}
						</div>
					</a>
				</ContextMenuTrigger>
			</div>

			<ContextMenu id={props.id}>
				<div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-sm py-1 w-40 text-gray-900 shadow-lg text-sm border dark:border-gray-700">
					<MenuItem
						data={{ id: props.id }}
						onClick={openModal}
						style={{ background: "red", outline: "none" }}
					>
						<div class="px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer focus:outline-none outline-none">
							Edit
						</div>
					</MenuItem>
					<MenuItem onClick={openDeleteConfirmationModal}>
						<div class="px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">
							Delete
						</div>
					</MenuItem>
				</div>
			</ContextMenu>

			{/* Edit Bookmark Modal */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={{
					overlay: { background: "hsla(212, 25%, 10%, 0.85)" },
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						background: "transparent",
						border: "none",
						boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
						padding: "0px",
					},
				}}
				contentLabel="Edit Bookmark Modal"
			>
				<div class="w-104 sm:w-144 bg-white dark:bg-gray-850 sm:px-0 px-6">
					<div class="flex items-center mb-4 px-4 pt-4">
						<h2 class="text-gray-900 dark:text-gray-300 font-bold text-xl">
							Bookmark
						</h2>
						<button
							class="ml-auto -mr-2 -mt-2 text-gray-500 hover:bg-gray-300 dark-hover:bg-gray-700 p-2 rounded-full focus:outline-none focus:bg-gray-400 dark-focus:bg-gray-600"
							onClick={closeModal}
						>
							<svg
								viewBox="0 0 20 20"
								fill="currentColor"
								class="x w-6 h-6 "
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<form onSubmit={onClickUpdate}>
						<div class="md:flex md:items-center mb-4 px-4">
							<label
								class="md:w-1/6 block font-semibold text-sm dark:text-gray-500 mb-1 md:mb-0 pr-4 md:text-right md:mr-8"
								for="text"
							>
								Text *
							</label>
							<input
								class="sm:text-sm bg-gray-200 dark:bg-gray-800 appearance-none border-2 border-transparent rounded w-full py-2 px-4 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none dark-focus:outline-none focus:bg-white dark-focus:bg-gray-700 focus:border-blue-500 dark-focus:border-blue-500"
								type="text"
								name="text"
								id="text"
								placeholder=""
								required
								autoFocus
								defaultValue={props.text}
							/>
						</div>
						<div class="md:flex md:items-center mb-4 px-4">
							<label
								class="md:w-1/6 block font-semibold text-sm dark:text-gray-500 mb-1 md:mb-0 pr-4 md:text-right md:mr-8"
								for="url"
							>
								Url *
							</label>
							<input
								class="sm:text-sm bg-gray-200 dark:bg-gray-800 appearance-none border-2 border-transparent rounded w-full py-2 px-4 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none dark-focus:outline-none focus:bg-white dark-focus:bg-gray-700 focus:border-blue-500 dark-focus:border-blue-500"
								type="text"
								name="url"
								id="url"
								placeholder="https://www..."
								required
								defaultValue={props.href}
							/>
						</div>
						<div class="md:flex md:items-center py-4 px-10 sm:px-4 bg-gray-300 dark:bg-gray-900 -mx-6 sm:mx-0">
							<button
								class="w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
								type="submit"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</Modal>

			{/* Delete Confirmation Modal */}
			<Modal
				isOpen={deleteConfirmationModalIsOpen}
				onRequestClose={closeDeleteConfirmationModal}
				style={{
					overlay: { background: "hsla(212, 25%, 10%, 0.85)" },
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						background: "transparent",
						border: "none",
						boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
						padding: "0px",
					},
				}}
				contentLabel="Delete Confirmation Modal"
			>
				<div class="w-104 sm:w-144 bg-white dark:bg-gray-850 px-6 sm:px-0">
					<div class=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-750 sm:mx-0 sm:h-10 sm:w-10">
								<svg
									class="h-6 w-6 text-red-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/>
								</svg>
							</div>
							<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
									id="modal-headline"
								>
									Delete bookmark
								</h3>
								<div class="mt-2">
									<p class="text-sm leading-5 text-gray-500">
										Are you sure you want to delete this
										bookmark?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
							<button
								class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
								onClick={onClickDelete}
							>
								Delete
							</button>
						</span>
						<span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
							<button
								class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-gray-100 text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 dark-hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
								onClick={closeDeleteConfirmationModal}
							>
								Cancel
							</button>
						</span>
					</div>
				</div>
			</Modal>
		</div>
	);
}

BookmarkItem.propTypes = {
	deleteBookmark: PropTypes.func.isRequired,
	updateBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteBookmark, updateBookmark })(
	BookmarkItem
);
