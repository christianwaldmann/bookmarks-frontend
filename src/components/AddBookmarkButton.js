import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBookmark } from "../actions/bookmarks";
import Alert from "react-s-alert";

export function AddBookmarkButton(props) {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function onSubmit(event) {
		event.preventDefault();

		const data = new FormData(event.target);

		const data_json = JSON.stringify({
			text: data.get("text"),
			url: data.get("url"),
			category: props.category,
		});

		props.addBookmark(data_json);

		Alert.success("Bookmark added!", {
			effect: "slide",
			position: "bottom-left",
		});

		closeModal();
	}

	return (
		<div>
			<div class="sm:w-64 w-full flex">
				<button
					class="flex-grow m-2 px-4 py-3 outline-none rounded text-sm border border-gray-400 shadow-sm
					focus:outline-none focus:border-blue-400 hover:border-blue-400 focus:text-blue-500 hover:text-blue-500
					dark:text-gray-300 dark:border-gray-600 dark-hover:border-blue-400 dark-hover:text-blue-500 dark-focus:border-blue-400"
					onClick={openModal}
					style={{ height: 46 }}
				>
					<svg
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="plus w-5 h-5 mx-auto my-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
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
					contentLabel="Add Bookmark Modal"
				>
					<div class="w-104 sm:w-144 bg-white dark:bg-gray-850 sm:px-0 px-6">
						<div class="flex items-center mb-4 px-4 pt-4">
							<h2 class="text-gray-900 dark:text-gray-300 font-bold text-lg">
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
						<form onSubmit={onSubmit}>
							<div class="md:flex md:items-center mb-4 px-4">
								<label
									class="md:w-1/6 block font-semibold text-sm dark:text-gray-500 mb-1 md:mb-0 md:text-right md:mr-8"
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
								/>
							</div>
							<div class="md:flex md:items-center mb-4 px-4">
								<label
									class="md:w-1/6 block font-semibold text-sm dark:text-gray-500 mb-1 md:mb-0 md:text-right md:mr-8"
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
								/>
							</div>
							<div class="md:flex md:items-center py-4 px-10 sm:px-4 bg-gray-300 dark:bg-gray-900 -mx-6 sm:mx-0">
								<button
									class="w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
									type="submit"
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		</div>
	);
}

AddBookmarkButton.propTypes = {
	addBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addBookmark })(AddBookmarkButton);
