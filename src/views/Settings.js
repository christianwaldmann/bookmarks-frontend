import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";
import { delete_user } from "../actions/auth";

function Settings(props) {
	return (
		<div class="h-full flex flex-col">
			<Searchbar
				handleSearchbarValueChanged={props.handleSearchbarValueChanged}
			/>
			<div
				class="flex flex-grow"
				style={{ height: "calc(100vh - 10000px)" }}
			>
				<div class="bg-gray-100 dark:bg-gray-900 h-full w-1/3 border-r dark:border-gray-700">
					<div class="ml-auto md:w-56 pt-10"></div>
				</div>
				<div class="px-4 py-2 w-144">
					<h1 class="mb-4 text-gray-800 dark:text-gray-200 text-4xl">
						Settings
					</h1>
					<Settings.SectionHeader
						title="Delete your Bookmarks Account"
						description="Completely delete your account."
					/>
					<Settings.SectionContainer>
						<Settings.SectionRow label="Delete your Bookmarks Account">
							<Settings.DeleteProfileButton
								onClick={props.delete_user}
							/>
						</Settings.SectionRow>
					</Settings.SectionContainer>
				</div>
			</div>
		</div>
	);
}

Settings.DeleteProfileButton = function _(props) {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<button
				class="px-6 py-3 bg-red-600 outline-none rounded text-sm font-semibold shadow-sm
			focus:outline-none focus:bg-red-500 hover:bg-red-500 text-red-100 ml-auto"
				onClick={openModal}
			>
				Delete Account
			</button>
			{/* Delete Confirmation Modal */}
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
				contentLabel="Delete Confirmation Modal"
			>
				<div class="w-104 sm:w-144 bg-white dark:bg-gray-850">
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
									Delete Account
								</h3>
								<div class="mt-2">
									<p class="text-sm leading-5 text-gray-500">
										Are you sure you want to completely
										delete your Bookmarks Account? This
										action is irreversibly.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
							<button
								class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
								onClick={props.onClick}
							>
								Delete
							</button>
						</span>
						<span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
							<button
								class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-gray-100 text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 dark-hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
								onClick={closeModal}
							>
								Cancel
							</button>
						</span>
					</div>
				</div>
			</Modal>
		</>
	);
};

Settings.SectionHeader = function (props) {
	return (
		<>
			<h2 class="text-gray-800 dark:text-gray-200 text-lg font-semibold">
				{props.title}
			</h2>
			<p class="mt-2 text-gray-600 dark:text-gray-500 text-sm">
				{props.description}
			</p>
		</>
	);
};

Settings.SectionContainer = function (props) {
	return (
		<div class="mt-4 p-3 w-full bg-gray-100 dark:bg-gray-750 rounded grid grid-cols-3 gap-x-4 gap-y-2 border dark:border-gray-700">
			{props.children}
		</div>
	);
};

Settings.SectionRow = function (props) {
	return (
		<>
			<label class="col-span-1 text-gray-800 dark:text-gray-200 text-sm font-semibold">
				{props.label}
			</label>
			<div class="col-span-2 flex">{props.children}</div>
		</>
	);
};

Settings.propTypes = {
	delete_user: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { delete_user })(Settings);
