import React from "react";
import { Link } from "react-router-dom";
import "../styles/regular/navpanel.css";
const NavPanel = () => {
	return (
		<div className="nav-pane">
			<div className="frame">
				<div className="contain">
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M 3 12 l 2 -2 m 0 0 l 7 -7 l 7 7 M 5 10 v 10 a 1 1 0 0 0 1 1 h 3 m 10 -11 l 2 2 m -2 -2 v 10 a 1 1 0 0 1 -1 1 h -3 m -6 0 a 1 1 0 0 0 1 -1 v -4 a 1 1 0 0 1 1 -1 h 2 a 1 1 0 0 1 1 1 v 4 a 1 1 0 0 0 1 1 m -6 0 h 6"
							/>
						</svg>
						Home
					</Link>
				</div>

				<div className="contain">
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M 10 5 a 1 1 0 0 1 1 1 v 3 h 3 a 1 1 0 1 1 0 2 h -3 v 3 a 1 1 0 1 1 -2 0 v -3 H 6 a 1 1 0 1 1 0 -2 h 3 V 6 a 1 1 0 0 1 1 -1 Z"
							/>
						</svg>
						Add task
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavPanel;
