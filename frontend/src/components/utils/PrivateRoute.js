import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
	const isAuth = useSelector((state) => state.auth.isAuth);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth != true ? <Redirect to="/login" /> : <Component {...props} />
			}
		/>
	);
}

export default PrivateRoute;
