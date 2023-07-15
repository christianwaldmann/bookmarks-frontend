import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { Helmet } from "react-helmet";
import Alert from "react-s-alert";
import Home from "./views/Home";
import Personal from "./views/Personal";
import Career from "./views/Career";
import Programming from "./views/Programming";
import Gaming from "./views/Gaming";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";
import Error404NotFound from "./views/Error404NotFound";
import { ThemeProvider } from "./ThemeContext";
import PrivateRoute from "./components/common/PrivateRoute";
import { loadUser } from "./actions/auth";

import { Provider } from "react-redux";
import store from "./store";
import Landing from "./views/Landing";

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Router>
				<Provider store={store}>
					<ThemeProvider>
						<div style={{ height: "100vh" }}>
							<Helmet>
								<title>Bookmarks</title>
								<body class="bg-white dark:bg-gray-850"></body>
								<script async src={window._env_.BOOKMARKS_UMAMI_TRACKING_LINK} data-website-id={window._env_.BOOKMARKS_UMAMI_TRACKING_CODE}></script>
							</Helmet>
							<Switch>
								<PrivateRoute
									exact
									path={["/home", ""]}
									component={Home}
								/>
								<PrivateRoute
									exact
									path="/personal"
									component={Personal}
								/>
								<PrivateRoute
									exact
									path="/career"
									component={Career}
								/>
								<PrivateRoute
									exact
									path="/programming"
									component={Programming}
								/>
								<PrivateRoute
									exact
									path="/gaming"
									component={Gaming}
								/>
								<PrivateRoute
									exact
									path="/settings"
									component={Settings}
								/>
								<Route exact path="/login">
									<Login />
								</Route>
								<Route exact path="/register">
									<Register />
								</Route>
								<Route component={Error404NotFound} />
							</Switch>
							<Alert stack={{ limit: 3 }} />
						</div>
					</ThemeProvider>
				</Provider>
			</Router>
		);
	}
}

export default App;
