import React, { useEffect } from "react";
import NavFrame from "./layout/Nav";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import RegisterForm from "./accounts/Register";
import LoginForm from "./accounts/Login";
import Footer from "./layout/Footer";
import store from "../redux/store";
import { Provider } from "react-redux";
import fetchTasks from "../redux/actions";
import { CLEAR_STATE } from "../redux/actions/type";
import { loadUser } from "../redux/actions/authActions";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./page/Dash";
function App() {
	useEffect(() => {
		store.dispatch(fetchTasks());
		//localStorage.removeItem("token");
		store.dispatch(loadUser());
	});
	return (
		<Provider store={store}>
			<HashRouter>
				<div className="app">
					<NavFrame />
					<Switch>
						<Route path="/register">
							<RegisterForm />
						</Route>
						<Route path="/login">
							<LoginForm />
						</Route>
						<PrivateRoute path="/user/dash" component={DashBoard} />
					</Switch>
				</div>
			</HashRouter>
		</Provider>
	);
}

export default App;
