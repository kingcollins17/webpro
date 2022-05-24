import React from "react";
import "../styles/regular/reg.css";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		console.log("submitted");
	};
	if (isAuth) {
		return <Redirect to="/user/dash" />;
	} else {
		return (
			<div className="form-page">
				<form onSubmit={handleSubmit}>
					<h2>Log In</h2>
					<div className="form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => {
								setPass(e.target.value);
							}}
						/>
					</div>
					<div className="btn">
						<button type="submit">Login</button>
						<p>
							Dont't have an account?, <Link to="/register">Register</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
};

export default LoginForm;
