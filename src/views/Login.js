import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { Formik, Form } from "formik";
import CustomField from "../components/CustomField";
import { isObjectEmpty } from "../utility_functions";
import SubmitButton from "../components/SubmitButton";

export class Login extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};

	onSubmit = (values) => {
		this.props.login(values.username, values.password);
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
									if (!values.username) {
										errors.username =
											"Username is required";
									}
									if (!values.password) {
										errors.password =
											"Password is required";
									}
									return errors;
								}}
								onSubmit={(values) => {
									this.onSubmit(values);
								}}
							>
								{({ handleSubmit, errors, touched }) => (
									<Fragment>
										<Form
											onSubmit={handleSubmit}
											class="mt-8"
										>
											<div className="form-group mt-2">
												<CustomField
													name="username"
													placeholder="Username"
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
											<div class="mt-4">
												{isObjectEmpty(errors) &&
												touched.username ? (
													<SubmitButton
														text="Log In"
														disabled={false}
													/>
												) : (
													<SubmitButton
														text="Log In"
														disabled={true}
													/>
												)}
											</div>
										</Form>
										{this.props.hasTriedLogin && this.props.error && (
											<div
												class="text-red-500 px-4 py-3 text-center rounded relative text-sm mt-5"
												role="alert"
											>
											    {this.props.error}
											</div>
										)}
										<div className="mt-12 sm:mt-6 flex justify-center">
											<Link
												to="/password/reset"
												class="text-xs text-gray-700 dark:text-gray-400 focus:outline-none"
											>
												Forgot Password?
											</Link>
										</div>
									</Fragment>
								)}
							</Formik>
						</div>
						<div class="w-full sm:mt-2 py-5 flex justify-center bg-white dark:bg-gray-850 sm:border dark:border-gray-700 text-sm text-gray-700 dark:text-gray-400">
							<div>
								Don't have an account?{" "}
								<Link
									to="/register"
									class="font-medium text-sm text-blue-500 focus:outline-none"
								>
									Sign up
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
	hasTriedLogin: state.auth.hasTriedLogin,
});

export default connect(mapStateToProps, { login })(Login);
