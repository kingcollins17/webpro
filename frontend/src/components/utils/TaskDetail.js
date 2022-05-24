import "../styles/regular/tdetail.css";

import React from "react";
import { useSelector } from "react-redux";

const TaskDetail = ({ id }) => {
	const tasks = useSelector((state) => state.task.tasks);
	const taskdetail = tasks ? tasks.filter((task) => task.id == id) : null;
	return (
		taskdetail &&
		taskdetail.map((task) => (
			<div className="t" key={task.id}>
				<div className="name">
					<h3>{task.name}</h3>
				</div>
				<div className="desc">
					<p>{task.description}</p>
				</div>
				<div className="price">
					<p>${task.value}</p>
				</div>
				<button>Continue</button>
			</div>
		))
	);
};

export default TaskDetail;
