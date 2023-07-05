import React from "react";
import Accordion from "../components/Accordion";

export default function Landing() {
	return (
		<div class="bg-white dark:bg-gray-900">
			{/* Begin Hero Section */}
			<div class="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 sm:h-screen flex items-center">
				<div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
					<div>
						<h1 class="mt-3 block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
							Organizing your{" "}
							<span class="text-blue-600">bookmarks</span> made
							simple.
						</h1>
						<p class="mt-12 text-lg text-gray-800 dark:text-gray-400">
							Have all bookmarks ready when you open a new tab in
							your browser.
						</p>

						<div class="mt-8 grid gap-3 w-full sm:inline-flex">
							<a
								class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
								href="/login"
							>
								Get started
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="relative ml-4 mb-6 sm:mb-0">
						<img
							class="w-full h-104 object-cover object-left lg:h-auto"
							src="splash.svg"
							alt="Screenshot of the application showing a list of bookmarks which are sorted into categories."
						/>
					</div>
				</div>
			</div>
			<div class="container mx-auto">
				{/* Begin Feature Section */}
				<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12 sm:mt-24">
					<div class="max-w-2xl mx-auto text-center mb-12">
						<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
							Features
						</h2>
					</div>
					<div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
						<a
							class="group flex flex-col justify-center hover:bg-gray-100 rounded-lg p-4 md:p-7 dark-hover:bg-gray-850 h-64"
							href="/login"
						>
							<div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6 text-white"
								>
									<path
										fillRule="evenodd"
										d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div class="mt-5">
								<h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
									All in one place
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Have all your important bookmarks ready and
									just one click away. Sort them into
									categories to keep them organized.
								</p>
							</div>
							<div class="flex-grow" />
							<div>
								<span class="mt-2 inline-flex items-center gap-x-2 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
									Try it out
									<svg
										class="w-3 h-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</div>
						</a>

						<a
							class="group flex flex-col justify-center hover:bg-gray-100 rounded-lg p-4 md:p-7 dark-hover:bg-gray-850 h-64"
							href="/login"
						>
							<div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									class="w-6 h-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</div>
							<div class="mt-5">
								<h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
									Search
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Use the search feature to find your desired
									bookmark in no time. It looks through all
									categories.
								</p>
							</div>
							<div class="flex-grow" />
							<div>
								<span class="mt-2 inline-flex items-center gap-x-2 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
									Try it out
									<svg
										class="w-3 h-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</div>
						</a>

						<a
							class="group flex flex-col justify-center hover:bg-gray-100 rounded-lg p-4 md:p-7 dark-hover:bg-gray-850 h-64"
							href="/login"
						>
							<div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6 text-white"
								>
									<path
										fillRule="evenodd"
										d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div class="mt-5">
								<h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
									Keyboard control
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Open or search your bookmarks using just
									your keyboard with minimal number of
									keystrokes for maximum productivity.
								</p>
							</div>
							<div class="flex-grow" />
							<div>
								<span class="mt-2 inline-flex items-center gap-x-2 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
									Try it out
									<svg
										class="w-3 h-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</div>
						</a>

						<a
							class="group flex flex-col justify-center hover:bg-gray-100 rounded-lg p-4 md:p-7 dark-hover:bg-gray-850 h-64"
							href="/login"
						>
							<div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6 text-white"
								>
									<path
										fillRule="evenodd"
										d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div class="mt-5">
								<h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
									Dark Theme
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Choose the theme to your liking. Light or
									dark.
								</p>
							</div>
							<div class="flex-grow" />
							<div>
								<span class="mt-2 inline-flex items-center gap-x-2 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
									Try it out
									<svg
										class="w-3 h-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</div>
						</a>
					</div>
				</div>
				{/* Begin FAQ Section */}
				<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12 sm:mt-24">
					<div class="max-w-2xl mx-auto text-center mb-12">
						<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
							Your questions, answered
						</h2>
						<p class="mt-1 text-gray-600 dark:text-gray-400">
							Answers to the most frequently asked questions.
						</p>
					</div>

					<Accordion>
						<Accordion.Item>
							<Accordion.Header>
								How to start using Bookmarks?
							</Accordion.Header>
							<Accordion.Body>
								<p>1. Create an account</p>
								<p>2. Log in</p>
								<p>
									3. Now you'll be able to see and manage your
									bookmarks
								</p>
								<p class="mt-2">
									<span class="font-bold">Tip:</span> Set
									Bookmarks as the default page for opening a
									new tab in your browser.
								</p>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								How to add a bookmark?
							</Accordion.Header>
							<Accordion.Body>
								Click on the '+' button. Enter a descriptive
								title and the link to the website. Confirm by
								pressing 'Add'.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								How to edit/delete a bookmark?
							</Accordion.Header>
							<Accordion.Body>
								Right click (hold on mobile) the bookmark.
								Proceed by selecting 'Edit' or 'Delete'.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								Does Bookmarks run on mobile devices?
							</Accordion.Header>
							<Accordion.Body>
								The current focus is on desktop usage. So access
								from mobile devices is supported but isn't
								optimized right now.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								How much does it cost to use Bookmarks?
							</Accordion.Header>
							<Accordion.Body>
								Bookmarks is free to use.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								How do I delete my account?
							</Accordion.Header>
							<Accordion.Body>
								You can delete your account in the{" "}
								<a
									class="hover:underline text-blue-300"
									href="/settings"
								>
									settings
								</a>
								.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header>
								I forgot my password. How to reset it?
							</Accordion.Header>
							<Accordion.Body>
								It's currently not possible to reset your
								password. If you forget your login credentials,
								you won't be able to access your account
								anymore.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
