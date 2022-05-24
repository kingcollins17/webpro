import FundPanel from "../utils/FundPanel";
import React, { useEffect, useState } from "react";
import NavPanel from "../utils/NavPanel";
import { useDispatch, useSelector } from "react-redux";
import fetchFunds from "../../redux/actions/fundActions";
import ListTask from "../utils/ListTask";
import TaskDetail from "../utils/TaskDetail";

const DashBoard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchFunds());
	});
	return (
		<div className="dash-page">
			<FundPanel />
			<ListTask />

			{/*<NavPanel />*/}
		</div>
	);
};

export default DashBoard;
