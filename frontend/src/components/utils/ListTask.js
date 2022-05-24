import React, { useState } from "react";
import LoadSpiner from "./LoadSpiner";
import TaskDetail from "./TaskDetail";

import { useSelector } from "react-redux";
import "../styles/regular/listtask.css";

const ListTask = () => {
	const task = useSelector((state) => state.task);

	const [taskForm, setForm] = useState(null);
	const clearForm = () => {
		setForm(null);
	};
	const handleClick = (id) => {
		setForm(
			<div className="detail">
				<TaskDetail id={id} />
				<div className="btn">
					<button
						type="button"
						onClick={() => {
							clearForm();
						}}
					>
						cancel
					</button>
				</div>
			</div>
		);
	};
	return (
		<div className="tasks">
			{taskForm}
			<p className="head">Available tasks</p>
			{task.isLoading && <LoadSpiner />}
			<div className="cont">
				{task.tasks && (
					<div className="list">
						{task.tasks.map((task) => (
							<div className="item" key={task.id}>
								<div className="item-cont">
									<div className="io">
										<p>{task.name}</p>
										<p>${task.value}</p>
									</div>
									<button
										type="button"
										onClick={() => {
											handleClick(task.id);
										}}
									>
										view
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ListTask;
