import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import Landing from "../../views/Landing";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				return <h2>Loading ...</h2>;
			} else if (!auth.isAuthenticated) {
				if (rest.location.pathname === "/") {
					return <Landing />;
				}
				return <Redirect to="/login" />;
			} else {
				return <Component {...props} />;
			}
		}}
	/>
);

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
