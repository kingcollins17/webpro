import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/regular/fundpane.css";

function FundPanel() {
	const fund = useSelector((state) => state.fund.funds);
	const user = useSelector((state) => state.auth.user);

	return (
		<div className="panel">
			<div className="user">{user && user.email}</div>
			{fund && (
				<div className="fund">
					<div className="bal">
						<p>Balance</p>
						<h2>${fund.balance}</h2>
					</div>
					<div className="status">
						<p>status</p>
						<h4>{fund.status}</h4>
					</div>
				</div>
			)}
			<div className="btn-grp">
				<button type="button">Deposit</button>
				<button type="button">Withdraw</button>
			</div>
		</div>
	);
}

export default FundPanel;
