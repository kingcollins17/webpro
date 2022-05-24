import React, { useState } from "react";
import "../styles/regular/reg.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
	};
	return (
		<div className="form-page">
			<form onSubmit={handleSubmit}>
				<h2>Sign Up</h2>
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
					<button type="submit">Register</button>
					<p>
						Already have an account?, <Link to="/login">Login</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
