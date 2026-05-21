import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/auth";
import { Formik, Form } from "formik";
import CustomField from "../components/CustomField";
import { isObjectEmpty } from "../utility_functions";
import SubmitButton from "../components/SubmitButton";

export class Register extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};

	onSubmit = (values) => {
		const { username, email, password, password2 } = values;
		if (password !== password2) {
			console.log("Passwords do not match!");
			return;
		}
		const newUser = {
			username,
			password,
			email,
		};
		this.props.register(newUser);
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}

		return (
			<div class="fixed h-full w-full overflow-hidden">
				<div class="h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 sm:py-12 sm:px-6 lg:px-8">
					<div class="sm:max-w-xs sm:max-none w-full flex-grow sm:flex-grow-0 flex flex-col justify-center">
						<div class="w-full px-8 py-6 flex-grow flex flex-col justify-center bg-white dark:bg-gray-850 sm:border dark:border-gray-700">
							<div>
								<h2 class="pt-2 text-center text-3xl leading-9 font-bold text-gray-800 dark:text-gray-300">
									Bookmarks
								</h2>
							</div>

							<Formik
								initialValues={{
									firstName: "",
									lastName: "",
									email: "",
								}}
								validate={(values) => {
									let errors = {};
									if (!values.email) {
										errors.email = "Email is required";
									}
									if (!values.username) {
										errors.username =
											"Username is required";
									}
									if (!values.password) {
										errors.password =
											"Password is required";
									}
									if (
										!values.password2 ||
										values.password2 !== values.password
									) {
										errors.password2 =
											"Passwords do not match";
									}
									return errors;
								}}
								onSubmit={(values) => {
									this.onSubmit(values);
								}}
							>
								{({
									handleSubmit,
									errors,
									touched,
									values,
								}) => (
									<Fragment>
										<Form
											onSubmit={handleSubmit}
											class="mt-8"
										>
											<div className="form-group mt-2">
												<CustomField
													name="email"
													placeholder="Email"
													type="email"
													errors={errors}
													touched={touched}
												/>
											</div>
											<div className="form-group mt-2">
												<CustomField
													name="username"
													placeholder="Username"
													type="text"
													errors={errors}
													touched={touched}
												/>
											</div>
											<div className="form-group mt-2">
												<CustomField
													name="password"
													placeholder="Password"
													type="password"
													errors={errors}
													touched={touched}
												/>
											</div>
											<div className="form-group mt-2">
												<div class="flex items-center">
													{values.password2 &&
														touched.password &&
														!errors.password && (
															<Fragment>
																{errors.password2 ? (
																	<svg
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		className="ml-auto minus-circle w-5 h-5 text-red-500"
																	>
																		<path
																			fillRule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
																			clipRule="evenodd"
																		/>
																	</svg>
																) : (
																	<svg
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		className="ml-auto check-circle w-5 h-5 text-green-500"
																	>
																		<path
																			fillRule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clipRule="evenodd"
																		/>
																	</svg>
																)}
															</Fragment>
														)}
												</div>
												<CustomField
													name="password2"
													placeholder="Confirm Password"
													type="password"
													errors={errors}
													touched={touched}
												/>
											</div>

											<div class="mt-6 mb-2">
												{isObjectEmpty(errors) &&
												touched.email ? (
													<SubmitButton
														text="Sign Up"
														disabled={false}
													/>
												) : (
													<SubmitButton
														text="Sign Up"
														disabled={true}
													/>
												)}
											</div>
										</Form>
										{this.props.hasTriedRegister && this.props.error && (
											<div
												class="text-red-500 px-4 py-3 text-center rounded relative text-sm mt-5"
												role="alert"
											>
											    {this.props.error}
											</div>
										)}
									</Fragment>
								)}
							</Formik>
						</div>
						<div class="w-full sm:mt-2 py-5 flex justify-center bg-white dark:bg-gray-850 sm:border dark:border-gray-700 text-sm text-gray-700 dark:text-gray-400">
							<div>
								Have an account?{" "}
								<Link
									to="/login"
									class="font-medium text-sm text-blue-500 focus:outline-none"
								>
									Log In
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.auth.error,
	hasTriedRegister: state.auth.hasTriedRegister,
});

export default connect(mapStateToProps, { register })(Register);
