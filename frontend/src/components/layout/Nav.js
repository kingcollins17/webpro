import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import "../styles/layout/nav.css";

const NavFrame = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const handleClick = () => {
		console.log("clicked logout");
		dispatch(logout());
	};
	return (
		<div className="nav">
			<div className="wrap">
				<nav>
					{isAuth == true ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M 10 9 a 3 3 0 1 0 0 -6 a 3 3 0 0 0 0 6 Z m -7 9 a 7 7 0 1 1 14 0 H 3 Z"
							/>
						</svg>
					) : null}
					{isAuth == false ? <Link to="/user/dash">Sign Up</Link> : null}
					{isAuth == false ? (
						<Link to="/login">Log in</Link>
					) : (
						<button type="button" onClick={handleClick}>
							logoutere
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									clipRule="evenodd"
									fillRule="evenodd"
									d="M 3 3 a 1 1 0 0 0 -1 1 v 12 a 1 1 0 1 0 2 0 V 4 a 1 1 0 0 0 -1 -1 Z m 10.293 9.293 a 1 1 0 0 0 1.414 1.414 l 3 -3 a 1 1 0 0 0 0 -1.414 l -3 -3 a 1 1 0 1 0 -1.414 1.414 L 14.586 9 H 7 a 1 1 0 1 0 0 2 h 7.586 l -1.293 1.293 Z"
								/>
							</svg>
						</button>
					)}
				</nav>
				<button className="menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							clipRule="evenodd"
							fillRule="evenodd"
							d="M 3 5 a 1 1 0 0 1 1 -1 h 12 a 1 1 0 1 1 0 2 H 4 a 1 1 0 0 1 -1 -1 Z M 3 10 a 1 1 0 0 1 1 -1 h 12 a 1 1 0 1 1 0 2 H 4 a 1 1 0 0 1 -1 -1 Z M 3 15 a 1 1 0 0 1 1 -1 h 12 a 1 1 0 1 1 0 2 H 4 a 1 1 0 0 1 -1 -1 Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default NavFrame;
